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

const UserPage = () => {
  const {
    data,
    isLoading,
  } = useGetUserListQuery<ApplicationUserListResponseModel>(null)

  if (isLoading) {
    return <VortexSpinner />
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
                  <td>{user.claims ? user.claims.join(',') : ''}</td>
                  <td style={{width: '330px'}}>
                    <Row>
                      <Col className={'col-3'}>
                        <Button
                          variant={'primary'}
                        >
                          Roles
                        </Button>
                      </Col>
                      <Col className={'col-3'}>
                        <Button
                          variant={'secondary'}
                        >
                          Claim
                        </Button>
                      </Col>
                      <Col className={'col-3'}>
                        <Button
                          variant={'success'}
                        >
                          Lock
                        </Button>
                      </Col>
                      <Col className={'col-3'}>
                        <Button
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
