// authService.ts
import { AppDispatch } from '../Store/store';
import { setToken } from '../Store/authSlice';

const loginUser = (username: string, password: string, dispatch: AppDispatch) => {
  const token = 'my-token';
  dispatch(setToken(token));
};
console.log(loginUser)