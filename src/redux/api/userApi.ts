import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ClaimsViewModel, RolesViewModel} from '@/models/viewModels'

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
        url: `user/postUserManageRole`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userRoles,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserClaims: builder.mutation({
      query: (userClaims: ClaimsViewModel) => ({
        url: `user/postUserManageClaims`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userClaims,
      }),
      invalidatesTags: ['User'],
    }),
    lockUnlockUser: builder.mutation({
      query: (userId: string) => ({
        url: `user/lockUnlockUser/${userId}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (userId: string) => ({
        url: `user/deleteUser/${userId}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
  useUpdateUserClaimsMutation,
  useDeleteUserMutation,
  useLockUnlockUserMutation,
} = userApi

export default userApi

