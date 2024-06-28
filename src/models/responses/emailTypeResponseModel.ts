import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {EmailTypeModel} from '@/models/emailTypeModel'

export interface EmailTypeResponseModel extends BaseResponseModel {
	result: EmailTypeModel;
}
