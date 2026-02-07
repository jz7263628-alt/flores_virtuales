const flowerContainer = document.querySelector('.flower-love');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.position = "absolute";
    flower.style.fontSize = (Math.random() * 20 + 40) + "px";
    flower.style.top = "-50px";
    flower.innerText = "🌸"; 

    flowerContainer.appendChild(flower);

    flower.animate([
        { transform: 'translateY(0vh) rotate(0deg)' },
        { transform: 'translateY(110vh) rotate(360deg)' }
    ], {
        duration: Math.random() * 3000 + 3000,
        easing: 'linear'
    });

    setTimeout(() => {
        flower.remove();
    }, 6000);
}

setInterval(createFlower, 300);
