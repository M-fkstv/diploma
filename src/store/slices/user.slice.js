import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
