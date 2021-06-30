import Card, { CardProps } from "../Card/Card";
import "./Hand.scss";

interface HandProps {
  player: number;
  turn: number;
  name: string;
  cards: CardProps[];
  handleClick: (player: number, card: CardProps) => void;
}

const Hand = ({ player, turn, name, cards, handleClick }: HandProps) => {
  const handleClickHandler = (card: CardProps) => {
    return (event: React.MouseEvent) => {
      handleClick(player, card);
      event.preventDefault();
    };
  };

  const getDirection = (player: number) => {
    let direction;
    switch (player) {
      case 1:
        direction = "south";
        break;
      case 2:
        direction = "west";
        break;
      case 3:
        direction = "north";
        break;
      case 4:
        direction = "east";
        break;
    }
    return direction;
  };

  const isActive = (player: number, turn: number): boolean => {
    if (player === turn) return true;
    return false;
  };

  const direction = getDirection(player);
  const handClass = `hand hand--${direction} ${
    isActive(player, turn) ? "hand--active" : ""
  }`;

  return (
    <div className={handClass}>
      <h1 className="hand__name">{name}</h1>
      <div className="hand__cards">
        {cards?.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            suit={card.suit}
            rank={card.rank}
            side={card.side}
            handleClick={handleClickHandler(card)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Hand;
