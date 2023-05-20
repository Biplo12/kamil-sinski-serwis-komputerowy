/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IOrderSlice from '@/interfaces/IOrderSlice';

import { RootState } from '../store';

const initialState: IOrderSlice = {
  orderDetails: null,
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<any>) => {
      state.orderDetails = action.payload;
    },
    setOrders: (state, action: PayloadAction<any>) => {
      state.orders = action.payload;
    },
  },
});

export const selectOrder = (state: RootState) => state.order;

export const { setOrder, setOrders } = orderSlice.actions;

export default orderSlice.reducer;
