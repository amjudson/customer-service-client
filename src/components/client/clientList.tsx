import React from 'react'
import {ClientModel} from '@/models'
import {Col, Container, Row} from 'react-bootstrap'

export interface ClientListProps {
  clientList: ClientModel[]
}

const ClientList = ({clientList}: ClientListProps) => {
  return (
    <div>
      <Container>
        <Row className={'border-top border-end text-warning'}>
          <Col className={'col-3 border-end border-start'}>
            Client Name
          </Col>
        </Row>
        {clientList && clientList.map((client: ClientModel, index:number) => (
          <Row className={`border-top border-end ${
            index >= clientList.length - 1 ? 'border-bottom' : ''}`}
               key={client.clientId}>
            <Col className={'col-3 border-end border-start'}>
              {client.clientName}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default ClientList
