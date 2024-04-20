import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// OLD METHOD w/ createStore()
// import { createStore } from 'redux';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'INCREASE') {
//     return {
//       ...state,
//       counter: state.counter + action.payload.amount,
//     };
//   }

//   if (action.type === 'DECREMENT') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === 'TOGGLE_COUNTER') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
