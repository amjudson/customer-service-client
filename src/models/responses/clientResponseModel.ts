import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientModel} from '@/models/clientModel'

export interface ClientResponseModel extends BaseResponseModel {
	data: {
		result: ClientModel;
	}
}