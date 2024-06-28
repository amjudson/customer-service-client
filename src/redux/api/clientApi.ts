import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    getClientList: builder.query({
      query: () => ({
        url: `client/getClientList`,
        method: 'GET',
      }),
      providesTags: ['Client'],
    }),
    getClientById: builder.query({
      query: (clientId) => ({
        url: `client/getClientById/${clientId}`,
        method: 'GET',
      }),
      providesTags: ['Client'],
    }),
  }),
})

export const {
  useGetClientListQuery,
  useGetClientByIdQuery,
} = clientApi

export default clientApi

