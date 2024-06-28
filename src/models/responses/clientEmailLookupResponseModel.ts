import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientEmailLookupModel} from '@/models/clientEmailLookupModel'

export interface ClientEmailLookupResponseModel extends BaseResponseModel {
	result: ClientEmailLookupModel;
}
