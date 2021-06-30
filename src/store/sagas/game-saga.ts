import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects'
import { endGame, hideModal, playCard, playerHand, playerWon, selectPlayerHands, showModal } from '../reducers/game-reducer';


function* HandThreshholdActions(action: PayloadAction<playerHand>): any {

  let hands = yield select(selectPlayerHands)

  // Player almost won
  if (hands[action.payload.player].length === 1) {
    yield put({type: showModal, action})
  }

  // Player won
  if (hands[action.payload.player].length === 0) {
    yield put({type: playerWon, action})
  }
}

function* showModalActions(action: PayloadAction<boolean>): any {
  setTimeout(
    yield put({type: hideModal, action}),
    5000
  )
}

function* playerWonActions(action: PayloadAction<any>): any {
  yield put({type: endGame, action})
}

function* gameSaga(): any {
  yield takeEvery(playCard.type, HandThreshholdActions);
  yield takeEvery(showModal.type, showModalActions)
  yield takeEvery(playerWon.type, playerWonActions)
}

export default gameSaga;