import React, {PropsWithChildren, ReactNode} from 'react'

interface AuthenticatedAppProps {
  children: ReactNode
}

const AuthenticatedApp = ({
                            children,
                          }: PropsWithChildren<AuthenticatedAppProps>) => {
  return <>{children}</>
}

export default AuthenticatedApp
