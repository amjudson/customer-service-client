import {BaseResponseModel} from '@/models/responses'
import {RolesViewModel} from '@/models/viewModels'

export default interface UserRolesResponseModel extends BaseResponseModel {
  data?: {
    result: RolesViewModel
  }
}
