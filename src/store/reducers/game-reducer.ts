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

export interface playerCard {
  player: number;
  card: CardProps;
}

export interface playerHand {
  player: number;
  cards: CardProps[];
}

export interface GameState {
  inProgress: boolean;
  showModal: boolean;
  message: string;
  winner: number;
  stockPile: CardProps[];
  discardPile: CardProps[];
  playerHands: CardProps[][];
  playerTurn: number;
}

const initialState: GameState = {
  inProgress: false,
  showModal: false,
  message: '',
  winner: NaN,
  stockPile: [],
  discardPile: [],
  playerHands: [],
  playerTurn: NaN,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Starting the Mau-Mau game
    startGame(state) {
      state.inProgress = true;
      state.message = 'A player almost won, watch out!';
      const cards = shuffleCards(initCards());
      const dealedCards = dealCards(cards);
      state.playerHands[1] = dealedCards.pile1;
      state.playerHands[2] = dealedCards.pile2;
      state.playerHands[3] = dealedCards.pile3;
      state.playerHands[4] = dealedCards.pile4;
      state.discardPile = state.discardPile.concat(dealedCards.stockPile[0]);
      state.stockPile = removeCard(
        dealedCards.stockPile[0],
        dealedCards.stockPile
      );
      state.playerTurn = 1;
    },
    // Ending the Mau-Mau game
    endGame(state) {
      Object.assign(state, initialState);
    },
    // Playing a card on the discardPile
    playCard(state, action: PayloadAction<playerCard>) {
      if (state.playerTurn === action.payload.player) {
        const discardPileCard = state.discardPile[state.discardPile.length - 1];

        if (isPlayableCard(action.payload.card, discardPileCard)) {
          state.discardPile = state.discardPile.concat(action.payload.card);
          state.playerHands[action.payload.player] = removeCard(
            action.payload.card,
            state.playerHands[action.payload.player]
          );
          state.playerTurn = state.playerTurn < 4 ? state.playerTurn + 1 : 1;
        }
      }
    },
    // Drawing a card from the stockPile
    drawCard(state) {
      const stockPileCard = state.stockPile[state.stockPile.length - 1];
      state.playerHands[state.playerTurn] = state.playerHands[state.playerTurn].concat(stockPileCard);
      state.stockPile = removeCard(stockPileCard, state.stockPile);
      state.playerTurn = state.playerTurn < 4 ? state.playerTurn + 1 : 1;
    },
    playerWon(state, action: PayloadAction<playerHand>) {
      state.showModal = true;
      state.message = 'A player won, it is player ' + action.payload.player + '!'
      state.winner = action.payload.player;
    },
    showModal(state) {
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
    },
  },
});

export const { startGame, endGame, showModal, hideModal, playCard, drawCard, playerWon } =
  gameSlice.actions;

export const selectInProgress = (state: RootState) => state.game.inProgress;
export const selectShowModal = (state: RootState) => state.game.showModal;
export const selectPlayerHands = (state: RootState) => state.game.playerHands;
export const selectDiscardPile = (state: RootState) => state.game.discardPile;
export const selectStockPile = (state: RootState) => state.game.stockPile;
export const selectPlayerTurn = (state: RootState) => state.game.playerTurn;
export const selectMessage = (state: RootState) => state.game.message;
export const selectWinner = (state: RootState) => state.game.winner;

export default gameSlice.reducer;
