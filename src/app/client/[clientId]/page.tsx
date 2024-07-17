'use client'
import React from 'react'
import {useGetClientByIdQuery} from '@/redux/api'
import {ClientResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'
import {useParams} from 'next/navigation'
import {ClientDetail} from '@/components/client'

const ClientDetailPage = () => {
  const {clientId} = useParams()
  const {data, isLoading} = useGetClientByIdQuery<ClientResponseModel>(clientId)

  if (isLoading || !data?.result) return <VortexSpinner/>

  return (
    <div>
      <ClientDetail clientDto={data.result}/>
    </div>
  )
}

export default ClientDetailPage
