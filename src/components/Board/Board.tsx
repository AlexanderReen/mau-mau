import React from 'react';
import Card from '../Card/Card';
import './Board.scss'

interface BoardProps {
}


const Board = ({}: BoardProps) => {

  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      alert('placeholder Click')
      event.preventDefault();
    }
  }

  return (
    <div className="board">
      <Card className="hello" onClick={clickHandler()} suit='spades' rank='5'></Card>
    </div>
  );
}

export default Board;
