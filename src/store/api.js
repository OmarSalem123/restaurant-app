import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/public/api"
    }),
    endpoints: (build) => ({
        // Get /categories
        getCategories: build.query({
            query: () => "/categories"
        }),

        // Get /products
        getProducts: build.query({
            query: () => "/products"
        })
    })
})

export const { useGetCategoriesQuery, useGetProductsQuery } = api;