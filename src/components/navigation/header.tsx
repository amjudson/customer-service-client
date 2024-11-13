import React from 'react'
import {
  Button, Col,
  Container,
  Nav,
  Navbar, Row,
} from 'react-bootstrap'
import Link from 'next/link'
import styles from '@/components/navigation/header.module.scss'
import {useAppSelector} from '@/redux/hooks'
import {useRouter} from 'next/navigation'
import {useAuth} from '@/components/authorization'

const Header = () => {
  const router = useRouter()
  const auth = useAuth()
  const user = useAppSelector(state => state.userAuthSlice)

  const handleLogout = () => {
    auth.clearUser()
    router.push('/')
  }

  return (
    <>
      <Navbar sticky={'top'} bg={'dark'} variant={'dark'}>
        <Container className={'ms-1'}>
          <Link className={styles.headerBrand} legacyBehavior href={'/'} passHref>
            <Navbar.Brand className={'text-warning'}>Customer Relationship Manager</Navbar.Brand>
          </Link>
          {user?.authenticated && (
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
          {user?.authenticated && (
            <Row className={'me-1'}>
              <Col className={'col-auto text-center align-content-center'} >
                Welcome, {user.firstName} {user.lastName}
              </Col>
              <Col>
                <Button
                  variant={'secondary'}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Col>
            </Row>
          )}
          {!user?.authenticated && (
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
