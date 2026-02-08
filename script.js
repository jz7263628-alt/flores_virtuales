const mensajes = [
  "Te Amo ❤️",
  "Mi Reina 👑",
  "Amor de mi vida 💕",
  "My Love 💖"
];

let i = 0;
const texto = document.getElementById("mensaje");

setInterval(() => {
  texto.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 2500);
