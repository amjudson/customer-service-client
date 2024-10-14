import {configureStore} from '@reduxjs/toolkit'
import {
  authApi,
  clientApi,
  userApi,
} from '@/redux/api'
import userAuthSlice from '@/redux/slices/userAuthSlice'

const store = configureStore({
  reducer: {
    userAuthSlice: userAuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(clientApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

