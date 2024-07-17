'use client'
import React from 'react'
import {ClientModel} from '@/models'
import {Container, Table} from 'react-bootstrap'
import Link from 'next/link'

export interface ClientListProps {
  clientList: ClientModel[]
}

const ClientList = ({clientList}: ClientListProps) => {
  return (
    <div>
      <Container>
        <Table variant={'dark'} striped border={2}>
          <thead>
            <tr className={'border-2 border-light-subtle'}>
              <th>Client Name</th>
            </tr>
          </thead>
          <tbody>
          {clientList && clientList.map((client: ClientModel, index:number) => (
            <tr className={'border-1 border-light-subtle'} key={index}>
              <td>
                <Link legacyBehavior href={`/client/${client.clientId}`}>{client.clientName}</Link>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default ClientList
