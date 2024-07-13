import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem('token')
      token && (headers.append('Authorization', `Bearer ${token}`))
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: () => ({
        url: `user/getUserList`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserListQuery,
} = userApi

export default userApi

