import {BaseResponseModel} from '@/models/responses'
import {PersonPhoneLookupModel} from '@/models'

export default interface PersonPhoneLookupResponseModel extends BaseResponseModel {
	data: {
		result: PersonPhoneLookupModel;
	}
}