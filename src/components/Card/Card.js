import React from 'react';
import './Card.css';

const Card = props => {
	let suit;

	switch (props.suit) {
		case "H":
			suit = "♥";
			break;
		case "D":
			suit = "♦";
			break;
		case "C":
			suit = "♣";
			break;
		case "S":
			suit = "♠";
			break;
		default:
			suit = null;
	}

	let suitClass;

	switch (props.suit) {
		case "H":
			suitClass = "hearts";
			break;
		case "D":
			suitClass = "diams";
			break;
		case "C":
			suitClass = "clubs";
			break;
		case "S":
			suitClass = "spades";
			break;
	}

	const rankToLowerCase = props.rank.toLowerCase();

	const cardClasses = [
		"Card",
		`Card-rank-${rankToLowerCase}`,
		`Card-${suitClass}`
	]

	const classes = cardClasses.join(' ');

	return (
			<div className={classes}>
				<span className="Card-rank">{props.rank}</span>
				<span className="Card-suit">{suit}</span>
			</div>
	);
};

export default Card;