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

const linkStyle = {
  cursor: 'pointer',
}

const Header = () => {
  const userData = useAppSelector(state => state.userAuthSlice)

  return (
    <>
      <Navbar sticky={'top'} bg={'dark'} variant={'dark'}>
        <Container className={'ms-1'}>
          <Link className={styles.headerBrand} legacyBehavior href={'/'} passHref>
            <Navbar.Brand className={'text-warning'}>Customer Relationship Manager</Navbar.Brand>
          </Link>
          <Nav className={'me-auto'}>
            <Link style={linkStyle} legacyBehavior href={'/client'} passHref>
              <Nav.Item>
                <span className={'text-info'}>Client</span>
              </Nav.Item>
            </Link>
          </Nav>
        </Container>
        <Container className={'justify-content-end'}>
          <Row className={'me-3'}>
            <Col className={'col-5'}>
              <Button
                variant={'primary'}
              >
                Login
              </Button>
            </Col>
            <Col className={'col-7'}>
              <Button
                variant={'secondary'}
              >
                Register
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
