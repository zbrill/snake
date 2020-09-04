let inputDirection = { x: 0, y: 0 };

export function getInputDirection() {
    return inputDirection;
}

window.addEventListener('keydown', (event) => {
  const keyName = event.key;
  switch (keyName) {
    case "ArrowUp":
        if (inputDirection.y !== 0) {
            break;
        }
        inputDirection = { x: 0, y: -1 }
        break;
    case "ArrowDown":
        if (inputDirection.y !== 0) {
            break;
        }
        inputDirection = { x: 0, y: 1 }
        break;
    case "ArrowRight":
        if (inputDirection.x !== 0) {
            break;
        }
        inputDirection = { x: 1, y: 0 }
        break;
    case "ArrowLeft":
        if (inputDirection.x !== 0) {
            break;
        }
        inputDirection = { x: -1, y: 0 }
      default:
        break;
    }
})
