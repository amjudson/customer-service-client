import {BaseResponseModel} from '@/models/responses'
import {ClientFeatureModel} from '@/models'

export default interface ClientFeatureResponseModel extends BaseResponseModel {
	data: {
		result: ClientFeatureModel;
	}
}