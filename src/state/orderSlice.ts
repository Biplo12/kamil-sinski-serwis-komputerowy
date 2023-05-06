/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IOrderSlice from '@/interfaces/IOrderSlice';

import { RootState } from '../store';

const initialState: IOrderSlice = {
  orderDetails: null,
  orders: [],
  ordersStatistics: {
    orders: {
      total: null,
      active: null,
      percentage: {
        total: {
          lastWeek: null,
          lastMonth: null,
        },
        active: {
          lastWeek: null,
          lastMonth: null,
        },
      },
    },
    users: {
      total: null,
      percentage: {
        lastWeek: null,
        lastMonth: null,
      },
    },
    charts: [],
  },
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
    setStats: (state, action: PayloadAction<any>) => {
      state.ordersStatistics = action.payload;
    },
  },
});

export const selectOrder = (state: RootState) => state.order;

export const { setOrder, setOrders, setStats } = orderSlice.actions;

export default orderSlice.reducer;
