import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserLoginModel} from '@/models/aspNetUserLoginModel'

export interface AspNetUserLoginResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserLoginModel;
	}
}