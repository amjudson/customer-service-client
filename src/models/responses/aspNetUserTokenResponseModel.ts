import {BaseResponseModel} from '@/models/responses'
import {AspNetUserTokenModel} from '@/models'

export default interface AspNetUserTokenResponseModel extends BaseResponseModel {
	data: {
		result: AspNetUserTokenModel;
	}
}