const mensajes = [
  "Eres mi todo 💖",
  "La flor siente tu amor 🌸",
  "La magia está viva ✨",
  "Gracias por tocarla 💜"
];

let i = 0;
const texto = document.getElementById("mensaje");
const corazones = document.getElementById("corazones");

function magia() {
  texto.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;

  for (let j = 0; j < 5; j++) {
    const c = document.createElement("div");
    c.className = "corazon";
    c.textContent = "💖";
    c.style.left = Math.random() * 100 + "%";
    c.style.bottom = "120px";
    corazones.appendChild(c);

    setTimeout(() => c.remove(), 4000);
  }
}
