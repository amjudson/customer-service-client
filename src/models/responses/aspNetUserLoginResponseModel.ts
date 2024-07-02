import {BaseResponseModel} from '@/models/responses'
import {AspNetUserLoginModel} from '@/models'

export default interface AspNetUserLoginResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserLoginModel;
	}
}