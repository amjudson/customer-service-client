import {BaseResponseModel} from '@/models/responses'
import {StateModel} from '@/models'

export default interface StateListResponseModel extends BaseResponseModel {
	data: {
		result: StateModel[];
	}
}
