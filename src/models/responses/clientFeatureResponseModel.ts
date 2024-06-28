import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientFeatureModel} from '@/models/clientFeatureModel'

export interface ClientFeatureResponseModel extends BaseResponseModel {
	result: ClientFeatureModel;
}
