import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import shopReducer from './shop';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});

export default store;
