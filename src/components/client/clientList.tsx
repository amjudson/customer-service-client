'use client'
import React from 'react'
import {ClientModel} from '@/models'
import Link from 'next/link'

export interface ClientListProps {
  clientList: ClientModel[]
}

const ClientList = ({clientList}: ClientListProps) => {
  return (
    <div>
      <table className={'table-inner min-table'}>
        <thead>
        <tr>
          <th>Client Name</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {clientList && clientList.map((client: ClientModel, index: number) => (
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
    </div>
  )
}

export default ClientList
