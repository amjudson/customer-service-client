import {BaseResponseModel} from '@/models/responses'
import {AspNetUserModel} from '@/models'

export default interface AspNetUserResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserModel;
	}
}