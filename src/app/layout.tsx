'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
// import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Provider} from 'react-redux'
import store from '@/redux/store'
import '@scss/main.scss'
import '@fortawesome/fontawesome-pro/css/all.min.css'
import {SSRProvider} from 'react-bootstrap'
import Header from '@components/navigation/Header'

const inter = Inter({subsets: ['latin']})

// export const metadata: Metadata = {
//   title: 'Customer Relationship Management System',
//   description: 'Created by Mark Judson',
// }

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
