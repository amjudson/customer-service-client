import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {ClientModel} from '@/models/clientModel'

export interface ClientListResponseModel extends BaseResponseModel {
	data: {
		result: ClientModel[];
	}
}
