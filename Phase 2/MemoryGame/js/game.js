/*
* Game class keeps track of the game state.\
*  - Creates the deck
*  - Monitor scores, turns, and player rating
*  - Restarts the game
*/

class Game {
    constructor() {
        this.counter = 0;
        this.moves = document.querySelector(".moves");

    }

    start() {
        const deck = new Deck();
        deck.shuffle();
        deck.create();
    }
    restart() {
        console.log("Restarting the game");
        this.counter = 0;
        //game.start();
    }

    updateMoves() {
        this.counter += 1;
        this.moves.textContent = String(this.counter);
        console.log(this.moves);
    }
}




