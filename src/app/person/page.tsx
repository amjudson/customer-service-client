'use client'
import React from 'react'
import PersonList from '@/components/person/personList'
import {useGetPersonListQuery, PersonListRequestParams, useGetPersonTypeListQuery} from '@/redux/api'
import {PersonListResponseModel, PersonTypeListResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'

function PersonListPage() {
  const params: PersonListRequestParams = {
    searchText: '',
    pageNumber: 1,
    pageSize: 10,
  }

  const {
    data: personTypes,
    isLoading: personTypesLoading
  } = useGetPersonTypeListQuery<PersonTypeListResponseModel>(null)
  const {data, isLoading} = useGetPersonListQuery<PersonListResponseModel>(params)

  if (isLoading || personTypesLoading) {
    return <VortexSpinner/>
  }

  return (
    <PersonList personList={data?.result} personTypes={personTypes?.result} />
  )
}

export default PersonListPage
