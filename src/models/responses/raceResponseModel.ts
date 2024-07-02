import {BaseResponseModel} from '@/models/responses'
import {RaceModel} from '@/models'

export default interface RaceResponseModel extends BaseResponseModel {
	data: {
		result: RaceModel;
	}
}