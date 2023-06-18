/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IUserSlice from '@/interfaces/IUserSlice';

import { RootState } from '../store';

const initialState: IUserSlice = {
  users: [],
  userDetails: null,
  isUserAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.userDetails = action.payload;
    },
    setIsUserAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthenticated = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setUsers, setUser, setIsUserAuthenticated } = userSlice.actions;

export default userSlice.reducer;
