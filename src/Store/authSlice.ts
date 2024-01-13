import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from '../services/LocalStorage';

export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = loadState()?.auth || {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;


