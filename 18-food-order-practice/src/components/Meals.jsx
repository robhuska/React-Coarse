import useHttp from '../hooks/useHttp';
import Error from './Error';
import MealItem from './MealItem';

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    error,
    isLoading,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (error) {
    return <Error title="Something went wrong!" message={error} />;
  }

  return (
    <main id="menu">
      {isLoading && <p className="center">Loading available meals</p>}
      {!isLoading && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </main>
  );
}
