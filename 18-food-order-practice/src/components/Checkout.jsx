import { useContext, useRef, useState } from 'react';
import CartContext from '../store/CartContextProvider';
import Modal from './Modal';
import Error from './Error';
import useHttp from '../hooks/useHttp';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Cart({ isOpen, onClose }) {
  const { items, total, clearCart } = useContext(CartContext);
  const {
    data,
    error,
    isLoading: isSending,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig, []);

  async function handlePlaceOrder(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const order = { customer: data, items };

    sendRequest(
      JSON.stringify({
        order: {
          customer: order.customer,
          order: order.items,
        },
      })
    );
  }

  function handleFinish() {
    clearCart();
    clearData();
    onClose();
  }

  if (data && !error) {
    return (
      <Modal open={data} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order has been placed!</p>
        <div className="modal-actions">
          <button onClick={handleFinish} className="text-button">
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="cart">
        <h2>Checkout</h2>
        <p>Total Amount: {total}</p>
        <form onSubmit={handlePlaceOrder}>
          <p className="control">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="name" id="name" required />
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
              <input type="text" name="city" id="city" required />
            </p>
            <p className="control">
              <label htmlFor="postal-code">Postal Code</label>
              <input type="text" name="postal-code" id="postal-code" required />
            </p>
          </div>

          {error && (
            <Error title="Could not place your order" message={error} />
          )}

          <div className="modal-actions">
            {!isSending ? (
              <>
                <button type="button" onClick={onClose} className="text-button">
                  Close
                </button>
                <button className="button">Place Order</button>
              </>
            ) : (
              <span>Order Processsing</span>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
}
