

/*
 * Create a list that holds all of your cards
 */
const startTime = performance.now();
const cards = [ 'diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'anchor', 'leaf', 'bicycle',
    'diamond', 'bomb', 'leaf', 'bomb', 'bolt', 'bicycle', 'paper-plane-o', 'cube'];
const deck = document.querySelector('.deck');
const cardFragment = document.createDocumentFragment();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
shuffle(cards);
createCards();
const endTime = performance.now();
console.log(endTime - startTime + ` milliseconds`);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function createCards() {
    for (let card in cards) {
        // console.log(cards[card]);
        create(cards[card]);
    }
    deck.appendChild(cardFragment);
}
/*
*
* Sets up each card and assign them a symbol
*
*/

function create(symbol) {
    const newList = document.createElement('li');
    const newItem = document.createElement('i');
    newList.className = `card `;
    newItem.className = `fa fa-${symbol}`;
    newList.appendChild(newItem);
    cardFragment.appendChild(newList);
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



/*
*
*  Controls the game board and manages restart and performance
*
*/
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function () {
    restartGame();
});

