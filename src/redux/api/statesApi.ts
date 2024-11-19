import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const statesApi = createApi({
  reducerPath: 'statesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem('token')
      token && (headers.append('Authorization', `Bearer ${token}`))
    },
  }),
  tagTypes: ['States'],
  endpoints: (builder) => ({
    getStatesList: builder.query({
      query: () => ({
        url: `states/getStates`,
        method: 'GET',
      }),
      providesTags: ['States'],
    }),
    getStateById: builder.query({
      query: (stateId:number) => ({
        url: `states/getStateById/${stateId}`,
        method: 'GET',
      }),
      providesTags: ['States'],
    }),
  }),
})

export const {
  useGetStatesListQuery,
  useGetStateByIdQuery,
} = statesApi

export default statesApi
