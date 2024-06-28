import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PeopleModel} from '@/models/peopleModel'

export interface PeopleResponseModel extends BaseResponseModel {
	result: PeopleModel;
}
