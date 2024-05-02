import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpDate = localStorage.getItem('authExp');
  const expDate = new Date(storedExpDate);
  const now = new Date();
  const duration = expDate.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return null;
  }

  const tokenDur = getTokenDuration();

  if (tokenDur < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth ');
  }

  return null;
}
