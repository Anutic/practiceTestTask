import { configureStore,  } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice';
import { saveToLocalStorage } from '../utils/storage';


const localStorageMiddleware = ({ getState }: { getState: () => RootState }) => {
  return (next: (action: any) => void) => (action: any) => {
    const result = next(action);
    saveToLocalStorage('board', getState().board);
    return result;
  };
};

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;