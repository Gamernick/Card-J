let card = document.getElementById("card");
let openBtn = document.getElementById("openBtn");
let music = document.getElementById("bg-music");
let balloonContainer = document.getElementById("balloon-container");
let confettiContainer = document.getElementById("confetti-container");

/* OPEN CARD */
openBtn.addEventListener("click", () => {
    card.classList.add("open");
    music.play();            // play music on open
    openBtn.style.display = "none";

    startBalloons();
    startConfetti();
});

/* Balloons */
function startBalloons() {
    createBalloon(); // appear immediately
    setInterval(createBalloon, 500);
}

function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const darkColors = [
        "hsl(0, 80%, 40%)",
        "hsl(30, 80%, 35%)",
        "hsl(60, 80%, 35%)",
        "hsl(120, 80%, 30%)",
        "hsl(220, 80%, 40%)",
        "hsl(260, 80%, 45%)",
        "hsl(300, 80%, 45%)"
    ];

    balloon.style.background = darkColors[Math.floor(Math.random() * darkColors.length)];
    balloon.style.left = Math.random() * 90 + "%";
    balloon.style.animationDuration = (5 + Math.random() * 3) + "s";

    balloonContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 9000);
}

/* Confetti */
function startConfetti() {
    setInterval(() => {
        let c = document.createElement("div");
        c.classList.add("confetti");

        const colors = ["#ff0055", "#ffa600", "#00d4ff", "#00ff6a", "#b400ff", "#ff00f5"];
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (2 + Math.random() * 2) + "s";

        confettiContainer.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }, 120);
}