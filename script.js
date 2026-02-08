const campo = document.getElementById("campo");

/* ===== estrellas ===== */
for (let i = 0; i < 350; i++) {
  const s = document.createElement("div");
  s.className = "estrella";
  s.style.left = Math.random() * window.innerWidth + "px";
  s.style.top = Math.random() * window.innerHeight + "px";
  s.style.animationDuration = (1 + Math.random()*3) + "s";
  campo.appendChild(s);
}

/* ===== frases ===== */
const frases = [
"Te amo 💖",
"Eres mi universo",
"Contigo todo es mejor",
"Mi corazón es tuyo",
"Siempre tú ✨",
"Eres magia",
"Mi estrella favorita",
"Amor infinito"
];

function crearFrase(x,y){
  const f = document.createElement("div");
  f.className = "frase";
  f.innerText = frases[Math.floor(Math.random()*frases.length)];
  f.style.left = x + "px";
  f.style.top = y + "px";
  f.style.animationDuration = (4 + Math.random()*3) + "s";
  campo.appendChild(f);
  setTimeout(()=>f.remove(),7000);
}

/* ===== stickers ===== */
const stickers=["💖","💕","💘","💝","🌹","✨"];

function crearSticker(x,y){
  const s = document.createElement("div");
  s.className="sticker";
  s.innerText=stickers[Math.floor(Math.random()*stickers.length)];
  s.style.left=x+"px";
  s.style.top=y+"px";
  campo.appendChild(s);
  setTimeout(()=>s.remove(),4000);
}

/* ===== click ===== */
document.addEventListener("click", e=>{
  for(let i=0;i<6;i++){
    crearSticker(e.clientX,e.clientY);
  }
  crearFrase(e.clientX,e.clientY);
});

/* ===== estrella fugaz ===== */
setInterval(()=>{
  const s=document.createElement("div");
  s.className="estrella";
  s.style.left=Math.random()*innerWidth+"px";
  s.style.top=Math.random()*200+"px";
  s.style.boxShadow="0 0 8px white";
  campo.appendChild(s);
  setTimeout(()=>{
    s.style.transform="translate(300px,160px)";
    s.style.opacity=0;
  },50);
  setTimeout(()=>s.remove(),1200);
},3000);
