import { configureStore, Tuple } from '@reduxjs/toolkit';

import type { Middleware, EnhancedStore, } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/storage';
import type { IBoardState } from '@/types/board';

export type RootState = {
  board: IBoardState;
};

const localStorageMiddleware: Middleware<{}, RootState> = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    saveToLocalStorage('board', getState().board);
    return result;
  };
};

const preloadedState: RootState = {
  board: loadFromLocalStorage('board'),
};

export const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    board: boardReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware) as Tuple<
      [typeof localStorageMiddleware, ...ReturnType<typeof getDefaultMiddleware>]
    >,
});

export type AppDispatch = typeof store.dispatch;