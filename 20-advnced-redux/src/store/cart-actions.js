import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reduxcart-88500-default-rtdb.firebaseio.com/cart.json'
      );

      const resData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      return resData;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.FETCH_CART({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: 'error',
          title: 'Error',
          message: error.message || 'Fetching cart data failed.',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.SHOW_NOTIFICATION({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data.',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://reduxcart-88500-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.SHOW_NOTIFICATION({
          status: 'error',
          title: 'Error',
          message: error.message || 'Sending cart data failed.',
        })
      );
    }
  };
};
