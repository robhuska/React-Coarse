import { currencyFormatter } from '../util/formatting';
import { useContext } from 'react';
import CartContext from '../store/CartContextProvider';
import Modal from './Modal';

export default function Cart({ isOpen, onClose, onCartSubmit }) {
  const { items, total, updateItemQuantity } = useContext(CartContext);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="cart">
        <h2>Your Cart</h2>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <p>
                    {item.name} - {item.quantity} x{' '}
                    {currencyFormatter.format(item.price)}
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
            <div className="cart-total">{currencyFormatter.format(total)}</div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="modal-actions">
          <button onClick={onClose} className="text-button">
            Close
          </button>
          {items.length > 0 && (
            <button onClick={onCartSubmit} className="button">
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
