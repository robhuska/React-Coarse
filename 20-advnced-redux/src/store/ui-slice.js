import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    TOGGLE_CART(state) {
      state.showCart = !state.showCart;
    },
    SHOW_NOTIFICATION(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
