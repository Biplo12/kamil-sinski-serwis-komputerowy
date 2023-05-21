/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IStatsSlice from '@/interfaces/IStatsSlice';

import { RootState } from '../store';

const initialState: IStatsSlice = {
  statistics: {
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
    pageViews: null,
  },
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<any>) => {
      state.statistics = action.payload;
    },
  },
});

export const selectStats = (state: RootState) => state.stats;

export const { setStats } = statsSlice.actions;

export default statsSlice.reducer;
