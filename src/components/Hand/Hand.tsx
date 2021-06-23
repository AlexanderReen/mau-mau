import Card, { CardProps } from '../Card/Card';
import './Hand.scss'


interface HandProps {
    cards: CardProps[];
    cardClick: (card: CardProps) => void;
}

const Hand = ({cards, cardClick}: HandProps) => {

  const cardClickHandler = (card: CardProps) => {
    return (event: React.MouseEvent) => {
      cardClick(card);
      event.preventDefault();
    }
  }
  
  return (
    <div className='hand'>
      {cards.map((card) => (
      <Card suit={card.suit} rank={card.rank} side={card.side} click={cardClickHandler(card)}></Card>
      ))}
    </div>
  );
}

export default Hand;
