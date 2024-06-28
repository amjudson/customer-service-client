'use client'
import React from 'react'
import {useGetClientListQuery} from '@/redux/api/clientApi'
import {ClientModel} from '@/models/clientModel'

const Page = () => {
  const {data, isLoading, error} = useGetClientListQuery(null)
  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data)
  return (
    <div>
      <h1>Index Page</h1>
      {data &&
        data.result.map((client: ClientModel) =>
          (<div className={'text-white'} key={client.clientId}>{client.clientName}</div>))
      }
    </div>
  )
}

export default Page
