import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'signup' && mode !== 'login') {
    throw json({ message: 'Invalid mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Unable to authenticate user.' }, { status: 500 });
  }

  // manage token
  const resData = await response.json();
  const token = resData.token;
  const exp = new Date();
  exp.setHours(exp.getHours() + 1);

  localStorage.setItem('authToken', token);
  localStorage.setItem('authExp', exp.toISOString());

  return redirect('/');
}
