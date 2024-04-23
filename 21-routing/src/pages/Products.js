import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    title: 'Product 1',
    id: 'product-1',
  },
  {
    title: 'Product 2',
    id: 'product-2',
  },
  {
    title: 'Product 3',
    id: 'product-3',
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate('/');
  }
  return (
    <>
      <h1>The Products Page.</h1>
      <p>
        <button onClick={handleNavigate}>Go Home</button>
      </p>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
