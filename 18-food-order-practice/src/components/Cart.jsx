import { useContext, useRef, useState } from 'react';
import CartContext from '../store/CartContextProvider';

export default function Cart() {
  const { items, total, updateItemQuantity } = useContext(CartContext);

  // console.log(total);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} - {item.quantity} x {item.price}
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <div className="control">
                    <span>{item.quantity}</span>
                  </div>
                  <button onClick={() => updateItemQuantity(item.id, +1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">{total}</div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
