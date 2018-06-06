class Card {
    constructor(cardFragment, symbol){
        this.isFlipped = false;
        this.symbol = symbol;
        this.index = 0;

        this.listItem = document.createElement('li');
        this.icon = document.createElement('i');
        this.listItem.className = `card`;
        this.icon.className = `fa fa-${symbol}`;
        this.listItem.addEventListener('mousedown', this.flip);
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
        console.log(game.counter);
        // Adds 1 to the moves counter

    }
}
