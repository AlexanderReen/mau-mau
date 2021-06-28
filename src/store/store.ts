import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers/game-reducer";
import saga from './sagas/game-saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({  serializableCheck: false }), sagaMiddleware];

export const store = configureStore({
    reducer: {
      game: gameReducer,
    },
    middleware,
  });

  sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;