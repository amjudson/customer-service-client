import React, {PropsWithChildren, ReactNode} from 'react'
import dynamic from 'next/dynamic'
import {useAuth} from './authProvider'

interface AuthenticationRouterProps {
  children: ReactNode
}

const AuthenticatedApp = dynamic(import('./AuthenticatedApp'))
const UnauthenticatedApp = dynamic(import('./UnauthenticatedApp'))

const AuthenticationRouter = ({children}: PropsWithChildren<AuthenticationRouterProps>): JSX.Element => {
  const {user} = useAuth()
  if (user?.authenticated) {
    return <AuthenticatedApp>{children}</AuthenticatedApp>
  }

  return <UnauthenticatedApp />
}

export default AuthenticationRouter
