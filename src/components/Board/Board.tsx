import React from 'react';
import { CardProps } from '../Card/Card';
import Hand from '../Hand/Hand';
import './Board.scss'

interface BoardProps {
}


const Board = ({}: BoardProps) => {

  
  const mockCards = [{
    'suit': 'spades',
    'rank': '5',
    'side': 'front',
  },
  {
    'suit': 'spades',
    'rank': '6',
    'side': 'front',
  }] as CardProps[];

  const handleCards = (card: CardProps) =>{
    alert(card);
  }

  return (
    <div className="board">
      <Hand direction='north' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='west' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='south' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='east' cards={mockCards} cardClick={handleCards}></Hand>
    </div>
  );
}

export default Board;
