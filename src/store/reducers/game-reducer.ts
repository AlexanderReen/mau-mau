import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CardProps } from "../../components/Card/Card";
import { initCards, shuffleCards } from "../../modules/cards";

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
        state.stockPile = cards;
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

  export default gameSlice.reducer;