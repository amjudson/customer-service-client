import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState} from 'react'
import {setLoggedInUser, useAppDispatch, useAppSelector, UserAuthState, setUserLogout} from '@/redux'
import {UserModel} from '@/models'

export interface AuthContextModel {
  loginUser: (user: UserAuthState) => void
  clearUser: () => void
  user: UserAuthState | undefined
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextModel>({
  loginUser: () => null,
  clearUser: () => null,
  user: {} as UserAuthState,
})

const AuthProvider = ({children}: PropsWithChildren<AuthProviderProps>) => {
  const dispatch = useAppDispatch()
  const [user, setUser] = useState<UserAuthState>()
  const authenticatedUser = useAppSelector(state => state.userAuthSlice)

  const handleSetUser = useCallback((user: UserAuthState): void => {
    setUser(user)
  }, [
    user,
  ])

  const loginUser = (user: UserAuthState) => {
    const userModel: UserModel = {
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id,
      email: user.email,
      roles: user.roles,
      claims: user.claims,
    }
    dispatch(setLoggedInUser(userModel))
  }

  const clearUser = useCallback((): void => {
    setUser(undefined)
    dispatch(setUserLogout())
  }, [
    dispatch,
  ])

  useEffect(() => {
    console.log('Authenticated User:', authenticatedUser)
    const sessionUser = sessionStorage.getItem('userAuth')
    if (sessionUser && !authenticatedUser.authenticated) {
      const parsedUser: UserAuthState = JSON.parse(sessionUser)
      handleSetUser(parsedUser)
      loginUser(user ?? parsedUser)
    } else {
      if (authenticatedUser) {
        handleSetUser(authenticatedUser)
      }
    }
  }, [
    handleSetUser,
    authenticatedUser,
  ])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        clearUser,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextModel => React.useContext(AuthContext)
export {AuthProvider, useAuth}
