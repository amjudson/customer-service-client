'use client'
import React from 'react'
import {useGetClientListQuery} from '@/redux/api/clientApi'
import {ClientListResponseModel} from '@/models/responses'
import ClientList from '@/components/client/clientList'
import {VortexSpinner} from '@/components/common'

const Page = () => {
  const {data, isLoading} = useGetClientListQuery<ClientListResponseModel>(null)
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
