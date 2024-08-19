import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  return Cookies.get('auth') === 'true';
};

export const logout = () => {
  Cookies.remove('auth');
};
