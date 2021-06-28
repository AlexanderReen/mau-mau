import { CardProps } from '../Card/Card';
import StockPile from '../StockPile/StockPile';
import DiscardPile from '../DiscardPile/DiscardPile';
import Hand from '../Hand/Hand';
import './Board.scss'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { playCard, selectDiscardPile, selectPlayer1Hand, selectPlayer2Hand, selectPlayer3Hand, selectPlayer4Hand, startGame } from '../../store/reducers/game-reducer';

interface BoardProps {
}


const Board = ({}: BoardProps) => {

  const hand1Cards = useAppSelector(selectPlayer1Hand);
  const hand2Cards = useAppSelector(selectPlayer2Hand);
  const hand3Cards = useAppSelector(selectPlayer3Hand);
  const hand4Cards = useAppSelector(selectPlayer4Hand);
  const discardCards = useAppSelector(selectDiscardPile);
  const dispatch = useAppDispatch();

  const handleCards = (card: CardProps) =>{
    dispatch(playCard(card))
  }

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch])
  

  return (
    <div className="board">
      <div className="board__center">
        <StockPile></StockPile>
        <DiscardPile cards={discardCards}></DiscardPile>
      </div>
      <Hand index={1} name='Max' cards={hand1Cards} cardClick={handleCards}></Hand>
      <Hand index={2} name='Lando' cards={hand2Cards} cardClick={handleCards}></Hand>
      <Hand index={3} name ='Kimi' cards={hand3Cards} cardClick={handleCards}></Hand>
      <Hand index={4} name ='Lewis' cards={hand4Cards} cardClick={handleCards}></Hand>
    </div>
  );
}

export default Board;
