import Card from '../Card/Card';
import './DiscardPile.scss'

export interface DiscardPileProps {

}

const DiscardPile = ({}: DiscardPileProps) => {

  return (
    <div className='discard-pile'>
     <Card side='front'></Card>  
    </div>
  );
}

export default DiscardPile;
