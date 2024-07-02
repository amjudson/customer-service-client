import React, {Fragment} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Col, Form, Row} from 'react-bootstrap'

export interface DatePickerComponentProps {
  name?: string
  date: Date
  showMonthDropdown?: boolean
  showYearDropdown?: boolean
  isRow?: boolean
  isCol?: boolean
  id?: string

  onChange: (date: Date | null) => void
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
                                                                   name,
                                                                   date,
                                                                   onChange,
                                                                   showYearDropdown,
                                                                   showMonthDropdown,
                                                                   isCol = true,
                                                                   isRow = true,
  id,
                                                                 }) => {

  const internalId = id
    ? id
    : name
      ? name.replace(' ', '-').toLowerCase()
      : 'date-picker'
  const datePicker = (
    <DatePicker
      className={'short'}
      id={internalId}
      showMonthDropdown={showMonthDropdown}
      showYearDropdown={showYearDropdown}
      selected={date}
      onChange={onChange}
    />
  )

  let body = datePicker

  if (isCol) {
    body = (
      <Col className={'col-3'}>
        {datePicker}
      </Col>
    )
  }

  if (name) {
    body = (
      <Fragment>
        <Col className={'col-2 text-end mb-1'}>
          <Form.Label htmlFor={'start-date'}>{name}</Form.Label>
        </Col>
        <Col className={'col-3'}>
          {datePicker}
        </Col>
      </Fragment>
    )
  }

  return isRow ? (
        <Row>
          {body}
        </Row>
      )
      : (
        <Fragment>
          {body}
        </Fragment>
      )
}

export default DatePickerComponent
