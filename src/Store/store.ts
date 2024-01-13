import { configureStore } from '@reduxjs/toolkit';
import api from '../services/ApiSlice';
import authReducer from './authSlice';

export type Auth={
  auth:{
    token:string
  }
}
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
