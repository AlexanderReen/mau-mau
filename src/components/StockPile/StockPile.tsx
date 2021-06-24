import Card from '../Card/Card';
import './StockPile.scss'

export interface StockPileProps {

}

const StockPile = ({}: StockPileProps) => {

  return (
    <div className='stock-pile'>
     <Card side='back'></Card>  
    </div>
  );
}

export default StockPile;
