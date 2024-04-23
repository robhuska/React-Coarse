import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const totalCartItems = items.reduce(
  //   (prevQty, item) => prevQty + item.quantity,
  //   0
  // );

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.TOGGLE_CART())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
