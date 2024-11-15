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
import personApi from '@/redux/api/personApi'
import {
  useGetPersonListQuery,
  useGetPersonByIdQuery,
  useGetPersonListByClientQuery,
  PersonListRequestParams,
} from '@/redux/api/personApi'
import personTypeApi from '@/redux/api/personTypeApi'
import {
  useGetPersonTypeListQuery,
  useGetPersonTypeByIdQuery,
  useCreatePersonTypeMutation,
  useUpdatePersonTypeMutation,
} from '@/redux/api/personTypeApi'

export type {PersonListRequestParams}

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
  personApi,
  useGetPersonListQuery,
  useGetPersonByIdQuery,
  useGetPersonListByClientQuery,
  personTypeApi,
  useGetPersonTypeListQuery,
  useGetPersonTypeByIdQuery,
  useCreatePersonTypeMutation,
  useUpdatePersonTypeMutation,
}
