const mensajes = [
  "Hecha con HTML 💻",
  "Diseñada con CSS 🎨",
  "Animada con JavaScript ✨",
  "Proyecto Escolar 🌼"
];

let i = 0;
const texto = document.getElementById("mensaje");

setInterval(() => {
  texto.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 2500);
