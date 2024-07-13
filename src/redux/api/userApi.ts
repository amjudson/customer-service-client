import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RolesViewModel} from '@/models/viewModels'

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
    getUserRoles: builder.query({
      query: (userId: string) => ({
        url: `user/getUserManageRole/${userId}`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    getUserClaims: builder.query({
      query: (userId: string) => ({
        url: `user/getUserManageClaims/${userId}`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    updateUserRoles: builder.mutation({
      query: (userRoles: RolesViewModel) => ({
        url: `user/getUserManageClaims/${userRoles}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userRoles,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserListQuery,
  useGetUserRolesQuery,
  useGetUserClaimsQuery,
  useUpdateUserRolesMutation,
} = userApi

export default userApi

