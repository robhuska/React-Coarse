import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    TOGGLE_CART(state) {
      state.showCart = !state.showCart;
    },
    ADD_ITEM_TO_CART(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[existingItemIndex]) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    REMOVE_ITEM_FROM_CART(state, action) {
      const itemIndexToRemove = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndexToRemove].quantity <= 1) {
        state.items.splice(itemIndexToRemove, 1);
      } else {
        state.items[itemIndexToRemove].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
