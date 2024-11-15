import React, {Fragment} from 'react'
import {InputType, Size} from '@/enums'

interface TextControlProps {
  value: string | number
  label: string
  name: string
  id: string
  size?: Size
  inputType?: InputType
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const TextControl = ({
                       value,
                       onChange,
                       label,
                       size = Size.X_SMALL,
                       inputType = InputType.TEXT,
                       name,
                       id}: TextControlProps) => {

  return (
    <Fragment>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`${size}-input`}
        type={inputType}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  )
}

export default TextControl
