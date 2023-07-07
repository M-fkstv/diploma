import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from '../constants/baseURL';

export const bagAPI = createApi({
  reducerPath: 'orderSending',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
  endpoints: (builder) => ({
    sendOrder: builder.mutation({
      query: (body) => ({
        url: 'cart',
        content_type: 'application/json',
        method: 'POST',
        body,
      }),

      transformResponse: (response, meta, arg) => response,
      onQueryStarted: async (arg, api) => {
        const { data } = await api.queryFulfilled.then((res) => res);
        return data;
      },
    }),
  }),
});

export const { useSendOrderMutation } = bagAPI;
