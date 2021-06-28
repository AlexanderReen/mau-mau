import Card, { CardProps } from '../Card/Card';
import './DiscardPile.scss'

export interface DiscardPileProps {
  cards: CardProps[];
}

const DiscardPile = ({ cards }: DiscardPileProps) => {

  return (
    <div className='discard-pile'>
      {cards.map((card) => (
        <Card key={card.id}
          id={card.id}
          suit={card.suit}
          rank={card.rank}
          side={card.side}>
        </Card>
      ))}
    </div>
  );
}

export default DiscardPile;
