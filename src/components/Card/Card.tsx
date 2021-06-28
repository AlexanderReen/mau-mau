import React from "react";
import "./Card.scss";

export interface CardProps {
  id?: string;
  side?: "front" | "back";
  suit?: "diamonds" | "clubs" | "hearts" | "spades";
  rank?: string;
  click?: (event: React.MouseEvent<HTMLElement>) => void;
}

//TODO: Rewrite to functional component to turn off serialize?
class Card extends React.Component<CardProps> {
  id;
  side;
  suit;
  rank;
  click;
  cardClass: string;
  suitClass: string;

  constructor(props: CardProps) {
    super(props);
    this.id = props.id;
    this.side = props.side;
    this.suit = props.suit;
    this.rank = props.rank;
    this.click = props.click;
    this.cardClass = `card card--${this.side ? this.side : "front"}`;
    this.suitClass = `card__suit card__suit--${this.suit}`;
  }

  render() {
    return (
      <div className={this.cardClass} onClick={this.click}>
        <div className={this.suitClass}>
          <span className="card__rank">{this.rank}</span>
        </div>
      </div>
    );
  }
}

export default Card;
