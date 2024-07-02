import {BaseResponseModel} from '@/models/responses'
import {PhoneModel} from '@/models'

export default interface PhoneResponseModel extends BaseResponseModel {
	data: {
		result: PhoneModel;
	}
}