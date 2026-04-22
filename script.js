// LOGIN
function enter(){
 if(pass.value==="Jerry"){
  login.style.display="none";
 }
}

// MÚSICA
let musicPlayed=false;

function toggleSong(){
 if(ourSong.paused){
  bgMusic.pause();
  ourSong.play().catch(()=>{});
 }else{
  ourSong.pause();
  bgMusic.play().catch(()=>{});
 }
}

// FRASES
const frases=[
"Eres mi lugar favorito 🤎",
"Contigo todo es mejor 💞",
"Mi coincidencia más bonita ✨",
"Tu sonrisa es mi paz"
];

document.addEventListener("click",e=>{
 if(e.target.tagName==="BUTTON"||e.target.tagName==="INPUT") return;

 if (!musicPlayed) {
  bgMusic.play().catch(()=>{});
  musicPlayed = true;
 }

 const f=document.createElement("div");
 f.className="tapPhrase";
 f.innerText=frases[Math.floor(Math.random()*frases.length)];
 f.style.left=e.clientX+"px";
 f.style.top=e.clientY+"px";
 document.body.appendChild(f);
 setTimeout(()=>f.remove(),2000);
});

// GALERÍA
document.querySelectorAll("#gallery img").forEach(img=>{
 img.onclick=()=>{ zoom.style.display="flex"; zoomImg.src=img.src; }
});

// CONTADOR
const start=new Date(2024,8,11);

function updateCounter(){
 const now=new Date();
 const diff=now-start;

 const days=Math.floor(diff/(1000*60*60*24));
 const hours=Math.floor((diff/(1000*60*60))%24);
 const minutes=Math.floor((diff/(1000*60))%60);
 const seconds=Math.floor((diff/1000)%60);

 counter.innerHTML=`<h3>${days} días 💗</h3>
 ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCounter,1000);

// POEMA COMPLETO
const poemaTexto=`Cuando me enamoré de ti

"Cuando me enamoré de ti, entendí que no era que todas aquellas personas que me hablaron del amor estuvieran mal, sino que nunca me hablaron de ti.

Te prometo

"Si te apagas, te prometo amarte con más fuerza.
Prometo devolverte la luz que te caracteriza,
regar tu jardín con el amor que me brindaste cuando estaba marchito.
Te prometo cuidarte cuando enfermes
y hacer lo que haga falta para asegurarme de que vuelvas a florecer.

Porque, mi amor, si hay algo que le pido a Dios es que,
si alguna vez llega a ser necesario,
me permita ser aquello que te haga falta,
como tú lo fuiste conmigo."`;

function typeText(t,el){
 let i=0;
 function w(){
  if(i<t.length){
   el.textContent+=t[i++];
   setTimeout(w,25);
  }
 }
 w();
}

setTimeout(()=>typeText(poemaTexto,poema),1200);

// CARTA
function openLetter(){
 writeSound.play();
 letter.style.display="block";
 typeText("Te amo mi cebollín 🤎",letter);
}

// 🐶 CANELITO
const dog=document.getElementById("dog");

if(dog){
 dog.addEventListener("click",(e)=>{

  dog.classList.add("dog-jump");
  setTimeout(()=>dog.classList.remove("dog-jump"),600);

  const bark=new Audio("https://assets.mixkit.co/active_storage/sfx/2057/2057-preview.mp3");
  bark.play().catch(()=>{});

  for(let i=0;i<6;i++){
   const heart=document.createElement("div");
   heart.className="dog-heart";
   heart.innerHTML="💗";
   heart.style.left=e.clientX+"px";
   heart.style.top=e.clientY+"px";
   document.body.appendChild(heart);
   setTimeout(()=>heart.remove(),2000);
  }
 });
}
