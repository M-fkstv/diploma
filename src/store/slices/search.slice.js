import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

const searchResultSlice = createSlice({
  name: 'search-result',
  initialState: INITIAL_STATE.searchResult,
  reducers: {
    setSearchResult(state, action) {
      return [...action.payload];
    },
    clearSearchResult(state, action) {
      return INITIAL_STATE.searchResult;
    },
  },
});

export const { setSearchResult, clearSearchResult } = searchResultSlice.actions;

export const searchResultReducer = searchResultSlice.reducer;
