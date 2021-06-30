import { CardProps } from "../Card/Card";
import StockPile from "../StockPile/StockPile";
import DiscardPile from "../DiscardPile/DiscardPile";
import Hand from "../Hand/Hand";
import "./Board.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  drawCard,
  playCard,
  selectDiscardPile,
  selectInProgress,
  selectMessage,
  selectPlayerHands,
  selectPlayerTurn,
  selectShowModal,
  selectStockPile,
  startGame,
} from "../../store/reducers/game-reducer";
import React from "react";
import Modal from "../Modal/Modal";

//TODO: Implement an interface?
interface BoardProps {}

const Board = ({}: BoardProps) => {
  const dispatch = useAppDispatch();
  const gameActive = useAppSelector(selectInProgress);
  const showModal = useAppSelector(selectShowModal);
  const playerCards = useAppSelector(selectPlayerHands);
  const discardCards = useAppSelector(selectDiscardPile);
  const stockCards = useAppSelector(selectStockPile);
  const playerTurn = useAppSelector(selectPlayerTurn);
  const message = useAppSelector(selectMessage);

  const handleCards = (player: number, card: CardProps) => {
    dispatch(playCard({ player, card }));
  };

  const handleStockCards = () => {
    dispatch(drawCard());
  };

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <div className="board">
      {gameActive && (
        <React.Fragment>(
          <Modal show={showModal}>
            <p>{message}</p>
          </Modal>
          <div className="board__center">
            {stockCards.length > 0 && (
              <StockPile handleClick={handleStockCards}></StockPile>
            )}
            {discardCards.length > 0 && (
              <DiscardPile cards={discardCards}></DiscardPile>
            )}
          </div>
          <Hand
            player={1}
            turn={playerTurn}
            name="Max"
            cards={playerCards[1]}
            handleClick={handleCards}
          ></Hand>
          <Hand
            player={2}
            turn={playerTurn}
            name="Lando"
            cards={playerCards[2]}
            handleClick={handleCards}
          ></Hand>
          <Hand
            player={3}
            turn={playerTurn}
            name="Kimi"
            cards={playerCards[3]}
            handleClick={handleCards}
          ></Hand>
          <Hand
            player={4}
            turn={playerTurn}
            name="Lewis"
            cards={playerCards[4]}
            handleClick={handleCards}
          ></Hand>
        </React.Fragment>
      )}
      ;
    </div>
  );
};

export default Board;
