'use client'
import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'react-bootstrap'
import {useGetUserListQuery} from '@/redux/api'
import {VortexSpinner} from '@/components/common'
import {ApplicationUserListResponseModel} from '@/models/responses'
import {useRouter} from 'next/navigation'

const UserPage = () => {
  const route = useRouter()
  const {
    data,
    isLoading,
  } = useGetUserListQuery<ApplicationUserListResponseModel>(null)

  if (isLoading) {
    return <VortexSpinner/>
  }

  return (
    <Card className={'shadow mt-4'} bg={'success'} text={'white'}>
      <CardHeader className={'ml-0 py-3'}>
        <Row>
          <Col className={'col-12 text-center'}>
            <h2>User List</h2>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className={'p-4'}>
        {data && data.result.length > 0 ? (
          <Table striped bordered>
            <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Roles</th>
              <th>Claims</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {data.result.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.roles ? user.roles.join(',') : ''}</td>
                <td>{user.userClaims ? user.userClaims.join(',') : ''}</td>
                <td style={{width: '350px'}}>
                  <Row>
                    <Col className={'col-3 px-1'}>
                      <Button
                        className={'w-100'}
                        variant={'primary'}
                        onClick={() => route.push(`/users/manage/roles/${user.id}`)}
                      >
                        Roles
                      </Button>
                    </Col>
                    <Col className={'col-3 px-1'}>
                      <Button
                        className={'w-100'}
                        variant={'secondary'}
                        onClick={() => route.push(`/users/manage/claims/${user.id}`)}
                      >
                        Claim
                      </Button>
                    </Col>
                    {user.lockoutEnd === null || user.lockoutEnd.toLocaleString() < Date.now().toLocaleString() ? (
                      <Col className={'col-3 px-1'}>
                        <Button
                          className={'w-100'}
                          variant={'success'}
                        >
                          Lock
                        </Button>
                      </Col>
                    ) : (
                      <Col className={'col-3 px-1'}>
                        <Button
                          className={'w-100'}
                          variant={'warning'}
                        >
                          Unlock
                        </Button>
                      </Col>
                    )}
                      <Col className={'col-3 px-1'}>
                        <Button
                          className={'w-100'}
                          variant={'danger'}
                        >
                          Delete
                        </Button>
                      </Col>
                  </Row>
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
        ) : null}
      </CardBody>
    </Card>
  )
}

export default UserPage
