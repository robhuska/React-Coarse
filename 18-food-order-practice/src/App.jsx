import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartContextProvider } from './store/CartContextProvider';

function App() {
  const [cartModalVisibility, setCartModalVisibility] = useState(false);
  const [checkoutModalVisibility, setCheckoutModalVisibility] = useState(false);

  function handleCartSubmit() {
    setCartModalVisibility(false);
    setCheckoutModalVisibility(true);
    console.log('Open Checkout!');
  }

  return (
    <CartContextProvider>
      <Header openCart={() => setCartModalVisibility(true)} />
      <Meals />
      <Cart
        isOpen={cartModalVisibility}
        onClose={() => setCartModalVisibility(false)}
        onCartSubmit={handleCartSubmit}
      />
      <Checkout
        isOpen={checkoutModalVisibility}
        onClose={() => setCheckoutModalVisibility(false)}
      />
    </CartContextProvider>
  );
}

export default App;
