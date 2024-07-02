import {BaseResponseModel} from '@/models/responses'
import {ClientModel} from '@/models'

export default interface ClientListResponseModel extends BaseResponseModel {
	data: {
		result: ClientModel[];
	}
}
