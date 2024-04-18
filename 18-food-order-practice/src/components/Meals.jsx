import { useState, useEffect } from 'react';
import { fetchAvailableMeals } from '../http';
import Error from './Error';
import MealItem from './MealItem';

export default function Meals() {
  const [isFetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);

      try {
        const meals = await fetchAvailableMeals();
        setMeals(meals);
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch the Available Meals.',
        });
      }

      setIsFetching(false);
    }

    fetchMeals();
  }, []);

  if (error) {
    return <Error title="Something went wrong!" message={error.message} />;
  }

  return (
    <main id="menu">
      {isFetching && (
        <p style={{ textAlign: 'center' }}>Loading available meals</p>
      )}
      {!isFetching && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </main>
  );
}
