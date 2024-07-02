import {BaseResponseModel} from '@/models/responses'
import {GenderModel} from '@/models'

export default interface GenderResponseModel extends BaseResponseModel {
	data: {
		result: GenderModel;
	}
}