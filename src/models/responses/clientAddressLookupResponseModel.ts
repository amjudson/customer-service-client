import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientAddressLookupModel} from '@/models/clientAddressLookupModel'

export interface ClientAddressLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientAddressLookupModel;
	}
}