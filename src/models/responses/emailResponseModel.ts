import {BaseResponseModel} from '@/models/responses'
import {EmailModel} from '@/models'

export default interface EmailResponseModel extends BaseResponseModel {
	data: {
		result: EmailModel;
	}
}