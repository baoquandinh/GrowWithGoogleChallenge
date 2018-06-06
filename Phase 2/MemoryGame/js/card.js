class Card {
    constructor(cardFragment, symbol){
        this.isFlipped = false;
        this.symbol = symbol;
        this.index = 0;

        this.listItem = document.createElement('li');
        this.icon = document.createElement('i');
        this.listItem.className = `card`;
        this.icon.className = `fa fa-${symbol}`;
        this.listItem.addEventListener('mousedown', this.flip.bind(this));
        console.log(this.listItem);
        this.listItem.appendChild(this.icon);
        cardFragment.appendChild(this.listItem);
    }

     // Flips the card
     flip(evt) {
        let item = evt.target;
        if (item.classList.contains('card')) {
            item.classList.add('show');
        }
        game.updateMoves();
        matchingCardArray.push(this);
        console.log(this);
        if (game.counter % 2 == 0) {
            game.checkForMatch();
        }
    }
}
