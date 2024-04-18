import { useContext, useState } from 'react';
import CartContext from '../store/CartContextProvider';
import logo from '../assets/logo.jpg';

export default function Header({ openCart }) {
  const { items } = useContext(CartContext);
  // const [checkoutModalVisibility, setCheckoutModalVisibility] = useState(false);

  // function handleCartSubmit() {
  //   setCartModalVisibility(false);
  //   setCheckoutModalVisibility(true);
  //   console.log('Open Checkout!');
  // }

  // function handleCheckoutSubmit() {
  //   console.log('Place Order!!');
  // }

  const itemTotal = items.reduce(
    (prevTotal, item) => (prevTotal += item.quantity),
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="React Food Logo" />
        <h1>ReactFood</h1>
      </div>
      <button className="text-button" onClick={openCart}>
        Cart ({itemTotal})
      </button>
      {/* <Modal
        open={checkoutModalVisibility}
        onClose={() => setCheckoutModalVisibility(false)}
        submitText="Place Order"
        onSubmit={() => handleCheckoutSubmit()}
      >
        <Checkout />
      </Modal> */}
    </header>
  );
}
