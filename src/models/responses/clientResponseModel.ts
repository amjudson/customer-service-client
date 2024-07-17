import {BaseResponseModel} from '@/models/responses'
import {ClientDtoModel} from '@/models'

export default interface ClientResponseModel extends BaseResponseModel {
	data: {
		result: ClientDtoModel;
	}
}
