'use client'
import React from 'react'
import {ClientModel} from '@/models'
import {Container} from 'react-bootstrap'
import Link from 'next/link'

export interface ClientListProps {
  clientList: ClientModel[]
}

const ClientList = ({clientList}: ClientListProps) => {
  return (
    <div>
      <Container>
        <table className={'table-inner'}>
          <thead>
          <tr className={''}>
            <th>Client Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {clientList && clientList.map((client: ClientModel, index:number) => (
            <tr className={'border-1 '} key={index}>
              <td>
                <Link legacyBehavior href={`/client/${client.clientId}`}>{client.clientName}</Link>
              </td>
              <td>
                Edit
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default ClientList
