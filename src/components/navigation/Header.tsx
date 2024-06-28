'use client'
import React from 'react'
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <Navbar sticky={'top'} bg={'dark'} variant={'dark'}>
        <Container className={'ms-1'}>
          <Link legacyBehavior href={'/'}>
            <Navbar.Brand className={styles.headerBrand}>Customer Relationship Management System</Navbar.Brand>
          </Link>
          <Nav>
            <Link legacyBehavior href={'/client'} passHref>
              <Nav.Link>Client</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
