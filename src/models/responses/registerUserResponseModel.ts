import {BaseResponseModel} from '@/models/responses'

export default interface RegisterUserResponseModel extends BaseResponseModel{
  data?: {
    userId?: string | null | undefined
  }
}
