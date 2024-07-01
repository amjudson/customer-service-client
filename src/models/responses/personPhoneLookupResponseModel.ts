import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PersonPhoneLookupModel} from '@/models/personPhoneLookupModel'

export interface PersonPhoneLookupResponseModel extends BaseResponseModel {
	data: {
		result: PersonPhoneLookupModel;
	}
}