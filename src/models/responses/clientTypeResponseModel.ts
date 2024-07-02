import {BaseResponseModel} from '@/models/responses'
import {ClientTypeModel} from '@/models'

export default interface ClientTypeResponseModel extends BaseResponseModel {
	data: {
		result: ClientTypeModel;
	}
}