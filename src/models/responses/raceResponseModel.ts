import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {RaceModel} from '@/models/raceModel'

export interface RaceResponseModel extends BaseResponseModel {
	data: {
		result: RaceModel;
	}
}