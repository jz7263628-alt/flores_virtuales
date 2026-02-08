const campo = document.getElementById("campo");

const colores = [
  "#ff6b6b",
  "#ff9ff3",
  "#feca57",
  "#1dd1a1",
  "#48dbfb",
  "#54a0ff",
  "#5f27cd"
];

document.addEventListener("click", e => {
  crearFlor(e.clientX, e.clientY);
});

// flores iniciales
for (let i = 0; i < 12; i++) {
  crearFlor(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  );
}

function crearFlor(x, y) {
  const flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = x + "px";
  flor.style.top = y + "px";

  const total = 8;
  const radio = 18;

  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "petalo";
    p.style.background = colores[Math.floor(Math.random() * colores.length)];

    const ang = (i * 360 / total) * Math.PI / 180;
    p.style.left = Math.cos(ang) * radio + "px";
    p.style.top = Math.sin(ang) * radio + "px";

    flor.appendChild(p);
  }

  const centro = document.createElement("div");
  centro.className = "petalo";
  centro.style.background = "#ffd93d";
  centro.style.left = "0px";
  centro.style.top = "0px";

  flor.appendChild(centro);
  campo.appendChild(flor);
}
