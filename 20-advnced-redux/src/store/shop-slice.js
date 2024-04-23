import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Test',
      description: 'This is a first product - amazing!',
      price: 6.0,
    },
    {
      id: 2,
      title: 'Test 2',
      description: 'This is a second product - amazing!',
      price: 10.0,
    },
  ],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
