/* estrellas */
const fondo = document.getElementById("estrellas");
for (let i = 0; i < 140; i++) {
  const s = document.createElement("div");
  s.className = "estrella";
  s.style.left = Math.random()*100+"%";
  s.style.top = Math.random()*100+"%";
  fondo.appendChild(s);
}

/* textos orbitando */
function llenarOrbita(id, textos, radio) {
  const orb = document.getElementById(id);
  textos.forEach((t,i) => {
    const el = document.createElement("div");
    el.className = "objeto-orbita";
    el.innerText = t;

    const ang = (i/textos.length)*Math.PI*2;
    el.style.left = Math.cos(ang)*radio + radio + "px";
    el.style.top = Math.sin(ang)*radio + radio + "px";

    orb.appendChild(el);
  });
}

llenarOrbita("orbita1",
  ["Para ti","Mi amor","Siempre","Juntos","Te adoro","💖"], 180);

llenarOrbita("orbita2",
  ["Eres especial","Contigo","Mi vida","Te pienso","💗"], 250);

/* lluvia de corazones */
function lluvia() {
  const c = document.createElement("div");
  c.className = "corazon";
  c.innerText = ["💖","💗","💕","💘"][Math.floor(Math.random()*4)];
  c.style.left = Math.random()*window.innerWidth+"px";
  c.style.top = "-20px";
  c.style.animationDuration = 4+Math.random()*4+"s";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),8000);
}
setInterval(lluvia, 350);

/* explosión al clic */
document.addEventListener("click", e => {
  for (let i=0;i<18;i++){
    const p = document.createElement("div");
    p.className = "particula";
    p.innerText = "💖";
    p.style.left = e.clientX+"px";
    p.style.top = e.clientY+"px";
    p.style.setProperty("--dx",(Math.random()*200-100)+"px");
    p.style.setProperty("--dy",(Math.random()*200-100)+"px");
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1000);
  }
});
