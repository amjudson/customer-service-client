import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserClaimModel} from '@/models/aspNetUserClaimModel'

export interface AspNetUserClaimResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserClaimModel;
	}
}