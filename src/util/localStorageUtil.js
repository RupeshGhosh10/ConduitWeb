export const saveUser = (user, setUser) => {
  localStorage.setItem('userState', JSON.stringify({ ...user, isSignedIn: true }));
  setUser({ ...user, isSignedIn: true });
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('userState'));
}

export const removeUser = setUser => {
  localStorage.removeItem('userState');
  setUser({
    email: '',
    username: '',
    token: '',
    isSignedIn: false
  });
}

export const getToken = () => {
  return getUser() ? getUser().token : null;
}
