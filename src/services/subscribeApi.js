import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from '../constants/baseURL';

export const subscriptionAPI = createApi({
  reducerPath: 'subscription',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
  endpoints: (builder) => ({
    subscription: builder.mutation({
      query: (body) => ({
        url: 'subscription',
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

export const { useSubscriptionMutation } = subscriptionAPI;
