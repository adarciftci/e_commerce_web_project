// redux/visited.js

import { createSlice } from '@reduxjs/toolkit';

const visitedSlice = createSlice({
  name: 'visited',
  initialState: {
    items: [],
  },
  reducers: {
    addVisitedProduct: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    clearVisited: (state) => {
      state.items = [];
    },
  },
});

export const { addVisitedProduct, clearVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
