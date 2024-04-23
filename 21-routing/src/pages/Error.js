import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Something went wrong</h1>
        <p>This is not the page you were looking for!</p>
      </main>
    </>
  );
};

export default ErrorPage;
