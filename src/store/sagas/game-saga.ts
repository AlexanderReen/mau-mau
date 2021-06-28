import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects'
import { CardProps } from '../../components/Card/Card';
import { playCard, playerWins, selectPlayer1Hand, selectPlayer2Hand, selectPlayer3Hand, selectPlayer4Hand } from '../reducers/game-reducer';

function* didPlayerWin(action: PayloadAction<any>): any {

  let hand: CardProps[];
  switch (action.payload.player) {
    case 1:
      hand = yield select(selectPlayer1Hand)
      break;
    case 2:
      hand = yield select(selectPlayer2Hand)
      break;
    case 3:
      hand = yield select(selectPlayer3Hand)
      break;
    case 4:
      hand = yield select(selectPlayer4Hand)
      break;
    default:
      hand = [] as CardProps[];
      break;
  }
  if (hand.length === 0) {
    yield put({type: playerWins, action})
  }
}

function* gameSaga(): any {
  yield takeEvery(playCard.type, didPlayerWin);
}

export default gameSaga;