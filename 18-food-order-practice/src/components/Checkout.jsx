import { useContext, useRef, useState } from 'react';
import CartContext from '../store/CartContextProvider';
import { placeOrder } from '../http';

export default function Cart() {
  const { items, total } = useContext(CartContext);

  async function handlePlaceOrder(e) {
    e.preventDefault();
    // console.log('Order Placed!');
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    console.log(data);

    try {
      await placeOrder({ customer: data, items });
    } catch (error) {}
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total Amount: {total}</p>
      <form onSubmit={handlePlaceOrder}>
        <p className="control">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" name="full-name" id="full-name" required />
        </p>
        <p className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p className="control">
          <label htmlFor="street">Address</label>
          <input type="text" name="street" id="street" required />
        </p>
        <div className="control-row">
          <p className="control">
            <label htmlFor="City">City</label>
            <input type="text" name="City" id="City" required />
          </p>
          <p className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" name="postal-code" id="postal-code" required />
          </p>
        </div>
        <button className="button">Place Order</button>
      </form>
    </div>
  );
}
