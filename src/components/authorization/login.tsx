import React, {useState} from 'react'
import {
  LoginUserModel,
  UserModel,
} from '@/models'
import {inputHelper} from '@/helpers'
import {useLoginUserMutation} from '@/redux/api'
import {jwtDecode} from 'jwt-decode'
import {useAppDispatch} from '@/redux'
import {setLoggedInUser} from '@/redux'
import {useRouter} from 'next/navigation'
import {VortexSpinner} from '@/components/common'
import LoginResponseModel from '@/models/responses/LoginResponseModel'

const Login = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [loginUser] = useLoginUserMutation()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [userInput, setUserInput] = useState<LoginUserModel>({
    userName: '',
    password: '',
  })

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempUserInput = inputHelper(e, userInput)
    setUserInput(tempUserInput)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const response: LoginResponseModel = await loginUser({
      userName: userInput.userName,
      password: userInput.password,
    })

    if (response.data) {
      const {token} = response.data.result
      const {firstName, lastName, id, email, role}: UserModel = jwtDecode(token ?? '')
      localStorage.setItem('token', token ?? '')
      dispatch(setLoggedInUser({firstName, lastName, id, email, role}))
      router.push('/')
    } else if (response.error) {
      setError(response.errorMessages ? response.errorMessages[0] : 'An error occurred')
    }

    console.log('response results', response)
    setLoading(false)
  }

  return (
    <div className={'container text-center'}>
      {loading && <VortexSpinner />}
      <form method={'post'} onSubmit={handleSubmit}>
        <h1 className={'mt-5'}>Login</h1>
        <div className={'mt-5'}>
          <div className={'col-sm-6 offset-sm-3 col-xs-12 mt-4'}>
            <input
              type={'text'}
              className={'form-control'}
              placeholder={'Enter Username'}
              value={userInput.userName}
              name={'userName'}
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
        </div>

        <div className={'mt-2'}>
          {error && <p className={'text-danger'}>{error}</p>}
          <button
            type={'submit'}
            className={'btn btn-success'}
            style={{width: '200px'}}
          >
            Login
          </button>
        </div>
      </form>
    </div>)
}

export default Login
