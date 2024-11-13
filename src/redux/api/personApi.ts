import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem('token')
      token && (headers.append('Authorization', `Bearer ${token}`))
    },
  }),
  tagTypes: ['Person'],
  endpoints: (builder) => ({
    getPersonList: builder.query({
      query: () => ({
        url: `person/getPersonList`,
        method: 'GET',
      }),
      providesTags: ['Person'],
    }),
    getPersonById: builder.query({
      query: (personId) => ({
        url: `person/getPersonById/${personId}`,
        method: 'GET',
      }),
      providesTags: ['Person'],
    }),
    createPerson: builder.mutation({
      query: (person) => ({
        url: `person/createPerson`,
        method: 'POST',
        body: person,
      }),
      invalidatesTags: ['Person'],
    }),
    updatePerson: builder.mutation({
      query: (person) => ({
        url: `person/updatePerson`,
        method: 'PUT',
        body: person,
      }),
      invalidatesTags: ['Person'],
    }),
  }),
})

export const {
  useGetPersonListQuery,
  useGetPersonByIdQuery,
  useCreatePersonMutation,
  useUpdatePersonMutation,
} = personApi

export default personApi
