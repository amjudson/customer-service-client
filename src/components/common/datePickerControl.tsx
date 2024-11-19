'use client'
import React, {Fragment} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Size} from '@/enums'

export interface DatePickerComponentProps {
  label?: string
  name?: string
  date: Date
  showMonthDropdown?: boolean
  showYearDropdown?: boolean
  id?: string

  onChange: (date: Date | null) => void
}

const DatePickerControl = ({
  name,
  label,
  date,
  onChange,
  showYearDropdown,
  showMonthDropdown,
  id,
                         }: DatePickerComponentProps) => {
  const internalId = id
    ? id
    : name
      ? name.replace(' ', '-').toLowerCase()
      : 'date-picker'

  const datePicker = (
    <DatePicker
      className={`${Size.X_SMALL}-input`}
      id={internalId}
      showMonthDropdown={showMonthDropdown}
      showYearDropdown={showYearDropdown}
      selected={date}
      onChange={onChange}
      popperPlacement={'bottom-start'}
    />
  )

  return (
    <Fragment>
      <label htmlFor={internalId}>{label}</label>
      {datePicker}
    </Fragment>
  )
}

export default DatePickerControl
