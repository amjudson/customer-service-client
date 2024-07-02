import {BaseResponseModel} from '@/models/responses'
import {AspNetUserClaimModel} from '@/models'

export default interface AspNetUserClaimResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserClaimModel;
	}
}