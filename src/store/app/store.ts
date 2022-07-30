import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/authSlice';
import challengePayloadReducer from '../slices/challengePayloadSlice';
import walkingMoneyRoadsReducer from '../slices/walkingMoneyRoadsSlice';
import pendingMoneyRoadsReducer from '../slices/pendingMoneyRoadsSlice';
import weeklyProgressReducer from '../slices/weeklyProgressSlice';
import kidsReducer from '../slices/kidsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    challengePayload: challengePayloadReducer,
    walkingMoneyRoads: walkingMoneyRoadsReducer,
    pendingMoneyRoads: pendingMoneyRoadsReducer,
    weeklyProgress: weeklyProgressReducer,
    kids: kidsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
