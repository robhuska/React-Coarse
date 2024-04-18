import { useContext, useState } from 'react';
import CartContext from '../store/CartContextProvider';
import logo from '../assets/logo.jpg';
import Modal from './Modal';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Header() {
  const { items } = useContext(CartContext);
  const [cartModalVisibility, setCartModalVisibility] = useState(false);
  const [checkoutModalVisibility, setCheckoutModalVisibility] = useState(false);

  function handleCartSubmit() {
    setCartModalVisibility(false);
    setCheckoutModalVisibility(true);
    console.log('Open Checkout!');
  }

  function handleCheckoutSubmit() {
    console.log('Place Order!!');
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="React Food Logo" />
        <h1>ReactFood</h1>
      </div>
      <button
        className="text-button"
        onClick={() => setCartModalVisibility(true)}
      >
        Cart ({items.length})
      </button>
      <Modal
        open={cartModalVisibility}
        onClose={() => setCartModalVisibility(false)}
        submitText={items.length > 0 ? 'Checkout' : ''}
        onSubmit={() => handleCartSubmit()}
      >
        <Cart />
      </Modal>
      <Modal
        open={checkoutModalVisibility}
        onClose={() => setCheckoutModalVisibility(false)}
        submitText="Place Order"
        onSubmit={() => handleCheckoutSubmit()}
      >
        <Checkout />
      </Modal>
    </header>
  );
}
