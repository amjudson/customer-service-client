'use client'
import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, Form, FormCheck, FormGroup} from 'react-bootstrap'
import {ClaimsViewModel, RolesViewModel} from '@/models/viewModels'
import {ClaimSelection, RoleSelection} from '@/models'
import {useUpdateUserClaimsMutation, useUpdateUserRolesMutation} from '@/redux/api'
import {useRouter} from 'next/navigation'
import {ToastDisplay} from '@/components/common'

export interface ManageUserClaimProps {
  userClaims?: ClaimsViewModel
}

const ManageUserClaim = ({userClaims}: ManageUserClaimProps) => {
  const router = useRouter()
  const [updateClaims] = useUpdateUserClaimsMutation()
  const [firstName, setFirstName] = useState(userClaims?.userDto?.firstName)
  const [lastName, setLastName] = useState(userClaims?.userDto?.lastName)
  const [email, setEmail] = useState(userClaims?.userDto?.email)
  const [claimList, setClaimList] = useState<ClaimSelection[]>(userClaims?.claimsList!)

  // toast parameters
  const [toastHeader, setToastHeader] = useState(<div/>)
  const [toastBody, setToastBody] = useState(<div/>)
  const [toastDelay, setToastDelay] = useState(2000)
  const [toastShow, setToastShow] = useState(false)

  const handleCloseToast = () => {
    setToastShow(false)
  }

  const handleClaimSelection = (claimType: string) => {
    setClaimList(prev => {
      return prev?.map((claim) => {
        if (claim.claimType === claimType) {
          claim = {...claim, selected: !claim.selected}
        }
        return claim
      })
    })
  }

  const handleSubmit = () => {
    if (!userClaims?.userDto) {
      return
    }

    const newUserClaims: ClaimsViewModel = {
      userDto: userClaims?.userDto,
      claimsList: claimList ?? [],
    }

    updateClaims(newUserClaims)
    setToastHeader(<div>Claims Updated</div>)
    setToastBody(<div>User claims have been updated successfully for {userClaims?.userDto.lastName}</div>)
    setToastShow(true)
  }

  return (
    <div>
      <ToastDisplay
        toastShow={toastShow}
        toastDelay={toastDelay}
        toastHeader={toastHeader}
        toastBody={toastBody}
        setToastShow={handleCloseToast}
      />
      <Form>
        <Card border={'success'} className={'mt-4'}>
          <CardHeader className={'bg-success bg-gradient ml-0 py-3'}>
            <div className={'row'}>
              <div className={'col-12 text-center'}>
                <h2 className={'text-white py-2'}>Manage User Claims</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className={'p-4'}>
            <FormGroup>
              <Form.Label className={'col-12'} htmlFor={'name'}>FirstName</Form.Label>
              <div className={'col-12'}>
                <input
                  disabled
                  className={'form-control'}
                  id={'name'}
                  value={`${firstName} ${lastName}`}
                  onChange={(e) => {
                    const [first, last] = e.target.value.split(' ')
                    setFirstName(first)
                    setLastName(last)
                  }}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Form.Label className={'col-12'} htmlFor={'email'}>Email</Form.Label>
              <div className={'col-12'}>
                <input
                  disabled
                  className={'form-control'}
                  id={'email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </FormGroup>
            <FormGroup className={'mt-3 p-2 border rounded'}>
              <span>Claim Assignments</span>
              {claimList && claimList.map((claim, index) => (
                <FormCheck key={index}>
                  <FormCheck.Label>{claim.claimType}</FormCheck.Label>
                  <FormCheck.Input
                    type={'checkbox'}
                    checked={claim.selected}
                    onChange={() => {handleClaimSelection(claim.claimType)}}
                  />
                </FormCheck>
              ))}
            </FormGroup>
            <FormGroup className={'pt-3 row'}>
              <div className={'col-6'}>
                <Button
                  className={'btn btn-secondary w-100'}
                  onClick={() => router.push('/users')}
                >
                  Return to User List
                </Button>
              </div>
              <div className={'col-6'}>
                <Button
                  className={'btn btn-primary w-100'}
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </div>
            </FormGroup>
          </CardBody>
        </Card>
      </Form>
    </div>
  )
}

export default ManageUserClaim
