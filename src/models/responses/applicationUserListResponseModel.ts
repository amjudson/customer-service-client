import {BaseResponseModel} from '@/models/responses'
import {ApplicationUserModel} from '@/models'

export default interface ApplicationUserListResponseModel extends BaseResponseModel {
	data: {
		result: ApplicationUserModel[];
	}
}
