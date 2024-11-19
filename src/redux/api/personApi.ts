import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PersonModel} from '@/models'

export interface PersonListRequestParams {
  clientId?: string
  searchText?: string
  pageNumber?: number
  pageSize?: number
}

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
      query: (params:PersonListRequestParams) => ({
        url: `person/getPersonList?searchText=${params.searchText}&pageNumber=${params.pageNumber}&pageSize=${params.pageSize}`,
        method: 'GET',
      }),
      providesTags: ['Person'],
    }),
    getPersonListByClient: builder.query({
      query: (params:PersonListRequestParams) => ({
        url: `person/getPersonListByClient/${params.clientId}?searchText=${params.searchText}&pageNumber=${params.pageNumber}&pageSize=${params.pageSize}`,
        method: 'GET',
      }),
      providesTags: ['Person'],
    }),
    getPersonById: builder.query({
      query: (personId:number) => ({
        url: `person/getPersonById/${personId}`,
        method: 'GET',
      }),
      providesTags: ['Person'],
    }),
    createPerson: builder.mutation({
      query: (person:PersonModel) => ({
        url: `person/createPerson`,
        method: 'POST',
        body: person,
      }),
      invalidatesTags: ['Person'],
    }),
    updatePerson: builder.mutation({
      query: (person:PersonModel) => ({
        url: `person/updatePerson/${person.personId}`,
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
  useGetPersonListByClientQuery,
  useCreatePersonMutation,
  useUpdatePersonMutation,
} = personApi

export default personApi
