import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import orderReducer from '../state/orderSlice';
import statsReducer from '../state/statsSlice';
import userReducer from '../state/userSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    user: userReducer,
    stats: statsReducer,
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
