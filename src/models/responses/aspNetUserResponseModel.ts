import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserModel} from '@/models/aspNetUserModel'

export interface AspNetUserResponseModel extends BaseResponseModel {
	result: AspNetUserModel;
}
