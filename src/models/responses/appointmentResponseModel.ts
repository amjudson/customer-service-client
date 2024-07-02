import {BaseResponseModel} from '@/models/responses'
import {AppointmentModel} from '@/models'

export default interface AppointmentResponseModel extends BaseResponseModel {
	data: {
		result: AppointmentModel;
	}
}