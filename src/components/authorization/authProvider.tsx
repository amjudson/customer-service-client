import {createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState} from 'react'
import {useAppSelector, UserAuthState} from '@/redux'

export interface AuthContextModel {
  user: UserAuthState | undefined
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextModel>({
  user: {} as UserAuthState,
})

const AuthProvider = ({children}: PropsWithChildren<AuthProviderProps>) => {
  const [user, setUser] = useState<UserAuthState>()
  const authenticatedUser = useAppSelector(state => state.userAuthSlice)
  const sessionUser = sessionStorage.getItem('userAuth')
  const handleSetUser = useCallback((user: UserAuthState): void => {
    setUser(user)
  }, [
    user,
  ])

  useEffect(() => {
    if (sessionUser && !authenticatedUser) {
      const parsedUser: UserAuthState = JSON.parse(sessionUser)
      handleSetUser(parsedUser)
    }
  }, [
    handleSetUser,
    sessionUser,
    user,
    authenticatedUser,
  ])

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextModel => useContext(AuthContext)
export {AuthProvider, useAuth}
