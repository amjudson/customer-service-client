import {BaseResponseModel} from '@/models/responses'
import {ClaimsViewModel} from '@/models/viewModels'

export default interface UserClaimsResponseModel extends BaseResponseModel {
  data?: {
    result: ClaimsViewModel
  }
}
