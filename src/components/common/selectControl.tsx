import React, {Fragment} from 'react'
import Select from 'react-select'
import {Col} from 'react-bootstrap'
import {SelectOption} from '@/data'
import {baseStylesConfig} from '../configuration/selectStyles'
import {Size} from '@/enums'

interface SelectControlProps {
  name: string
  label: string
  value: SelectOption
  selectOptions: SelectOption[]
  id?: string
  size?: Size
  isNumber?: boolean
  defaultOption?: SelectOption
  isDisplayed?: boolean
  error?: string

  onChange(newValue: unknown): void
}

const SelectControl: React.FC<SelectControlProps> = ({
                                                       name,
                                                       label,
                                                       selectOptions,
                                                       value,
                                                       id,
                                                       onChange,
                                                       defaultOption,
                                                       isDisplayed = false,
                                                       error = '',
  size = Size.X_SMALL,
                                                     }) => {

  const controlId = id
    ? id
    : name.toLowerCase().replace(' ', '-').replace(':', '')

  if (defaultOption) {
    const withDefault: SelectOption[] = []
    withDefault.push(defaultOption)
    withDefault.push(...selectOptions)

    selectOptions = withDefault
  }

  return (
    <Fragment>
      <label htmlFor={controlId}>{label}</label>
      <Select
        className={`${size}-input`}
        isDisabled={isDisplayed}
        classNamePrefix={'react-select-box'}
        onChange={onChange}
        value={value}
        id={controlId}
        styles={baseStylesConfig}
        options={selectOptions}
        instanceId={`reactSelect${controlId}`}
      />
      {error &&
        <Col className={`error-message col-4`}>{error}</Col>
      }
    </Fragment>
  )
}

export default SelectControl
