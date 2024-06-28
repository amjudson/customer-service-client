import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AspNetUserRoleModel} from '@/models/aspNetUserRoleModel'

export interface AspNetUserRoleResponseModel extends BaseResponseModel {
	result: AspNetUserRoleModel;
}
