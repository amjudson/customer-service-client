'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Provider} from 'react-redux'
import store from '@/redux/store'
import '@/scss/main.scss'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import {SSRProvider} from 'react-bootstrap'
import Header from '@/components/navigation/header'

export default function RootLayout({
                                     children,
                                   }: { children: React.ReactNode; }) {
  return (
    <html lang={'en'}>
    <body>
    <Provider store={store}>
      <SSRProvider>
        <Header/>
        {children}
      </SSRProvider>
    </Provider>
    </body>
    </html>
  )
}
