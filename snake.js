import {getInputDirection} from "./input.js";
export const SNAKE_SPEED = 10;
const snakeBody = [{x: 11, y:11}];

export function update() {
    const direction = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[ i + 1 ] = { ...snakeBody[i] };
    }

    snakeBody[0].x += direction.x;
    snakeBody[0].y += direction.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement);
    })
}
