class Card {
    constructor(cardFragment, symbol, cards){
        this.isFlipped = false;
        this.symbol = symbol;
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
        this.isFlipped = true;
        console.log(evt);
        console.log(item.className);
    }
}
