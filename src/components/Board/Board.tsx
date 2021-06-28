import { CardProps } from '../Card/Card';
import StockPile from '../StockPile/StockPile';
import DiscardPile from '../DiscardPile/DiscardPile';
import Hand from '../Hand/Hand';
import './Board.scss'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { playCard, selectDiscardPile, selectPlayer1Hand, selectPlayer2Hand, selectPlayer3Hand, selectPlayer4Hand, selectPlayerTurn, startGame } from '../../store/reducers/game-reducer';

interface BoardProps {
}


const Board = ({}: BoardProps) => {

  const dispatch = useAppDispatch();
  const hand1Cards = useAppSelector(selectPlayer1Hand);
  const hand2Cards = useAppSelector(selectPlayer2Hand);
  const hand3Cards = useAppSelector(selectPlayer3Hand);
  const hand4Cards = useAppSelector(selectPlayer4Hand);
  const discardCards = useAppSelector(selectDiscardPile);
  const playerTurn = useAppSelector(selectPlayerTurn);

  const handleCards = (player: number, card: CardProps) =>{
    dispatch(playCard({player, card}))
  }

  const handleStockCards = () => {
    dispatch(drawCard())
  }

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch])
  

  return (
    <div className="board">
      <div className="board__center">
        <StockPile cardClick={handleStockCards}></StockPile>
        <DiscardPile cards={discardCards}></DiscardPile>
      </div>
      <Hand player={1} turn={playerTurn} name='Max' cards={hand1Cards} cardClick={handleCards}></Hand>
      <Hand player={2} turn={playerTurn} name='Lando' cards={hand2Cards} cardClick={handleCards}></Hand>
      <Hand player={3} turn={playerTurn} name ='Kimi' cards={hand3Cards} cardClick={handleCards}></Hand>
      <Hand player={4} turn={playerTurn} name ='Lewis' cards={hand4Cards} cardClick={handleCards}></Hand>
    </div>
  );
}

export default Board;
function drawCard(): any {
  throw new Error('Function not implemented.');
}

