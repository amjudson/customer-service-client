import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientTypeModel} from '@/models/clientTypeModel'

export interface ClientTypeResponseModel extends BaseResponseModel {
	result: ClientTypeModel;
}
