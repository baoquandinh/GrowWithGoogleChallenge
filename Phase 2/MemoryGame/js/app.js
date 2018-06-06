// const startTime = performance.now();

let game = new Game();
game.start();
console.log(game.counter);
// const endTime = performance.now();
// console.log(endTime - startTime + ` milliseconds`);

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', game.restart);