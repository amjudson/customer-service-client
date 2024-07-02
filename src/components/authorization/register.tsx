import React, {useState} from 'react'
import {VortexSpinner} from '@/components/common'
import RegisterUserModel from '@/models/registerUserModel'
import {useRegisterUserMutation} from '@/redux/api/authApi'
import {RegisterUserResponseModel} from '@/models/responses'
import {inputHelper, toastNotify} from '@/helpers'
import {Roles} from '@/enums'

const Register = () => {
  const [registerUser] = useRegisterUserMutation()
  const [loading, setLoading] = useState(false)
  const [userInput, setUserInput] = useState<RegisterUserModel>({
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    role: '',
  })

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempUserInput = inputHelper(e, userInput)
    setUserInput(tempUserInput)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const response: RegisterUserResponseModel = await registerUser({
      userName: userInput.userName,
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      password: userInput.password,
      role: userInput.role,
    })

    if (response.data) {
      toastNotify('Registration successfully! Please login to continue')
      // navigate('/login')
    } else if (response.error) {
      toastNotify(response.errorMessages ? response.errorMessages[0] : 'UNKNOWN', 'error')
    }

    setLoading(false)
  }

  return (
    <div>
      {loading && <VortexSpinner />}
      <form method={'post'} onSubmit={handleSubmit}>
        <h1 className={'mt-5'}>Register</h1>
        <div className={'mt-5'}>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <input
              type={'text'}
              className={'form-control'}
              placeholder={'Enter Email'}
              value={userInput.userName}
              name={'userName'}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <input
              type={'text'}
              className={'form-control'}
              placeholder={'First Name'}
              value={userInput.firstName}
              name={'firstName'}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <input
              type={'text'}
              className={'form-control'}
              placeholder={'Last Name'}
              value={userInput.lastName}
              name={'lastName'}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <input
              type={'password'}
              className={'form-control'}
              placeholder={'Enter Password'}
              value={userInput.password}
              name={'password'}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <select
              className={'form-control form-select'}
              value={userInput.role}
              name={'role'}
              onChange={handleUserInput}
              required
            >
              <option value=''>--Select Role--</option>
              <option value={`${Roles.CUSTOMER}`}>Customer</option>
              <option value={`${Roles.CLIENT_ADMIN}`}>Client Admin</option>
              <option value={`${Roles.ADMIN}`}>Admin</option>
            </select>
          </div>
        </div>
        <div className={'mt-5'}>
          <button
            type={'submit'}
            className={'btn btn-success'}
            disabled={loading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
