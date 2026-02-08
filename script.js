const mensajes = [
  "Te Amo ❤️",
  "Mi Reina 👑",
  "Amor de mi vida 💕",
  "Eres preciosa ✨",
  "My Love 💖"
];

let i = 0;
const texto = document.getElementById("mensaje");

setInterval(() => {
  texto.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 3000);

// Música
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  music.play();
  btn.textContent = "🎵 Sonando";
});
