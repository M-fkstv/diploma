import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE.favorites,
  reducers: {
    setFavorites(state, action) {
      return [...state, action.payload];
    },
    removeFavorites(state, action) {
      return [...action.payload];
    },
    clearFavorites(state, action) {
      return INITIAL_STATE.favorites;
    },
  },
});

export const { setFavorites, removeFavorites, clearFavorites } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
