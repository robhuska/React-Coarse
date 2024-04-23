import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    FETCH_CART(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    ADD_ITEM_TO_CART(state, action) {
      state.changed = true;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.totalQuantity++;
      if (state.items[existingItemIndex]) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    REMOVE_ITEM_FROM_CART(state, action) {
      state.changed = true;
      state.totalQuantity--;
      const itemIndexToRemove = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndexToRemove].quantity <= 1) {
        // state.items.splice(itemIndexToRemove, 1);
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items[itemIndexToRemove].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
