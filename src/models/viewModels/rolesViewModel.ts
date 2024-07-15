import {ApplicationUserModel} from '@/models'
import {RoleSelection} from '@/models'

export default interface RolesViewModel {
  userDto: ApplicationUserModel
  rolesList: RoleSelection[]
}
