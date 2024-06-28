import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {StateModel} from '@/models/stateModel'

export interface StateResponseModel extends BaseResponseModel {
	result: StateModel;
}
