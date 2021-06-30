import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects'
import { playCard, playerHand, playerWins, selectPlayerHands } from '../reducers/game-reducer';


function* didPlayerWin(action: PayloadAction<playerHand>): any {

  let hands = yield select(selectPlayerHands)
  if (hands[action.payload.player].length === 0) {
    yield put({type: playerWins, action})
  }
}

function* gameSaga(): any {
  yield takeEvery(playCard.type, didPlayerWin);
}

export default gameSaga;