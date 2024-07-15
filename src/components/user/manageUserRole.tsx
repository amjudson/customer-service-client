'use client'
import React, {useState} from 'react'
import {Button, Card, CardBody, CardHeader, Form, FormCheck, FormGroup} from 'react-bootstrap'
import {RolesViewModel} from '@/models/viewModels'
import {RoleSelection} from '@/models'
import {useUpdateUserRolesMutation} from '@/redux/api'
import {useRouter} from 'next/navigation'
import {ToastDisplay} from '@/components/common'

export interface ManageUserRoleProps {
  userRoles?: RolesViewModel
}

const ManageUserRole = ({userRoles}: ManageUserRoleProps) => {
  const router = useRouter()
  const [updateRoles] = useUpdateUserRolesMutation()
  const [firstName, setFirstName] = useState(userRoles?.userDto?.firstName)
  const [lastName, setLastName] = useState(userRoles?.userDto?.lastName)
  const [email, setEmail] = useState(userRoles?.userDto?.email)
  const [rolesList, setRolesList] = useState<RoleSelection[]>(userRoles?.rolesList!)

  // toast parameters
  const [toastHeader, setToastHeader] = useState(<div/>)
  const [toastBody, setToastBody] = useState(<div/>)
  const [toastDelay, setToastDelay] = useState(2000)
  const [toastShow, setToastShow] = useState(false)

  const handleCloseToast = () => {
    setToastShow(false)
  }

  const handleRoleSelection = (roleName: string) => {
    setRolesList(prev => {
      return prev?.map((role) => {
        if (role.roleName === roleName) {
          role = {...role, selected: !role.selected}
        }
        return role
      })
    })
  }

  const handleSubmit = () => {
    if (!userRoles?.userDto) {
      return
    }

    const newUserRoles: RolesViewModel = {
      userDto: userRoles?.userDto,
      rolesList: rolesList ?? [],
    }

    updateRoles(newUserRoles)
    setToastHeader(<div>Roles Updated</div>)
    setToastBody(<div>User roles have been updated successfully for {userRoles?.userDto.lastName}</div>)
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
                <h2 className={'text-white py-2'}>Manage User Role</h2>
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
              <span>Role Assignments</span>
              {rolesList && rolesList.map((role, index) => (
                <FormCheck key={index}>
                  <FormCheck.Label>{role.roleName}</FormCheck.Label>
                  <FormCheck.Input
                    type={'checkbox'}
                    checked={role.selected}
                    onChange={() => {handleRoleSelection(role.roleName)}}
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

export default ManageUserRole
