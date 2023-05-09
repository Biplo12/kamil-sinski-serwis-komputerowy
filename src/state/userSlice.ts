/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IUserSlice from '@/interfaces/IUserSlice';

import { RootState } from '../store';

const initialState: IUserSlice = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
