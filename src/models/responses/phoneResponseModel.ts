import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PhoneModel} from '@/models/phoneModel'

export interface PhoneResponseModel extends BaseResponseModel {
	result: PhoneModel;
}
