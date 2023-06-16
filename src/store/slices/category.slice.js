import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE.category,
  reducers: {
    setCategory(state, action) {
      return [...action.payload];
    },
    clearCategory(state, action) {
      return INITIAL_STATE.category;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
