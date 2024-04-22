import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    TOGGLE_CART(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
