import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";
import { CardProps } from "../../components/Card/Card";
import { dealCards, initCards, removeCard, shuffleCards } from "../../modules/cards";
import { RootState } from "../store";
export interface GameState {
    inProgress: boolean;
    winner: string;
    stockPile: CardProps[];
    discardPile: CardProps[]
    player1Hand: CardProps[];
    player2Hand: CardProps[];
    player3Hand: CardProps[];
    player4Hand: CardProps[];
}

const initialState: GameState = {
    inProgress: false,
    winner: '',
    stockPile: [],
    discardPile: [],
    player1Hand: [],
    player2Hand: [],
    player3Hand: [],
    player4Hand: [],
}

const gameSlice = createSlice({
    name: 'game',
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
        state.stockPile = dealedCards.stockPile;
      },
      endGame(state) {
        Object.assign(state, initialState)
      },
      playerPlays(state, action: PayloadAction<number>) {

      },
      playCard(state, action: PayloadAction<any>) {
        state.discardPile = state.discardPile.concat(action.payload.card)
        switch (action.payload.player) {
          case 1:
            state.player1Hand = removeCard(action.payload.card, state.player1Hand)
            break;
          case 2:
            state.player2Hand = removeCard(action.payload.card, state.player2Hand)
            break;
          case 3:
            state.player3Hand = removeCard(action.payload.card, state.player3Hand)
            break;
          case 4:
            state.player4Hand = removeCard(action.payload.card, state.player4Hand)
            break;
        }

      },
      playerPlayed(state, action: PayloadAction<number>) {

      },
      playerDraws(state, action: PayloadAction<number>) {

      },
      playerWins(state, action: PayloadAction<number>) {

      },
    },
  })

  export const { startGame, endGame, playerPlays, playCard, playerPlayed, playerDraws, playerWins } = gameSlice.actions;

  export const selectPlayer1Hand = (state: RootState) => state.game.player1Hand;
  export const selectPlayer2Hand = (state: RootState) => state.game.player2Hand;
  export const selectPlayer3Hand = (state: RootState) => state.game.player3Hand;
  export const selectPlayer4Hand = (state: RootState) => state.game.player4Hand;
  export const selectDiscardPile = (state: RootState) => state.game.discardPile;

  export default gameSlice.reducer;