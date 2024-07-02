import {configureStore} from '@reduxjs/toolkit'
import {
  authApi,
  clientApi,
} from '@/redux/api'
import userAuthSlice from '@/redux/userAuthSlice'

const store = configureStore({
  reducer: {
    userAuthSlice: userAuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(clientApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

