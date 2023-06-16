import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

export const bagSlice = createSlice({
  name: 'bag',
  initialState: INITIAL_STATE.bag,
  reducers: {
    setBag(state, action) {
      return [...state, action.payload];
    },
    removeBag(state, action) {
      return [...action.payload];
    },
    clearBag(state, action) {
      return INITIAL_STATE.bag;
    },
  },
});

export const { setBag, removeBag, clearBag } = bagSlice.actions;

export const bagReducer = bagSlice.reducer;
