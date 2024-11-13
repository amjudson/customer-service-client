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
  useUpdateUserClaimsMutation,
  useDeleteUserMutation,
  useLockUnlockUserMutation,
} from '@/redux/api/userApi'
import statesApi from '@/redux/api/statesApi'
import {
  useGetStatesListQuery,
  useGetStateByIdQuery,
} from '@/redux/api/statesApi'

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
  useUpdateUserClaimsMutation,
  useDeleteUserMutation,
  useLockUnlockUserMutation,
  statesApi,
  useGetStatesListQuery,
  useGetStateByIdQuery,
}
