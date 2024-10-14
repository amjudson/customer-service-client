import {createSlice} from '@reduxjs/toolkit'
import {UserModel} from '@/models'

export interface UserAuthState extends UserModel {
  authenticated: boolean
}


export interface UserAuthAction {
  type: string
  payload: UserModel
}

export const emptyUserAction: UserAuthAction = {
  type: '',
  payload: {
    firstName: '',
    lastName: '',
    id: '',
    email: '',
    roles: [],
    claims: [],
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
      state.roles = action.payload.roles ? action.payload.roles : []
      state.claims = action.payload.claims ? action.payload.claims : []
      sessionStorage.setItem('userAuth', JSON.stringify(state))
      return state
    },
    setUserLogout: (state) => {
      localStorage.removeItem('token')
      sessionStorage.removeItem('userAuth')
      return {...state,
        authenticated: false,
        firstName: '',
        lastName: '',
        id: '',
        email: '',
        roles: [],
        claims: [],
      }
    },
    getUserData: (state) => {
      const user:UserAuthState
        = sessionStorage.getItem('userAuth') ? JSON.parse(sessionStorage.getItem('userAuth') ?? '') : {}
      return {...state, ...user}
    },
  },
})

export const {
  setLoggedInUser,
  setUserLogout,
  getUserData,
} = userAuthSlice.actions

export default userAuthSlice.reducer
