import {BaseResponseModel} from '@/models/responses'
import {PersonModel} from '@/models'

export default interface PersonListResponseModel extends BaseResponseModel {
	data: {
		result: PersonModel[];
	}
}
