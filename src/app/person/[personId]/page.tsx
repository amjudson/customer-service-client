'use client'
import React from 'react'
import {useParams} from 'next/navigation'
import {useGetPersonByIdQuery, useGetStatesListQuery} from '@/redux/api'
import {PersonResponseModel, StateListResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'
import PersonDetail from '@/components/person/personDetail'

const PersonDetailPage = () => {
  const {personId} = useParams()
  const {data: states, isLoading: statesLoading} = useGetStatesListQuery<StateListResponseModel>(null)
  const {data, isLoading} = useGetPersonByIdQuery<PersonResponseModel>(parseInt(personId!.toString()))

  if (isLoading || statesLoading) {
    return <VortexSpinner/>
  }

  return (
    <div>
      <PersonDetail personDto={data?.result} statesDto={states.result} />
    </div>
  )
}

export default PersonDetailPage
