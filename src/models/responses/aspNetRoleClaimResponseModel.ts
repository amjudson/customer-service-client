import {BaseResponseModel} from '@/models/responses'
import {AspNetRoleClaimModel} from '@/models'

export default interface AspNetRoleClaimResponseModel extends BaseResponseModel {
	data: {
		result: AspNetRoleClaimModel;
	}
}