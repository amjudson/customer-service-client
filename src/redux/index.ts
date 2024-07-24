import {useAppDispatch} from '@/redux/hooks'
import {useAppSelector} from '@/redux/hooks'
import store from '@/redux/store'
import {
  setLoggedInUser,
  emptyUserAction,
  emptyUserState,
  UserAuthState,
} from '@/redux/userAuthSlice'

export type {UserAuthState}

export {
  useAppDispatch,
  useAppSelector,
  store,
  setLoggedInUser,
  emptyUserAction,
  emptyUserState,
}
