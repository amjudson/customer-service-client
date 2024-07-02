import {BaseResponseModel} from '@/models/responses'
import {AspNetUserRoleModel} from '@/models'

export default interface AspNetUserRoleResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserRoleModel;
	}
}