import authApi from '@/redux/api/authApi'
import clientApi from '@/redux/api/clientApi'
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from '@/redux/api/authApi'

import {
  useGetClientListQuery,
  useGetClientByIdQuery,
} from '@/redux/api/clientApi'


export {
  authApi,
  clientApi,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetClientListQuery,
  useGetClientByIdQuery,
}
