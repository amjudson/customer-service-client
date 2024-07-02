import {BaseResponseModel} from '@/models/responses'
import {PersonTypeModel} from '@/models'

export default interface PersonTypeResponseModel extends BaseResponseModel {
	data: {
		result: PersonTypeModel;
	}
}