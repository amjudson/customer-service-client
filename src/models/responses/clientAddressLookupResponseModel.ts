import {BaseResponseModel} from '@/models/responses'
import {ClientAddressLookupModel} from '@/models'

export default interface ClientAddressLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientAddressLookupModel;
	}
}