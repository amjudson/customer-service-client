import React from 'react'
import {
  Button, Col,
  Container,
  Nav,
  Navbar, Row,
} from 'react-bootstrap'
import Link from 'next/link'
import styles from '@/components/navigation/header.module.scss'
// import '@/components/navigation/header.module.scss'
import {useAppDispatch, useAppSelector} from '@/redux/hooks'
import {useRouter} from 'next/navigation'
import {setUserLogout} from '@/redux/userAuthSlice'

const Header = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.userAuthSlice)

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(setUserLogout())
    console.log('Logout:', userData)
    router.push('/')
  }

  return (
    <>
      <Navbar sticky={'top'} bg={'dark'} variant={'dark'}>
        <Container className={'ms-1'}>
          <Link className={styles.headerBrand} legacyBehavior href={'/'} passHref>
            <Navbar.Brand className={'text-warning'}>Customer Relationship Manager</Navbar.Brand>
          </Link>
          {userData.id && (
            <Nav className={'me-auto'}>
              <Link legacyBehavior href={'/users'} passHref>
                <Nav.Item className={'me-2'}>
                  <span className={'text-info add-pointer'}>User</span>
                </Nav.Item>
              </Link>
              <Link legacyBehavior href={'/client'} passHref>
                <Nav.Item>
                  <span className={'text-info add-pointer'}>Client</span>
                </Nav.Item>
              </Link>
            </Nav>
          )}
        </Container>
        <Container className={'justify-content-end'}>
          {userData.id && (
            <Row className={'me-1'}>
              <Col className={'col-6'}>
                Welcome, {userData.firstName} {userData.lastName}
              </Col>
              <Col className={'col-6'}>
                <Button
                  variant={'secondary'}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Col>
            </Row>
          )}
          {!userData.id && (
            <Row className={'me-3'}>
              <Col className={'col-5'}>
                <Button
                  variant={'primary'}
                  onClick={() => router.push('/login')}
                >
                  Login
                </Button>
              </Col>
              <Col className={'col-7'}>
                <Button
                  variant={'secondary'}
                  onClick={() => router.push('/register')}
                >
                  Register
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default Header
