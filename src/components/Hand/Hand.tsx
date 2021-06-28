import Card, { CardProps } from '../Card/Card';
import './Hand.scss'


interface HandProps {
  player: number;
  name: string;
  cards: CardProps[];
  cardClick: (player: number, card: CardProps) => void;
}

const Hand = ({ player, name, cards, cardClick }: HandProps) => {

  const cardClickHandler = (card: CardProps) => {
    return (event: React.MouseEvent) => {
      cardClick(player, card);
      event.preventDefault();
    }
  }

  const getDirection = (player: number) => {
    let direction;
    switch (player) {
      case 1:
        direction = 'south';
        break;
      case 2:
        direction = 'north';
        break;
      case 3:
        direction = 'west';
        break;
      case 4:
        direction = 'east'
        break;
    }
    return direction;
  }

  const direction = getDirection(player);
  const handClass = `hand hand--${direction}`

  return (
    <div className={handClass}>
      <h1 className='hand__name'>{name}</h1>
      {cards.map((card, index) => (
        <Card key={card.id}
          id={card.id}
          suit={card.suit}
          rank={card.rank}
          side={card.side}
          click={cardClickHandler(card)}>
        </Card>
      ))}
    </div>
  );
}

export default Hand;
