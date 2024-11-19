import {BaseResponseModel} from '@/models/responses'
import {PersonDtoModel} from '@/models'

export default interface PersonResponseModel extends BaseResponseModel {
	data: {
		result: PersonDtoModel;
	}
}
