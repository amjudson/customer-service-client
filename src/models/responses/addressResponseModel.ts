import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AddressModel} from '@/models/addressModel'

export interface AddressResponseModel extends BaseResponseModel {
	result: AddressModel;
}
