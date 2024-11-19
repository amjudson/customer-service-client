import React from 'react'
import {ClientDtoModel, StateModel} from '@/models'

interface ClientDetailProps {
  clientDto: ClientDtoModel
  statesDto: StateModel[]
}

const ClientDetail = ({clientDto, statesDto}: ClientDetailProps) => {
  const getStateName = (stateId: number) => {
    const state = statesDto.find((state) => state.stateId === stateId)
    return state ? state.name : 'Not Found'
  }

  return (
    <div>
      <h3 className={'m-2 text-success'}>Client Detail for
        <span style={{fontSize: 30}} className={'text-info'}> {clientDto.client.clientName}</span>
      </h3>
      <div>
        <table className={'table-inner mt-5'}>
          <thead>
          <tr>
            <th className={'ps-1'}>Address</th>
            <th>Address (optional)</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
          </thead>
          <tbody>
          {clientDto.addresses && clientDto.addresses.map((address, index) => (
            <tr key={index}>
              <td className={'ps-3'}>{address.addressLine1}</td>
              <td>{address.addressLine2}</td>
              <td>{address.city}</td>
              <td>{getStateName(address.stateId)}</td>
              <td>{address.zip}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <table className={'table-inner mt-3'}>
          <thead>
          <tr>
            <th>Phone Number</th>
            <th>Extension</th>
          </tr>
          </thead>
          <tbody>
          {clientDto.phones && clientDto.phones.map((phone, index) => (
            <tr key={index}>
              <td className={'ps-3'}>{phone.phoneNumber}</td>
              <td>{phone.extension}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <table className={'table-inner mt-3'}>
          <thead>
          <tr>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {clientDto.emails && clientDto.emails.map((email, index) => (
            <tr key={index}>
              <td className={'ps-3'}>{email.emailAddress}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClientDetail
