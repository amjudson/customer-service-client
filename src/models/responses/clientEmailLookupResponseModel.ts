import {BaseResponseModel} from '@/models/responses'
import {ClientEmailLookupModel} from '@/models'

export default interface ClientEmailLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientEmailLookupModel;
	}
}