import {configureStore} from '@reduxjs/toolkit'
import {
  authApi,
  clientApi,
  userApi,
  personApi,
  personTypeApi,
  statesApi,
} from '@/redux/api'
import userAuthSlice from '@/redux/slices/userAuthSlice'

const store = configureStore({
  reducer: {
    userAuthSlice: userAuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [personApi.reducerPath]: personApi.reducer,
    [personTypeApi.reducerPath]: personTypeApi.reducer,
    [statesApi.reducerPath]: statesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(clientApi.middleware)
      .concat(personApi.middleware)
      .concat(personTypeApi.middleware)
      .concat(statesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

