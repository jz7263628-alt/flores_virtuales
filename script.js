const jardin = document.getElementById("jardin");

const colores = [
    "#ff6b6b",
    "#ff9ff3",
    "#feca57",
    "#48dbfb",
    "#1dd1a1",
    "#ff9f43",
    "#ee5253"
];

document.addEventListener("click", (e) => {
    crearFlor(e.clientX, e.clientY);
});

function crearFlor(x, y) {
    const flor = document.createElement("div");
    flor.className = "flor";
    flor.style.left = x + "px";
    flor.style.top = y + "px";

    for (let i = 0; i < 6; i++) {
        const petalo = document.createElement("div");
        petalo.className = "petalo";

        const color = colores[Math.floor(Math.random() * colores.length)];
        petalo.style.background = color;

        const angulo = (i * 60) * Math.PI / 180;
        const radio = 18;

        petalo.style.left = 10 + Math.cos(angulo) * radio + "px";
        petalo.style.top = 10 + Math.sin(angulo) * radio + "px";

        flor.appendChild(petalo);
    }

    const centro = document.createElement("div");
    centro.className = "centro";
    flor.appendChild(centro);

    jardin.appendChild(flor);
}
