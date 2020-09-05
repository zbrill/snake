import {snakeBody} from "./snake.js";

let foodPos = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};

export function checkFood() {
    if (snakeBody[0].x === foodPos.x && snakeBody[0].y === foodPos.y) {
        snakeBody.length += 2;
        foodPos = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
    }
    while (snakeBody.includes(foodPos)) {
        foodPos = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
    }
}

export function drawFood(gameBoard) {
    const food = document.createElement('div');
    food.style.gridRowStart = foodPos.y;
    food.style.gridColumnStart = foodPos.x;
    food.classList.add('food');
    gameBoard.appendChild(food);
}
