import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserModel} from '@/models/aspNetUserModel'

export interface AspNetUserResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserModel;
	}
}