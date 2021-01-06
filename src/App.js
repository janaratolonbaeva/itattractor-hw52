import './App.css';
import Card from "./components/Card/Card";
import React, {Component} from 'react';
import './CardDeck';
import CardDeck from "./CardDeck";

class App extends Component {
  state = {
    cards: [],
    counter: 123,
  }

  dealCards = () => {
    const cardDeck = new CardDeck();
    const newCards = cardDeck.getCards(5);

    const stateCopy = {...this.state};
    stateCopy.cards = newCards;

    this.setState(stateCopy);
  }

  render() {

    const elems = this.state.cards.map((card, index) => {
        return <Card key={index} rank={card.ranks} suit={card.suits}/>
      });

    return (
      <div className="App">
        <div className="Cards-block">
          {elems}
        </div>
        <button onClick={this.dealCards}>Deal cards</button>
      </div>
    );
  }
}

export default App;
