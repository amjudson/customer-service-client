import {BaseResponseModel} from '@/models/responses'
import {ClientPhoneLookupModel} from '@/models'

export default interface ClientPhoneLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientPhoneLookupModel;
	}
}