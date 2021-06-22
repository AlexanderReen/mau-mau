import React from 'react';
import './Card.scss'

interface CardProps {
    className: string;
    onClick(event: React.MouseEvent<HTMLElement>): void;
    suit: 'diamonds' | 'clubs' | 'hearts' | 'spades';
    rank: string;
}

const Card = ({className, onClick, suit, rank}: CardProps) => {

    const cardClass = `card card-${className}`
    const suitClass = `card-suit card-suit--${suit}`;

  return (
    <div className={cardClass} onClick= {onClick}>
        <div className={suitClass}>
            <span className='card-rank'>{rank}</span>
        </div>
    </div>
  );
}

export default Card;
