import {BaseResponseModel} from '@/models/responses'
import {ApplicationUserModel} from '@/models'

export default interface ApplicationUserResponseModel extends BaseResponseModel {
	data: {
		result: ApplicationUserModel;
	}
}
