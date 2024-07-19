import React from 'react'
import {ClientDtoModel} from '@/models'
import {Table} from 'react-bootstrap'

interface ClientDetailProps {
  clientDto: ClientDtoModel
}

const ClientDetail = ({clientDto}: ClientDetailProps) => {
  return (
    <div>
      <h3 className={'m-2 text-success'}>Client Detail</h3>
      <h4 className={'text-info'}>{clientDto.client.clientName}</h4>
      <Table striped border={1} bordered variant={'dark'}>
        <thead>
        <tr>
          <th>Address</th>
          <th>Address (optional)</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
        </tr>
        </thead>
        <tbody>
        {clientDto.addresses && clientDto.addresses.map((address, index) => (
          <tr key={index}>
            <td>{address.addressLine1}</td>
            <td>{address.addressLine2}</td>
            <td>{address.city}</td>
            <td>{address.stateId}</td>
            <td>{address.zip}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      <Table striped border={1} bordered variant={'dark'}>
        <thead>
        <tr>
          <th>Phone Number</th>
          <th>Extension</th>
        </tr>
        </thead>
        <tbody>
        {clientDto.phones && clientDto.phones.map((phone, index) => (
          <tr key={index}>
            <td>{phone.phoneNumber}</td>
            <td>{phone.extension}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      <Table striped border={1} bordered variant={'dark'}>
        <thead>
        <tr>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {clientDto.emails && clientDto.emails.map((email, index) => (
          <tr key={index}>
            <td>{email.emailAddress}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientDetail
