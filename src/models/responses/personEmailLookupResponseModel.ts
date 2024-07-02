import {BaseResponseModel} from '@/models/responses'
import {PersonEmailLookupModel} from '@/models'

export default interface PersonEmailLookupResponseModel extends BaseResponseModel {
	data: {
		result: PersonEmailLookupModel;
	}
}