import React, {useState} from 'react'
import {PersonDtoModel, StateModel} from '@/models'
import {inputHelper} from '@/helpers'
import TextControl from '@/components/common/textControl'

interface PersonDetailProps {
  personDto: PersonDtoModel
  statesDto: StateModel[]
}

const PersonDetail = ({personDto, statesDto}:PersonDetailProps) => {
  const getStateName = (stateId: number) => {
    const state = statesDto.find((state) => state.stateId === stateId)
    return state ? state.name : 'Not Found'
  }

  const [userInput, setUserInput] = useState<PersonDtoModel>({
    person: {
      personId: personDto.person.personId || 0,
      firstName: personDto.person.firstName || '',
      lastName: personDto.person.lastName || '',
      personTypeId: personDto.person.personTypeId || 0,
      raceId: personDto.person.raceId || 0,
      alias: personDto.person.alias || '',
      clientId: personDto.person.clientId || '',
      dateOfBirth: personDto.person.dateOfBirth || '',
      genderId: personDto.person.genderId || 0,
      middleName: personDto.person.middleName || '',
      prefix: personDto.person.prefix || '',
      suffix: personDto.person.suffix || '',
    },
    addresses: personDto.addresses || [],
    phones: personDto.phones || [],
    emails: personDto.emails || [],
  })

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempUserInput = inputHelper(e, userInput)
    setUserInput(tempUserInput)
  }

  return (
    <div>
      <h3 className={'m-2 text-success'}>Detail for
        <span style={{fontSize: 30}} className={'text-info'}>
          &nbsp;{personDto.person.firstName} {personDto.person.lastName}
        </span>
      </h3>

      <form className={'form-format'}>
        <TextControl
          value={personDto.person.firstName}
          label={'First Name'}
          name={'firstName'}
          id={'firstName'}
          onChange={handleUserInput}
        />
        <TextControl
          value={personDto.person.lastName}
          label={'Last Name'}
          name={'lastName'}
          id={'lastName'}
          onChange={handleUserInput}
        />
        <TextControl
          value={personDto.person.middleName}
          label={'Middle Name'}
          name={'middleName'}
          id={'middleName'}
          onChange={handleUserInput}
        />
      </form>
      <div>
        <table className={'table-inner min-table mt-5'}>
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
          {personDto.addresses && personDto.addresses.map((address, index) => (
            <tr key={index}>
              <td className={'ps-2'}>{address.addressLine1}</td>
              <td>{address.addressLine2}</td>
              <td>{address.city}</td>
              <td>{getStateName(address.stateId)}</td>
              <td>{address.zip}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <table className={'table-inner min-table'}>
          <thead>
          <tr>
            <th>Phone Number</th>
            <th>Extension</th>
          </tr>
          </thead>
          <tbody>
          {personDto.phones && personDto.phones.map((phone, index) => (
            <tr key={index}>
              <td className={'ps-3'}>{phone.phoneNumber}</td>
              <td>{phone.extension}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <table className={'table-inner min-table'}>
          <thead>
          <tr>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {personDto.emails && personDto.emails.map((email, index) => (
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

export default PersonDetail
