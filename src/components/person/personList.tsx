'use client'
import React from 'react'
import {PersonModel} from '@/models/index'
import {PersonTypeModel} from '@/models'
import Link from 'next/link'

interface PersonListProps {
  personList: PersonModel[]
  personTypes: PersonTypeModel[]
}

const PersonList = ({personList, personTypes}: PersonListProps) => {
  const getPersonType = (personTypeId: number) => {
    return personTypes?.find((pt) => pt.personTypeId === personTypeId)
  }

  console.log(personList)
  return (
    <div>
      <h2>Person List</h2>
      <table className={'table-inner min-table'}>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Person Type</th>
        </tr>
        </thead>
        <tbody>
        {personList && personList.map((person: PersonModel, index: number) => (
          <tr className={'border-1 '} key={index}>
            <td>
              <Link legacyBehavior href={`/person/${person.personId}`}>{person.firstName + ' ' + person.lastName}</Link>
            </td>
            <td>
              {getPersonType(person.personTypeId)?.name}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default PersonList
