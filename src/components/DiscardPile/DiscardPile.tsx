import Card, { CardProps } from '../Card/Card';
import './DiscardPile.scss'

export interface DiscardPileProps {
  cards: CardProps[];
}

const DiscardPile = ({ cards }: DiscardPileProps) => {

  let lastCard: CardProps = cards[cards.length - 1];
  console.log(lastCard);

  return (
    <div className='discard-pile'>
       {lastCard && (
          <Card suit={lastCard.suit}
          rank={lastCard.rank}
          side={lastCard.side}></Card>
       )}
    </div>
  );
}

export default DiscardPile;
