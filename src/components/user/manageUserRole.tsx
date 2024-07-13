'use client'
import React, {useState} from 'react'
import {Card, CardBody, CardHeader, Form, FormCheck, FormGroup} from 'react-bootstrap'
import {RolesViewModel} from '@/models/viewModels'
import {RoleSelection} from '@/models'

export interface ManageUserRoleProps {
  userRoles?: RolesViewModel | undefined
}

const ManageUserRole = ({userRoles}: ManageUserRoleProps) => {
  console.log(userRoles)
  const [firstName, setFirstName] = useState<string | undefined>(userRoles?.user.firstName)
  const [lastName, setLastName] = useState<string | undefined>(userRoles?.user.lastName)
  const [email, setEmail] = useState<string | undefined>(userRoles?.user.email)
  const [rolesList, setRolesList] = useState<RoleSelection[] | undefined>(userRoles?.rolesList)
  return (
    <div>
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
                  <FormCheck.Input type={'checkbox'} checked={role.selected}/>
                </FormCheck>
              ))}
            </FormGroup>
          </CardBody>
        </Card>
      </Form>
    </div>
  )
}

export default ManageUserRole
