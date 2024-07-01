import React from 'react'
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap'
import Link from 'next/link'
import styles from '@/components/navigation/header.module.scss'

const linkStyle = {
  cursor: 'pointer',
}

const Header = () => {
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
      </Navbar>
    </>
  )
}

export default Header
