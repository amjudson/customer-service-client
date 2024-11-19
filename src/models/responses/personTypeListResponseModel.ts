import {BaseResponseModel} from '@/models/responses'
import {PersonTypeModel} from '@/models'

export default interface PersonTypeListResponseModel extends BaseResponseModel {
	data: {
		result: PersonTypeModel[];
	}
}
