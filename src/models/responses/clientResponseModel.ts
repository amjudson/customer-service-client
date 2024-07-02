import {BaseResponseModel} from '@/models/responses'
import {ClientModel} from '@/models'

export default interface ClientResponseModel extends BaseResponseModel {
	data: {
		result: ClientModel;
	}
}