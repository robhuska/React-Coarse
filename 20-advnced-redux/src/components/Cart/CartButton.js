import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../stroe/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalCartItems = items.reduce(
    (prevQty, item) => prevQty + item.quantity,
    0
  );

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.TOGGLE_CART())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
