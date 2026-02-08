const mensajes = [
  "Te Amo ❤️",
  "Mi reina 👑",
  "Amor de mi vida",
  "Eres preciosa ✨",
  "My love 💕"
];

let i = 0;
const text = document.getElementById("message");

setInterval(() => {
  text.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 2500);
