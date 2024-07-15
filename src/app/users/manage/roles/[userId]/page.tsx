'use client'
import React from 'react'
import {ManageUserRole} from '@/components/user'
import {useGetUserRolesQuery} from '@/redux/api'
import {UserRolesResponseModel} from '@/models/responses'
import {useParams} from 'next/navigation'
import {VortexSpinner} from '@/components/common'

const ManageUserRolePage = () => {
  const {userId} = useParams<{userId: string}>()
  const {
    data,
    isLoading,
  } = useGetUserRolesQuery<UserRolesResponseModel>(userId)

  if (isLoading) {
    // return <div>Loading...</div>
    return <VortexSpinner/>
  }

  return (
    <div>
      <ManageUserRole userRoles={data?.result}/>
    </div>
  )
}

export default ManageUserRolePage
