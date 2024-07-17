import {createSlice} from '@reduxjs/toolkit'
import {UserModel} from '@/models'

export interface UserAuthState extends UserModel {
  authenticated: boolean
}


interface UserAuthAction {
  type: string
  payload: {
    firstName: string
    lastName: string
    id: string
    email: string
    roles: string
    claims: string
  }
}

export const emptyUserAction: UserAuthAction = {
  type: '',
  payload: {
    firstName: '',
    lastName: '',
    id: '',
    email: '',
    roles: '',
    claims: '',
  },
}

export const emptyUserState: UserAuthState = {
  authenticated: false,
  firstName: '',
  lastName: '',
  id: '',
  email: '',
  roles: [],
  claims: [],
}

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: emptyUserState,
  reducers: {
    setLoggedInUser: (state, action: UserAuthAction) => {
      state.authenticated = true
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.id = action.payload.id
      state.email = action.payload.email
      state.roles = action.payload.roles.split(',')
      state.claims = action.payload.claims.split(',')
      sessionStorage.setItem('userAuth', JSON.stringify(state))
    },
  },
})

export const {
  setLoggedInUser,
} = userAuthSlice.actions

export default userAuthSlice.reducer
