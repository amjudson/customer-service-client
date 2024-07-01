import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientPhoneLookupModel} from '@/models/clientPhoneLookupModel'

export interface ClientPhoneLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientPhoneLookupModel;
	}
}