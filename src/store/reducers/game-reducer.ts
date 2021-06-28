import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../components/Card/Card";
import {
  dealCards,
  initCards,
  isPlayableCard,
  removeCard,
  shuffleCards,
} from "../../modules/cards";
import { RootState } from "../store";
export interface GameState {
  inProgress: boolean;
  winner: string;
  stockPile: CardProps[];
  discardPile: CardProps[];
  player1Hand: CardProps[];
  player2Hand: CardProps[];
  player3Hand: CardProps[];
  player4Hand: CardProps[];
  playerTurn: number;
}

const initialState: GameState = {
  inProgress: false,
  winner: "",
  stockPile: [],
  discardPile: [],
  player1Hand: [],
  player2Hand: [],
  player3Hand: [],
  player4Hand: [],
  playerTurn: NaN,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.inProgress = true;
      const cards = shuffleCards(initCards());
      const dealedCards = dealCards(cards);
      state.player1Hand = dealedCards.pile1;
      state.player2Hand = dealedCards.pile2;
      state.player3Hand = dealedCards.pile3;
      state.player4Hand = dealedCards.pile4;
      state.discardPile = state.discardPile.concat(dealedCards.stockPile[0]);
      state.stockPile = removeCard(
        dealedCards.stockPile[0],
        dealedCards.stockPile
      );
      state.playerTurn = 1;
    },
    endGame(state) {
      Object.assign(state, initialState);
    },
    playCard(state, action: PayloadAction<any>) {
      if (state.playerTurn === action.payload.player) {
        const discardPileCard = state.discardPile[state.discardPile.length - 1];

        if (isPlayableCard(action.payload.card, discardPileCard)) {
          state.discardPile = state.discardPile.concat(action.payload.card);
          switch (action.payload.player) {
            case 1:
              state.player1Hand = removeCard(
                action.payload.card,
                state.player1Hand
              );
              break;
            case 2:
              state.player2Hand = removeCard(
                action.payload.card,
                state.player2Hand
              );
              break;
            case 3:
              state.player3Hand = removeCard(
                action.payload.card,
                state.player3Hand
              );
              break;
            case 4:
              state.player4Hand = removeCard(
                action.payload.card,
                state.player4Hand
              );
              break;
          }
          state.playerTurn = state.playerTurn < 4 ? state.playerTurn + 1 : 1;
        }
      }
    },
    drawCard(state, action: PayloadAction<number>) { },
    playerPlays(state, action: PayloadAction<number>) { },
    playerPlayed(state, action: PayloadAction<number>) { },
    playerWins(state, action: PayloadAction<number>) { },
  },
});

export const {
  startGame,
  endGame,
  playCard,
  drawCard,
  playerPlays,
  playerPlayed,
  playerWins,
} = gameSlice.actions;

export const selectPlayer1Hand = (state: RootState) => state.game.player1Hand;
export const selectPlayer2Hand = (state: RootState) => state.game.player2Hand;
export const selectPlayer3Hand = (state: RootState) => state.game.player3Hand;
export const selectPlayer4Hand = (state: RootState) => state.game.player4Hand;
export const selectDiscardPile = (state: RootState) => state.game.discardPile;
export const selectPlayerTurn = (state: RootState) => state.game.playerTurn;

export default gameSlice.reducer;
