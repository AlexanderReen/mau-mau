import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game-reducer";

export const store = configureStore({
    reducer: {
      game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;