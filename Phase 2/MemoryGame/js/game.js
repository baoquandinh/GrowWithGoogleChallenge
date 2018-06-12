/*
* Game class keeps track of the game state.\
*  - Creates the deck
*  - Monitor scores, flips, turns, and player rating
*  - Restarts the game
*/

let matchingCardArray = [];
let starList = document.querySelector('.stars');
const starFragment = document.createDocumentFragment();



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

    // Restart the game with the same deck, just randomizes the position and resets move count along with star counter
    restart() {
        game.counter = 0;
        game.moveCounter = 0;
        game.wrongCounter = 0;
        game.moves.textContent = String(game.moveCounter);
        game.resetStars();
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

    removeStars() {
        this.stars.removeChild(this.stars.lastElementChild);
    }

    resetStars() {
        this.starListItem =  document.createElement('li');
        this.starItem = document.createElement('i');
        this.starItem.className = 'fa fa-star';
        this.starCounter = starList.childElementCount;
        while (this.starCounter < 3) {
            this.starListItem.appendChild(this.starItem);
            this.starCounter++;
            starList.appendChild(this.starListItem);
        }
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
        if (game.wrongCounter === 1) {
            game.removeStars();

        }
        if (this.wrongCounter === 16) {
            game.removeStars();
        }
        // if the cards are matching, leave flipped otherwise, flipped them back
        if (matchingCardArray[0].symbol === matchingCardArray[1].symbol) {
            game.match();
        } else {
            for (let card in matchingCardArray) {
                matchingCardArray[card].listItem.classList.add('no-match');
            }
            setTimeout('game.noMatch()', 1000);
        }
    }
}




