import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

export default function ErrorLayout(params) {
  const error = useRouteError();

  let title = 'Uh oh!';
  let message = 'Something went wrong...';

  console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = 'The page you are looking for could not be found.';
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
