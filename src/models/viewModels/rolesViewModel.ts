import {ApplicationUserModel} from '@/models'
import {RoleSelection} from '@/models'

export default interface RolesViewModel {
  user: ApplicationUserModel
  rolesList: RoleSelection[]
}
