import React from 'react'
import {ClientDtoModel} from '@/models'

interface ClientDetailProps {
  clientDto: ClientDtoModel
}

const ClientDetail = ({clientDto}: ClientDetailProps) => {
  return (
    <div>
      <h3 className={'m-2 text-success'}>Client Detail</h3>
      <h4 className={'text-info'}>{clientDto.client.clientName}</h4>
    </div>
  )
}

export default ClientDetail
