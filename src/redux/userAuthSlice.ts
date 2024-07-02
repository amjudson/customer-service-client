import {createSlice} from '@reduxjs/toolkit'
import {UserModel} from '@/models'

export const emptyUserState : UserModel = {
  firstName: '',
  lastName: '',
  id: '',
  email: '',
  role: '',
}

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: emptyUserState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.id = action.payload.id
      state.email = action.payload.email
      state.role = action.payload.role
    },
  },
})

export const {
  setLoggedInUser,
} = userAuthSlice.actions

export default userAuthSlice.reducer
