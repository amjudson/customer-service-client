import React from 'react'
import {ClientModel} from '@/models/clientModel'
import {Col, Container, Row} from 'react-bootstrap'

export interface ClientListProps {
  clientList: ClientModel[]
}

const ClientList = ({clientList}: ClientListProps) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className={'col-3'}>
            Client Name
          </Col>
        </Row>
        {clientList && clientList.map((client: ClientModel) => (
          <Row key={client.clientId}>
            <Col className={'col-3'}>
              {client.clientName}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default ClientList
