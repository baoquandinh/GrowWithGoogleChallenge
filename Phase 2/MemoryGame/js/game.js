/*
* Game class keeps track of the game state.\
*  - Creates the deck
*  - Monitor scores, flips, turns, and player rating
*  - Restarts the game
*/

let matchingCardArray = [];

class Game {
    constructor() {
        this.counter = 0;
        this.moveCounter = 0;
        this.wrongCounter = 0;
        this.moves = document.querySelector(".moves");
        this.stars = document.querySelector(".stars");
    }
    // Creates a new deck and randomizes the card position
    start() {
        let deck = new Deck();
        deck.shuffle();
        deck.create();
    }

    // Restart the game with the same deck, just randomizes the position and resets move count
    restart() {
        game.counter = 0;
        game.moveCounter = 0;
        game.wrongCounter = 0;
        game.moves.textContent = String(game.moveCounter);
        for (let card in cards) {
            cards[card].remove();
        }
        cards = [];
        matchingCardArray = [];
        game.start();
    }

    // Update the move counter per flip
    updateMoves() {
        this.counter += 1;
        if (this.counter % 2 === 0) {
            this.moveCounter += 1;
            this.moves.textContent = String(this.moveCounter);
        }
    }

    updateStars() {
        this.stars.removeChild(this.stars.lastElementChild);
    }

    // Show that cards are matching
    match() {
        for (let card in matchingCardArray) {
            matchingCardArray[card].isMatched = true;
            matchingCardArray[card].listItem.className = 'card match';
        }
        matchingCardArray.length = 0;
    }

    // Cards that don't match are flipped back over
    noMatch() {
        for (let card in matchingCardArray) {
            matchingCardArray[card].listItem.className = 'card';
            matchingCardArray[card].isFlipped = false;
        }
        game.wrongCounter += 1;
        matchingCardArray.length = 0;
    }

    // Checks the two selected cards to see if they are a match
    checkForMatch() {
        if (this.wrongCounter === 2) {
            game.updateStars();

        }
        if (this.wrongCounter === 4) {
            game.updateStars();
        }
        // if the cards are matching, leave flipped otherwise, flipped them back
        if (matchingCardArray[0].symbol === matchingCardArray[1].symbol) {
            game.match();

        } else {
            setTimeout('game.noMatch()', 1000);
        }
    }
}




