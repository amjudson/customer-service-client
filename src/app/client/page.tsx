'use client'
import React from 'react'
import {useGetClientListQuery} from '@/redux/api/clientApi'
import {ClientListResponseModel} from '@/models/responses'
import {ClientList} from '@/components/client'
import {VortexSpinner} from '@/components/common'
import {useRouter} from 'next/navigation'
import {UserAuthState} from '@/redux/slices/userAuthSlice'

const Page = () => {
  const router = useRouter()
  const {data, isLoading} = useGetClientListQuery<ClientListResponseModel>(null)
  const userAuth: UserAuthState = sessionStorage.getItem('userAuth')
    ? JSON.parse(sessionStorage.getItem('userAuth') as string)
    : null

   if (!userAuth.email) {
     router.push('/login')
   }

  if (isLoading) {
    return <VortexSpinner/>
  }

  return (
    <div>
      <h3 className={'m-2 text-success'}>Client List</h3>
      <ClientList clientList={data.result}/>
    </div>
  )
}

export default Page
