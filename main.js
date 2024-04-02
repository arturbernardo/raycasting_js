const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;
let speed = 100;

let lastTime = 0;

function update(deltaTime) {
    // x += speed * deltaTime;

    // const screenWidth = canvas.width;
    // if (x > screenWidth) {
    //     x = 100;
    // }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWalls();

    ctx.fillStyle = "#000000";
    ctx.fillRect (mouseX, mouseY, 4, 4);

    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(wallsPositionX[0], wallsPositionY[0]);
    ctx.stroke();
}

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    update(deltaTime / 1000);

    draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function getRelativeCoordinates(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
}

window.addEventListener('mousemove', function (e) {
    const uiWrapper = document.getElementById("myCanvas");
    const coords = getRelativeCoordinates(e, uiWrapper);
    mouseX = coords.x;
    mouseY = coords.y;
});

var wallsPositionX = [getRandomInt(800), getRandomInt(800), getRandomInt(800), getRandomInt(800)];
var wallsPositionY = [getRandomInt(800), getRandomInt(800), getRandomInt(800), getRandomInt(800)];
var wallsSizeX = [getRandomInt(400), getRandomInt(400), getRandomInt(400), getRandomInt(400)];
var wallsSizeY = [getRandomInt(400), getRandomInt(400), getRandomInt(400), getRandomInt(400)];

function drawWalls() {
    ctx.beginPath();
    ctx.moveTo(wallsPositionX[0], wallsPositionY[0]);
    ctx.lineTo(wallsSizeX[0], wallsSizeY[0]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(wallsPositionX[1], wallsPositionY[2]);
    ctx.lineTo(wallsSizeX[1], wallsSizeY[2]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(wallsPositionX[2], wallsPositionY[3]);
    ctx.lineTo(wallsSizeX[2], wallsSizeY[3]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(wallsPositionX[3], wallsPositionY[3]);
    ctx.lineTo(wallsSizeX[3], wallsSizeY[3]);
    ctx.stroke();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}