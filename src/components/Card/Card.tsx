import React from 'react';
import './Card.scss'

export interface CardProps {
  side: 'front' | 'back';
  suit?: 'diamonds' | 'clubs' | 'hearts' | 'spades';
  rank?: string;
  click?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Card = ({side, suit, rank, click}: CardProps) => {

    const cardClass = `card card--${side}`
    const suitClass = `card__suit card__suit--${suit}`;

  return (
    <div className={cardClass} onClick= {click}>
        <div className={suitClass}>
            <span className='card__rank'>{rank}</span>
        </div>
    </div>
  );
}

export default Card;
