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

setInterval(showNextMessage, 3000); 

showNextMessage();
