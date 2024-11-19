'use client'
import React from 'react'
import {useGetClientByIdQuery, useGetStatesListQuery} from '@/redux/api'
import {ClientResponseModel, StateListResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'
import {useParams} from 'next/navigation'
import {ClientDetail} from '@/components/client'

const ClientDetailPage = () => {
  const {clientId} = useParams()
  const {data: states, isLoading: statesLoading} = useGetStatesListQuery<StateListResponseModel>(clientId)
  const {data, isLoading} = useGetClientByIdQuery<ClientResponseModel>(clientId)

  if (isLoading || statesLoading || !data?.result || !states?.result) {
    return <VortexSpinner/>
  }

  return (
    <div>
      <ClientDetail clientDto={data.result} statesDto={states.result}/>
    </div>
  )
}

export default ClientDetailPage
