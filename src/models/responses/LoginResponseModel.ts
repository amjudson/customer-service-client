import {BaseResponseModel} from '@/models/responses'

export default interface LoginResponseModel extends BaseResponseModel {
  data?: {
    result: {
      email?: string
      token?: string
    }
  }
}
