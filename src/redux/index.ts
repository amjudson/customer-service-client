import {useAppDispatch} from '@/redux/hooks'
import {useAppSelector} from '@/redux/hooks'
import store from '@/redux/store'
import {setLoggedInUser} from '@/redux/userAuthSlice'

export {
  useAppDispatch,
  useAppSelector,
  store,
  setLoggedInUser,
}
