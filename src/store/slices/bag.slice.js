import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

export const bagSlice = createSlice({
  name: 'bag',
  initialState: INITIAL_STATE.bag,
  reducers: {
    setBag(state, action) {
      return [...state, action.payload];
      // const newState = [...state].map((item) => {
      //   return { ...item, quant: 1 };
      // });
      // const duplicate = newState.find((item) => item.id === action.payload.id);
      // debugger;
      // return [
      //   ...newState,
      //   duplicate
      //     ? { ...action.payload, quant: duplicate.quant + 1 }
      //     : { ...action.payload, quant: 1 },
      // ];
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
