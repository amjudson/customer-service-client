import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserTokenModel} from '@/models/aspNetUserTokenModel'

export interface AspNetUserTokenResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserTokenModel;
	}
}