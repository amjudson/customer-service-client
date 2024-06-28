import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetRoleClaimModel} from '@/models/aspNetRoleClaimModel'

export interface AspNetRoleClaimResponseModel extends BaseResponseModel {
	result: AspNetRoleClaimModel;
}
