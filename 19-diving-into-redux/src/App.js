import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {isLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
