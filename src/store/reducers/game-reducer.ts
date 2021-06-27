import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CardProps } from "../../components/Card/Card";
import { dealCards, initCards, shuffleCards } from "../../modules/cards";
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
      playerHand(state, action: PayloadAction<number>) {

      },
      playerPlays(state, action: PayloadAction<number>) {

      },
      playerPlayed(state, action: PayloadAction<number>) {

      },
      playerDraws(state, action: PayloadAction<number>) {

      },
      playerWins(state, action: PayloadAction<number>) {

      },
    },
  })

  export const { startGame, endGame, playerHand, playerPlays, playerPlayed, playerDraws, playerWins } = gameSlice.actions;

  export const selectPlayer1Hand = (state: RootState) => state.game.player1Hand;
  export const selectPlayer2Hand = (state: RootState) => state.game.player2Hand;
  export const selectPlayer3Hand = (state: RootState) => state.game.player3Hand;
  export const selectPlayer4Hand = (state: RootState) => state.game.player4Hand;

  export default gameSlice.reducer;