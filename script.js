const mensajes = [
  "Te Amo",
  "Mi Reina",
  "My Love",
  "Amor de mi vida",
  "❤️"
];

const msg = document.getElementById("mensaje");

setInterval(() => {
  msg.textContent = mensajes[Math.floor(Math.random()*mensajes.length)];
  msg.style.transform = `translate(${Math.random()*40-20}px, ${Math.random()*40-20}px)`;
}, 2000);
