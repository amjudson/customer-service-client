import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {PersonTypeModel} from '@/models/personTypeModel'

export interface PersonTypeResponseModel extends BaseResponseModel {
	data: {
		result: PersonTypeModel;
	}
}