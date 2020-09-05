
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js";
import {checkFood as checkFood, drawFood as drawFood} from "./food.js";
import {getPaused as paused } from "./input.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    window.requestAnimationFrame(main);
    let secsSinceLast = (currentTime-lastRenderTime) / 1000
    if (secsSinceLast < 1 / SNAKE_SPEED || paused() ) {
        return;
    }

    lastRenderTime = currentTime;

    update()
    draw(gameBoard)
}

window.requestAnimationFrame(main)

function update() {
    updateSnake();
    checkFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
