import {BaseResponseModel} from '@/models/responses'
import {AppointmentTypeModel} from '@/models'

export default interface AppointmentTypeResponseModel extends BaseResponseModel {
	data: {
		result: AppointmentTypeModel;
	}
}