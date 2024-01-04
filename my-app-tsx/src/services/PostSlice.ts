import { api } from "./ApiSlice";
 const postApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getPosts: builder.query({
            query: () => ({
              url: "/posts",
              method: "GET",
            }),
          }),
          addPost: builder.mutation({
            query:(body)=>({
              url:"/posts",
              method:"POST",
              body:body
            })
          }),
      
          updatePost:builder.mutation({
            query:(body)=>({
              url:"/posts/1",
              method:"PATCH",
              body:body
            })
          }),
          deletPost:builder.mutation({
            query:(body)=>({
              url:"/posts/1",
              method:"DELETE",
              body:body
            })
          })
    })
 })
export const {useGetPostsQuery,useAddPostMutation,useUpdatePostMutation,useDeletPostMutation}=postApi