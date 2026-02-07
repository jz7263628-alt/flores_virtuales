const messages = document.querySelectorAll('.message');
let index = 0;

function showNextMessage() {
    if (index > 0) {
        messages[index - 1].style.display = 'none';
    }
    if (index < messages.length) {
        messages[index].style.display = 'block';
        index++;
    } else {
        index = 0; // Reinicia el ciclo si quieres que se repita
    }
}

// Muestra un nuevo mensaje cada 3 segundos
setInterval(showNextMessage, 3000); 

// Muestra el primer mensaje al cargar
showNextMessage();

// Nota: El ramo de girasoles de la imagen es una imagen estática o un SVG complejo, no es simple CSS/JS como las flores cayendo.
