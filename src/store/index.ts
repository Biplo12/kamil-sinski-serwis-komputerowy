import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import orderReducer from '../state/orderSlice';
import userReducer from '../state/userSlice';
export const store = configureStore({
  reducer: {
    order: orderReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
