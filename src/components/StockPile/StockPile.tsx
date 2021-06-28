import Card from '../Card/Card';
import './StockPile.scss'

export interface StockPileProps {
  cardClick: () => void;
}

const StockPile = ({cardClick}: StockPileProps) => {

  const cardClickHandler = () => {
    return (event: React.MouseEvent) => {
      cardClick();
      event.preventDefault();
    }
  }

  return (
    <div className='stock-pile'>
     <Card side='back' click={cardClickHandler()}></Card>  
    </div>
  );
}

export default StockPile;
