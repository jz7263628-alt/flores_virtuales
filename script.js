const campo = document.getElementById("campo");

function crearFlor(x, y) {
  const flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = x + "px";
  flor.style.top = y + "px";

  const colores = ["#ff6b6b", "#ff9ff3", "#feca57", "#ff7675", "#fd79a8"];
  const color = colores[Math.floor(Math.random() * colores.length)];

  for (let i = 0; i < 6; i++) {
    const p = document.createElement("div");
    p.className = "petalo";
    p.style.background = color;

    const ang = i * 60;
    p.style.left = 12 + Math.cos(ang * Math.PI/180) * 12 + "px";
    p.style.top  = 12 + Math.sin(ang * Math.PI/180) * 12 + "px";

    flor.appendChild(p);
  }

  const centro = document.createElement("div");
  centro.className = "centro";
  flor.appendChild(centro);

  campo.appendChild(flor);
}

document.addEventListener("click", e => {
  crearFlor(e.clientX - 20, e.clientY - 20);
});

for (let i = 0; i < 18; i++) {
  crearFlor(
    Math.random() * window.innerWidth,
    120 + Math.random() * (window.innerHeight - 150)
  );
}
