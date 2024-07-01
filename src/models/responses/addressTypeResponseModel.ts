import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AddressTypeModel} from '@/models/addressTypeModel'

export interface AddressTypeResponseModel extends BaseResponseModel {
	data: {
		result: AddressTypeModel;
	}
}