import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PersonAddressLookupModel} from '@/models/personAddressLookupModel'

export interface PersonAddressLookupResponseModel extends BaseResponseModel {
	result: PersonAddressLookupModel;
}
