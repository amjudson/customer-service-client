import {BaseResponseModel} from '@/models/responses'
import {StateModel} from '@/models'

export default interface StateResponseModel extends BaseResponseModel {
	data: {
		result: StateModel;
	}
}