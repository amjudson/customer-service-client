import {BaseResponseModel} from '@/models/responses'
import {PeopleModel} from '@/models'

export default interface PeopleResponseModel extends BaseResponseModel {
	data: {
		result: PeopleModel;
	}
}