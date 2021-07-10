import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import textLoggerReducer from '../features/textLogger/textLoggerSlice';

export const store = configureStore({
  reducer: {
    textLogger: textLoggerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
