import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PersonEmailLookupModel} from '@/models/personEmailLookupModel'

export interface PersonEmailLookupResponseModel extends BaseResponseModel {
	result: PersonEmailLookupModel;
}
