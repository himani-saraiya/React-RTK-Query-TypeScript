import api from "./ApiSlice"

 const postApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getProductsData: builder.query({
            query: () => ({
              url: "/products",
              method: "GET"
            }),
          }),
    })
 })
export const {useGetProductsDataQuery} = postApi