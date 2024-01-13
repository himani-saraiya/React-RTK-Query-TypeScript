import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Auth } from "../Store/store";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

type PrepareHeaders = (
  headers: Headers,
  api: {
    getState: () => unknown;
    extra: unknown;
    endpoint: string;
    type: 'query' | 'mutation';
    forced?: boolean;
  }
) => Headers | void;

const prepareHeaders: PrepareHeaders = (headers, { getState }) => {
  const token=(getState() as Auth)?.auth?.token
  headers.set('Authorization', `Bearer ${token}`);
  return headers;
  // console.log(headers)
};


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: 5000,
    isJsonContentType:(headers)=>{
      return headers.get(`content-type`)=== `application/json`;
    },
    prepareHeaders,
  }),
  
  endpoints: (builder) => ({

  }),
});

export default api;
