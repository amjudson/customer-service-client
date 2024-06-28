import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {GenderModel} from '@/models/genderModel'

export interface GenderResponseModel extends BaseResponseModel {
	result: GenderModel;
}
