let inputDirection = { x: 0, y: 0 };
let paused = false;

export function getInputDirection() {
    return inputDirection;
}

export function getPaused() {
    return paused;
}

window.addEventListener('keydown', (event) => {
  const keyName = event.key;
  switch (keyName) {
    case "ArrowUp":
        if (inputDirection.y !== 0 || paused) {
            break;
        }
        inputDirection = { x: 0, y: -1 }
        break;
    case "ArrowDown":
        if (inputDirection.y !== 0 ||paused) {
            break;
        }
        inputDirection = { x: 0, y: 1 }
        break;
    case "ArrowRight":
        if (inputDirection.x !== 0 || paused) {
            break;
        }
        inputDirection = { x: 1, y: 0 }
        break;
    case "ArrowLeft":
        if (inputDirection.x !== 0 || paused) {
            break;
        }
        inputDirection = { x: -1, y: 0 }
        break;
    case "p":
        if (!paused) {
            paused = true;
        }
        else {
            paused = false;
        }
        break;
      default:
        break;
    }
})
