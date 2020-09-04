
import {update as updateSnake, draw as drawSnake, snakeSpeed} from "./snake.js";
let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    let secsSinceLast = (currentTime-lastRenderTime) / 1000
    if (secsSinceLast < 1 / snakeSpeed) {
        return;
    }
    lastRenderTime = currentTime;
    console.log(secsSinceLast);

    update()

    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake();
}

function draw() {
    drawSnake();
}
