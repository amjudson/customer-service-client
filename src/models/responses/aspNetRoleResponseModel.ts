import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetRoleModel} from '@/models/aspNetRoleModel'

export interface AspNetRoleResponseModel extends BaseResponseModel {
	data: {
		result: AspNetRoleModel;
	}
}