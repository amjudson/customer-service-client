import authApi from '@/redux/api/authApi'
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from '@/redux/api/authApi'
import clientApi from '@/redux/api/clientApi'
import {
  useGetClientListQuery,
  useGetClientByIdQuery,
} from '@/redux/api/clientApi'
import userApi from '@/redux/api/userApi'
import {
  useGetUserListQuery,
  useGetUserRolesQuery,
  useGetUserClaimsQuery,
  useUpdateUserRolesMutation,
} from '@/redux/api/userApi'


export {
  authApi,
  useRegisterUserMutation,
  useLoginUserMutation,
  clientApi,
  useGetClientListQuery,
  useGetClientByIdQuery,
  userApi,
  useGetUserListQuery,
  useGetUserRolesQuery,
  useGetUserClaimsQuery,
  useUpdateUserRolesMutation,
}
