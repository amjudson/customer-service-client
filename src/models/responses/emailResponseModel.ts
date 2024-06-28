import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {EmailModel} from '@/models/emailModel'

export interface EmailResponseModel extends BaseResponseModel {
	result: EmailModel;
}
