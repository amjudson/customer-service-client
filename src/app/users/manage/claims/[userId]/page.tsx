'use client'
import React from 'react'
import {useParams} from 'next/navigation'
import {useGetUserClaimsQuery} from '@/redux/api'
import {UserClaimsResponseModel} from '@/models/responses'
import {VortexSpinner} from '@/components/common'
import {ManageUserClaim} from '@/components/user'

const ManageUserClaimsPage = () => {
  const {userId} = useParams<{userId: string}>()
  const {
    data,
    isLoading,
  } = useGetUserClaimsQuery<UserClaimsResponseModel>(userId)

  if (isLoading) {
    return <VortexSpinner/>
  }

  return (
    <div>
      <ManageUserClaim userClaims={data?.result}/>
    </div>
  )
}

export default ManageUserClaimsPage
