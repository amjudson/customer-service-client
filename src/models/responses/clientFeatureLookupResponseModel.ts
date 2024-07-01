import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientFeatureLookupModel} from '@/models/clientFeatureLookupModel'

export interface ClientFeatureLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientFeatureLookupModel;
	}
}