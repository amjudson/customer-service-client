import {BaseResponseModel} from '@/models/responses'
import {EmailTypeModel} from '@/models'

export default interface EmailTypeResponseModel extends BaseResponseModel {
	data: {
		result: EmailTypeModel;
	}
}