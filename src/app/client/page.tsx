'use client'
import React from 'react'
import {useGetClientListQuery} from '@/redux/api/clientApi'
import {ClientListResponseModel} from '@/models/responses'
import ClientList from '@/components/client/clientList'

const Page = () => {
  const {data, isLoading} = useGetClientListQuery<ClientListResponseModel>(null)
  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)
  return (
    <div>
      <h1>Client List</h1>
      <ClientList clientList={data.result} />
    </div>
  )
}

export default Page
