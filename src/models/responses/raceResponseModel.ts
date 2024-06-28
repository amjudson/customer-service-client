import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {RaceModel} from '@/models/raceModel'

export interface RaceResponseModel extends BaseResponseModel {
	result: RaceModel;
}
