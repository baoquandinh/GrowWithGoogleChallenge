/*
* Game class keeps track of the game state.\
*  - Creates the deck
*  - Monitor scores, turns, and player rating
*  - Restarts the game
*/
const startTime = performance.now();
const deck = new Deck();
deck.create();
deck.shuffle();
const endTime = performance.now();
console.log(endTime - startTime + ` milliseconds`);

/*
*
*  Controls the game board and manages restart and performance
*
*/
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', restart);

function restart() {
    console.log("You restarted the game!");
}



