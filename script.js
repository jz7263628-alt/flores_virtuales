const mensajes = [
  "Te Amo ❤️",
  "Mi Reina 👑",
  "Amor de mi vida 💕",
  "Eres mi todo 💖",
  "Siempre contigo 💫"
];

let i = 0;
const texto = document.getElementById("mensaje");

setInterval(() => {
  texto.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 2500);

// 💖 Corazones flotando
setInterval(() => {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖";
  corazon.style.position = "absolute";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.bottom = "0px";
  corazon.style.fontSize = "24px";
  corazon.style.animation = "subir 4s linear forwards";
  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 4000);
}, 800);

// Animación corazones
const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
