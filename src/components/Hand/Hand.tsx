import Card, { CardProps } from '../Card/Card';
import './Hand.scss'


interface HandProps {
    direction: string;
    cards: CardProps[];
    cardClick: (card: CardProps) => void;
}

const Hand = ({direction, cards, cardClick}: HandProps) => {

  const handClass = `hand hand--${direction}`

  const cardClickHandler = (card: CardProps) => {
    return (event: React.MouseEvent) => {
      cardClick(card);
      event.preventDefault();
    }
  }
  
  return (
    <div className={handClass}>
      {cards.map((card) => (
      <Card suit={card.suit} rank={card.rank} side={card.side} click={cardClickHandler(card)}></Card>
      ))}
    </div>
  );
}

export default Hand;
