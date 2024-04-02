// ctx.lineTo(x, y);
// ctx.stroke();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let speed = 100;

let lastTime = 0;

function update(deltaTime) {
    x += speed * deltaTime;

    const screenWidth = canvas.width;
    if (x > screenWidth) {
        x = 100;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, x, y);
}

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    update(deltaTime / 1000);

    draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);