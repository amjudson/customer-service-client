'use client'
import React from 'react'
import {useParams} from 'next/navigation'
import {useGetPersonByIdQuery, useGetPersonTypeListQuery, useGetStatesListQuery} from '@/redux/api'
import {PersonResponseModel, PersonTypeListResponseModel, StateListResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'
import PersonDetail from '@/components/person/personDetail'

const PersonDetailPage = () => {
  const {personId} = useParams()
  const {data: personTypes, isLoading: personTypesLoading}
    = useGetPersonTypeListQuery<PersonTypeListResponseModel>(null)
  const {data: states, isLoading: statesLoading} = useGetStatesListQuery<StateListResponseModel>(null)
  const {data, isLoading} = useGetPersonByIdQuery<PersonResponseModel>(parseInt(personId!.toString()))

  if (isLoading || statesLoading || personTypesLoading) {
    return <VortexSpinner/>
  }

  return (
    <div>
      <PersonDetail personDto={data?.result} statesDto={states.result} personTypes={personTypes.result} />
    </div>
  )
}

export default PersonDetailPage
