import { api } from "./ApiSlice";
 const commentsapi=api.injectEndpoints({
  endpoints:(builder)=>({
    getComments:builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
  })
 })
})
export const {useGetCommentsQuery} =commentsapi
