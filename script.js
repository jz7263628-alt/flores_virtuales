<script>
/* 1. CONFIGURACIÓN INICIAL Y LOGIN */
const login = document.getElementById("login");
const passInput = document.getElementById("pass");
const counter = document.getElementById("counter");
const bgHearts = document.getElementById("bgHearts");
const poemEl = document.getElementById("poema");
const letter = document.getElementById("letter");
const sign = document.getElementById("sign");

// Función para entrar con la contraseña
function enter(){
    // Acepta "Jerry" o "jerry"
    if(passInput.value.toLowerCase() === "jerry"){
        login.style.display = "none";
        // Intentar iniciar música de fondo tras el login
        document.getElementById("bgMusic").play().catch(() => {});
    } else {
        alert("Contraseña incorrecta 🥺");
    }
}

/* 2. LLUVIA DE CORAZONES EN EL LOGIN */
setInterval(()=>{
    if(login.style.display !== "none"){
        const h = document.createElement("div");
        h.className = "loginRain";
        h.innerHTML = "💗";
        h.style.left = Math.random() * 100 + "vw";
        h.style.animationDuration = (3 + Math.random() * 3) + "s";
        login.appendChild(h);
        setTimeout(() => h.remove(), 6000);
    }
}, 300);

/* 3. CONTROL DE MÚSICA Y FRASES AL HACER CLIC */
let musicPlayed = false;

function toggleSong(){
    const ourSong = document.getElementById("ourSong");
    const bgMusic = document.getElementById("bgMusic");
    const btnPlay = document.getElementById("btnPlay");
    
    if(ourSong.paused){
        bgMusic.pause();
        ourSong.currentTime = 0;
        ourSong.play().catch(() => {});
        btnPlay.innerHTML = "⏸️ Pausar";
    } else {
        ourSong.pause();
        bgMusic.play().catch(() => {});
        btnPlay.innerHTML = "▶️ Reproducir";
    }
}

const frases = [
    "Eres mi lugar favorito 🤎",
    "Contigo todo es mejor 💞",
    "Mi coincidencia más bonita ✨",
    "Tu sonrisa es mi paz"
];

document.addEventListener("click", e => {
    // No activar si se hace clic en botones o inputs
    if(e.target.tagName === "BUTTON" || e.target.tagName === "INPUT") return;
    
    // Activar música de fondo al primer clic si el navegador la bloqueó
    if (!musicPlayed) {
        document.getElementById("bgMusic").play().catch(() => {});
        musicPlayed = true;
    }

    // Crear frase flotante
    const f = document.createElement("div");
    f.className = "tapPhrase";
    f.innerText = frases[Math.floor(Math.random() * frases.length)];
    f.style.left = e.clientX + "px";
    f.style.top = e.clientY + "px";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 2000);
});

/* 4. GALERÍA Y ZOOM */
document.querySelectorAll("#gallery img").forEach(img => {
    img.onclick = () => { 
        document.getElementById("zoom").style.display = "flex"; 
        document.getElementById("zoomImg").src = img.src; 
    }
});

// Corazones flotando en el fondo
for(let i=0; i<25; i++){
    const s = document.createElement("span");
    s.innerHTML = "❤";
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = (16 + Math.random() * 26) + "px";
    s.style.animationDuration = (8 + Math.random() * 10) + "s";
    bgHearts.appendChild(s);
}

/* 5. CONTADOR DE TIEMPO */
const start = new Date(2024, 8, 11); // Mes 8 es Septiembre en JS

function updateCounter(){
    const now = new Date();
    const diff = now - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    counter.innerHTML = `<h3 style="margin:0;font-size:28px;animation:pulseCounter 1s infinite alternate;">${days} días 💗</h3>${hours}h ${minutes}m ${seconds}s`;
}
updateCounter();
setInterval(updateCounter, 1000);

/* 6. EFECTO DE ESCRITURA (POEMA Y CARTA) */
const poemaTexto = "Cuando me enamoré de ti\n\n\"Cuando me enamoré de ti, entendí que no era que todas aquellas personas que me hablaron del amor estuvieran mal, sino que nunca me hablaron de ti.\n\nTe prometo\n\n\"Si te apagas, te prometo amarte con más fuerza.\nPrometo devolverte la luz que te caracteriza,\nregar tu jardín con el amor que me brindaste cuando estaba marchito.\nTe prometo cuidarte cuando enfermes\ny hacer lo que haga falta para asegurarme de que vuelvas a florecer.\n\nPorque, mi amor, si hay algo que le pido a Dios es que,\nsi alguna vez llega a ser necesario,\nme permita ser aquello que te haga falta,\ncomo tú lo fuiste conmigo.\"";

function typeText(t, el){
    el.textContent = "";
    const chars = [...t];
    let i = 0;
    function w(){
        if(i < chars.length){
            el.textContent += chars[i++];
            setTimeout(w, 28);
        }
    }
    w();
}

// Iniciar el poema un poco después de cargar
setTimeout(() => {
    const pEl = document.getElementById("poema");
    if(pEl) typeText(poemaTexto, pEl);
}, 1200);

function openLetter(){
    document.getElementById("writeSound").play();
    const txt = "Esta carta es para ti.\nTe amo mi cebollín 🤎\nEspero compartir más cosas juntos 🥰🧸";
    letter.style.display = "block";
    typeText(txt, letter);
    setTimeout(() => sign.style.opacity = 1, 4200);
}

/* 7. EFECTOS DEL ACUARIO DE JERRY */
function createAquariumEffects(){
    const aquarium = document.getElementById("aquarium");
    if(!aquarium) return;
    
    // Generar burbujas
    setInterval(() => {
        const bubble = document.createElement("div");
        bubble.className = "aqua-bubble";
        const size = 4 + Math.random() * 14;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = (Math.random() * 94 + 3) + "%";
        bubble.style.bottom = "40px";
        bubble.style.animationDuration = (4 + Math.random() * 4) + "s";
        aquarium.appendChild(bubble);
        setTimeout(() => { if(bubble.parentNode) bubble.remove(); }, 5000);
    }, 600);

    // Partículas de luz
    setInterval(() => {
        const particle = document.createElement("div");
        particle.className = "aqua-particle";
        particle.style.left = (Math.random() * 90 + 5) + "%";
        particle.style.bottom = (Math.random() * 150 + 40) + "px";
        aquarium.appendChild(particle);
        setTimeout(() => { if(particle.parentNode) particle.remove(); }, 8000);
    }, 1200);
}

// Iniciar efectos del acuario
setTimeout(createAquariumEffects, 700);
</script>
