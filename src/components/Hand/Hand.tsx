import Card, { CardProps } from '../Card/Card';
import './Hand.scss'


interface HandProps {
    index: number;
    name: string;
    cards: CardProps[];
    cardClick: (card: CardProps) => void;
}

const Hand = ({index, name, cards, cardClick}: HandProps) => {

  const cardClickHandler = (card: CardProps) => {
    return (event: React.MouseEvent) => {
      cardClick(card);
      event.preventDefault();
    }
  }

  const getDirection = (index: number) => {
    let direction;
    switch (index) {
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

  const direction = getDirection(index);
  const handClass = `hand hand--${direction}`

  return (
    <div className={handClass}>
      <h1 className='hand__name'>{name}</h1>
      {cards.map((card) => (
        <Card suit={card.suit} 
        rank={card.rank} 
        side={card.side} 
        click={cardClickHandler(card)}>
        </Card>
      ))}
    </div>
  );
}

export default Hand;
