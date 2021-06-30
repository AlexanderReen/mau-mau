import Card from '../Card/Card';
import './StockPile.scss'

export interface StockPileProps {
  handleClick: () => void;
}

const StockPile = ({handleClick}: StockPileProps) => {

  const handleClickHandler = () => {
    return (event: React.MouseEvent) => {
      handleClick();
      event.preventDefault();
    }
  }

  return (
    <div className='stock-pile'>
     <Card side='back' handleClick={handleClickHandler()}></Card>  
    </div>
  );
}

export default StockPile;
