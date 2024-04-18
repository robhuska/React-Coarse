import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
  cartTotal: 0.0,
});

function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedCartItems = [...state.items];
    const existingCartItemIndex = updatedCartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = updatedCartItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    }

    const total = updatedCartItems.reduce(
      (prevTotal, item) => prevTotal + item.price * item.quantity,
      0
    );

    return {
      ...state,
      items: updatedCartItems,
      total,
    };
  }

  if (action.type === 'UPDATE_QUANTITY') {
    const updatedCartItems = [...state.items];
    const itemIndex = updatedCartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    const updatedCartItem = {
      ...updatedCartItems[itemIndex],
    };

    updatedCartItem.quantity += action.payload.amount;

    if (updatedCartItem.quantity == 0) {
      updatedCartItems.splice(itemIndex, 1);
    } else {
      updatedCartItems[itemIndex] = updatedCartItem;
    }

    const total = updatedCartItems.reduce(
      (prevTotal, item) => prevTotal + item.price * item.quantity,
      0
    );

    return {
      ...state,
      items: updatedCartItems,
      total,
    };
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      items: [],
      total: 0,
    };
  }

  return {
    ...state,
  };
}

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
    total: 0,
  });

  function handleAddItemToCart(meal) {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: meal,
    });
  }

  function handleUpdateCartItemQuantity(id, amount) {
    cartDispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id,
        amount,
      },
    });
  }

  function handleClearCart() {
    cartDispatch({
      type: 'CLEAR_CART',
    });
  }

  const ctxValue = {
    items: cartState.items,
    total: cartState.total,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    clearCart: handleClearCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
