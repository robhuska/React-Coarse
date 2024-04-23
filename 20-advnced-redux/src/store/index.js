import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';
import shopReducer from './shop-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    shop: shopReducer,
  },
});

export default store;
