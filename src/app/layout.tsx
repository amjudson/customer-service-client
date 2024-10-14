'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Provider} from 'react-redux'
import store from '@/redux/store'
import '@/scss/main.scss'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import Header from '@/components/navigation/header'
import {AuthProvider} from '@/components/authorization'

export default function RootLayout({
                                     children,
                                   }: { children: React.ReactNode; }) {
  return (
    <html lang={'en'}>
      <body suppressHydrationWarning>
        <Provider store={store}>
          <AuthProvider>
            <Header/>
            {children}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  )
}
