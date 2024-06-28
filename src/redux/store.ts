import {configureStore} from '@reduxjs/toolkit'
import {
  authApi,
  clientApi,
} from '@/redux/api'

const store = configureStore({
  reducer: {
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

