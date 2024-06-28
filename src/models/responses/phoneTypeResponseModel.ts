import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PhoneTypeModel} from '@/models/phoneTypeModel'

export interface PhoneTypeResponseModel extends BaseResponseModel {
	result: PhoneTypeModel;
}
