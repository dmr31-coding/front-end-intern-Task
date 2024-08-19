import Cookies from 'js-cookie';

export const login = async ({ username, password }) => {
  if (username === 'admin' && password === 'password') {
    Cookies.set('auth', 'true', { expires: 1 });
    return true;
  }
  return false;
};
