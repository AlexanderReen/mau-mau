import { CardProps } from '../Card/Card';
import StockPile from '../StockPile/StockPile';
import DiscardPile from '../DiscardPile/DiscardPile';
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
    'suit': 'diamonds',
    'rank': '6',
    'side': 'front',
  },
  {
    'suit': 'clubs',
    'rank': '4',
    'side': 'front',
  },
  {
    'suit': 'clubs',
    'rank': '6',
    'side': 'front',
  },
  {
    'suit': 'clubs',
    'rank': '9',
    'side': 'front',
  },
  {
    'suit': 'spades',
    'rank': '1',
    'side': 'front',
  },
  {
    'suit': 'diamonds',
    'rank': '2',
    'side': 'front',
  },
] as CardProps[];

  const handleCards = (card: CardProps) =>{
    alert(card);
  }

  return (
    <div className="board">
      <div className="board__center">
        <StockPile></StockPile>
        <DiscardPile></DiscardPile>
      </div>
      <Hand direction='north' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='west' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='south' cards={mockCards} cardClick={handleCards}></Hand>
      <Hand direction='east' cards={mockCards} cardClick={handleCards}></Hand>
    </div>
  );
}

export default Board;
