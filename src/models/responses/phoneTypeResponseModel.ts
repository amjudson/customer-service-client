import {BaseResponseModel} from '@/models/responses'
import {PhoneTypeModel} from '@/models'

export default interface PhoneTypeResponseModel extends BaseResponseModel {
	data: {
		result: PhoneTypeModel;
	}
}