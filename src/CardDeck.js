
class CardDeck {
	static suits = {
		diamonds: 'D',
		hearts: 'H',
		spades: 'S',
		clubs: 'C'
	}

	static ranks = {
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9',
		ten: '10',
		jack: 'J',
		queen: 'Q',
		king: 'K',
		ace: 'A'
	}

	cards = [];

	constructor() {
		for (let suit in CardDeck.suits) {
			for (let rank in CardDeck.ranks) {
				this.cards.push({
					suits: CardDeck.suits[suit],
					ranks: CardDeck.ranks[rank]
				})
			}
		}
	}

	getCard() {
		const cardRandom = Math.floor(Math.random() * Math.floor(this.cards.length));
		return this.cards.splice(cardRandom, 1);
	}


	getCards(howMany) {
		const cardsHand = [];

		for (let i = 0; i < howMany; i++) {
			cardsHand.push(this.getCard()[0]);
		}

		return cardsHand;
	}
}

export default CardDeck;