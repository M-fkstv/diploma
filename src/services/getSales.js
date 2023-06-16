import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from '../constants/baseURL';

// const apiUrl = 'https://if-modnikky-api.onrender.com/api/catalog';
export const salesApi = createApi({
  reducerPath: 'sales',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => 'catalog',
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        },
      ) {
        return queryFulfilled;
      },
    }),
    // sendOrder: builder.mutation({
    //   query: (body) => ({
    //     url: 'cart',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
  }),
});

export const { useGetSalesQuery } = salesApi;
