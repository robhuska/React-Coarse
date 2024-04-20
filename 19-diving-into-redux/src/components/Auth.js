import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    dispatch(authActions.LOGIN());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
