const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
  type: USER_LOGIN,
  user,
});

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});
