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
        this.moves = document.querySelector(".moves");

    }
    // Creates a new deck and randomizes the card position
    start() {
        const deck = new Deck();
        deck.shuffle();
        deck.create();
    }

    // Restart the game with the same deck, just randomizes the position and resets move count
    restart() {
        console.log("Restarting the game");
        game.counter = 0;
        game.moveCounter = 0;
        game.moves.textContent = String(game.moveCounter);
        console.log(cards);
    }

    // Update the move counter per flip
    updateMoves() {
        this.counter += 1;
        if (this.counter % 2 == 0) {
            this.moveCounter += 1;
            this.moves.textContent = String(this.moveCounter);
        }
    }

    // Checks the two selected cards to see if they are a match
    checkForMatch() {
        console.log("Cards are being checked");
        console.log(matchingCardArray);
        console.log(matchingCardArray[0].symbol);
        console.log(matchingCardArray[1].symbol);
        // if the cards are matching, leave flipped otherwise, flipped them back
        if (matchingCardArray[0].symbol === matchingCardArray[1].symbol) {
            console.log("Nice they match!");
            matchingCardArray.length = 0;
        } else {
            console.log("Sorry they do not match!");
            matchingCardArray.length = 0;
        }
        console.log(matchingCardArray);


    }
}




