import {BaseResponseModel} from '@/models/responses'
import {ClientFeatureLookupModel} from '@/models'

export default interface ClientFeatureLookupResponseModel extends BaseResponseModel {
	data: {
		result: ClientFeatureLookupModel;
	}
}