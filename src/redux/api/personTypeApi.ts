import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PersonTypeModel} from '@/models'

const personTypeApi = createApi({
  reducerPath: 'personTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem('token')
      token && (headers.append('Authorization', `Bearer ${token}`))
    },
  }),
  tagTypes: ['PersonType'],
  endpoints: (builder) => ({
    getPersonTypeList: builder.query({
      query: () => ({
        url: `personType/getPersonTypes`,
        method: 'GET',
      }),
      providesTags: ['PersonType'],
    }),
    getPersonTypeById: builder.query({
      query: (personTypeId:number) => ({
        url: `personType/getPersonTypeById/${personTypeId}`,
        method: 'GET',
      }),
      providesTags: ['PersonType'],
    }),
    createPersonType: builder.mutation({
      query: (person:PersonTypeModel) => ({
        url: `personType/createPersonType`,
        method: 'POST',
        body: person,
      }),
      invalidatesTags: ['PersonType'],
    }),
    updatePersonType: builder.mutation({
      query: (person:PersonTypeModel) => ({
        url: `personType/updatePersonType/${person.personTypeId}`,
        method: 'PUT',
        body: person,
      }),
      invalidatesTags: ['PersonType'],
    }),
  }),
})

export const {
  useGetPersonTypeListQuery,
  useGetPersonTypeByIdQuery,
  useCreatePersonTypeMutation,
  useUpdatePersonTypeMutation,
} = personTypeApi

export default personTypeApi
