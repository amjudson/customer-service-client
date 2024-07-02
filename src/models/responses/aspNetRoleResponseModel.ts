import {BaseResponseModel} from '@/models/responses'
import {AspNetRoleModel} from '@/models'

export default interface AspNetRoleResponseModel extends BaseResponseModel {
	data: {
		result: AspNetRoleModel;
	}
}