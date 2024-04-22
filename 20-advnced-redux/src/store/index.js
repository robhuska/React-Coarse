import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui';
import cartReducer from './cart';
import shopReducer from './shop';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    shop: shopReducer,
  },
});

export default store;
