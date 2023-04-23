/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IOrderSlice from '@/interfaces/IOrderSlice';

import { RootState } from '../store';

const initialState: IOrderSlice = {
  order: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<any>) => {
      state.order = action.payload;
    },
  },
});

export const selectOrder = (state: RootState) => state.order;

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
