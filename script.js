const mensajes = [
  "Eres mi todo 💖",
  "Esta flor no se marchita 🌸",
  "Porque lo bonito se cuida ✨",
  "Siempre en mi corazón 💜"
];

let indice = 0;
const texto = document.getElementById("mensaje");
const particulas = document.getElementById("particulas");

setInterval(() => {
  texto.textContent = mensajes[indice];
  indice = (indice + 1) % mensajes.length;

  crearParticula();
}, 3500);

function crearParticula() {
  const p = document.createElement("div");
  p.className = "particula";
  p.textContent = Math.random() > 0.5 ? "💖" : "✨";
  p.style.left = Math.random() * 100 + "%";
  p.style.bottom = "0px";
  particulas.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 6000);
}
