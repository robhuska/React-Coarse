import { useContext } from 'react';
import CartContext from '../store/CartContextProvider';

export default function MealItem({ meal }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <div>
          <span className="meal-item-price">${meal.price}</span>
        </div>
        <div className="meal-item-description">
          <p>{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addItemToCart(meal)}>
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
}
