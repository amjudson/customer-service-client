'use client'
import React, {useState} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'react-bootstrap'
import {useDeleteUserMutation, useGetUserListQuery, useLockUnlockUserMutation} from '@/redux/api'
import {ModalBox, VortexSpinner} from '@/components/common'
import {ApplicationUserListResponseModel} from '@/models/responses'
import {useRouter} from 'next/navigation'

const UserPage = () => {
  const [lockUnlockUser] = useLockUnlockUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  const route = useRouter()
  const {
    data,
    isLoading,
  } = useGetUserListQuery<ApplicationUserListResponseModel>(null)

  const [selectedUserId, setSelectedUserId] = useState<string>('')
  const [selectedUserEmail, setSelectedUserEmail] = useState<string>('')

  // modal props
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(<span>DELETE</span>)
  const [modalBody, setModalBody] = useState(<div/>)
  const [modalText, setModalText] = useState(<div/>)

  const handleLockUnlock = (userId: string) => {
    console.log(userId)
    lockUnlockUser(userId)
  }

  const handleDeleteNo = () => {
    setModalShow(false)
  };

  const handleDeleteYes = (userId: string) => {
    deleteUser(userId)
    setModalShow(false)
  }

  const handleDelete = (userId: string, email: string) => {
    setSelectedUserId(userId)
    setSelectedUserEmail(email)
    setModalTitle(<div>Delete user <span className={'text-warning'}>{email}</span></div>)
    setModalBody(<div>Are you sure you want to delete this user?</div>)
    setModalText(<div>This action cannot be undone.</div>)
    setModalShow(true)
  }

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
                    <Col className={'col-3 px-1'}>
                      <Button
                        className={'w-100'}
                        variant={user.lockoutEnd === null || user.lockoutEnd.toLocaleString() < Date.now().toLocaleString()
                          ? 'success'
                          : 'warning'}
                        onClick={() => handleLockUnlock(user.id)}
                      >
                        {user.lockoutEnd === null || user.lockoutEnd.toLocaleString() < Date.now().toLocaleString()
                        ? 'Lock' : 'Unlock'}
                      </Button>
                    </Col>
                    <Col className={'col-3 px-1'}>
                      <Button
                        className={'w-100'}
                        variant={'danger'}
                        onClick={() => handleDelete(user.id, user.email)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                  <ModalBox
                    titleElement={modalTitle}
                    bodyElement={modalBody}
                    show={modalShow}
                    bodyTextElement={modalText}
                    handleClose={() => setModalShow(false)}
                    handleYes={() => handleDeleteYes(selectedUserId)}
                    handleNo={handleDeleteNo}
                  />
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
