import {BaseResponseModel} from '@/models/responses'
import {PersonAddressLookupModel} from '@/models'

export default interface PersonAddressLookupResponseModel extends BaseResponseModel {
	data: {
		result: PersonAddressLookupModel;
	}
}