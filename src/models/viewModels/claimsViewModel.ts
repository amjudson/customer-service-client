import {ApplicationUserModel, ClaimSelection} from '@/models'

export default interface ClaimsViewModel {
  userDto: ApplicationUserModel
  claimsList: ClaimSelection[]
}
