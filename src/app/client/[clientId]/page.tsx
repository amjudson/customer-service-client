import React from 'react'
import {useGetClientByIdQuery} from '@/redux/api'
import {ClientResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'

export interface ClientDetailProps {
  clientId: string
}

const ClientDetailPage = ({clientId}: ClientDetailProps) => {
  const {data, isLoading} = useGetClientByIdQuery<ClientResponseModel>(clientId)

  if (isLoading) return <VortexSpinner/>

  return (
    <div>
      <h3 className={'m-2 text-success'}>Client Detail</h3>
      <p>{data.result.clientName}</p>
    </div>
  )
}

export default ClientDetailPage
