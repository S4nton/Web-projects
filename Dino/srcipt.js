const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let jumpCount = 0;
let points = 0;
let calcPoints;

let listenerJump = function () {
    jump();
}

let listenerStart = function () {
    start();
}

function jump () {
    jumpCount++;
    if (dino.classList !== "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
}

function start () {
    document.addEventListener("keydown", listenerJump);
    cactus.classList.add("cactusMove");
    jumpCount = 0;
    points = 0;
    calcPoints = setInterval(function () {
        document.getElementById("points").innerHTML = "Points: " + (points++).toString();
    }, 330);
    document.removeEventListener("keydown", listenerStart);
}

function reset () {
    clearInterval(calcPoints);
    document.removeEventListener("keydown", listenerJump);
    cactus.classList.remove("cactusMove");
    document.addEventListener("keydown", listenerStart);
}

document.addEventListener("keydown", listenerStart);

setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER!");
        reset();
    }

    document.getElementById("jumpCount").innerHTML = "Jump count: " + jumpCount.toString();
}, 10);