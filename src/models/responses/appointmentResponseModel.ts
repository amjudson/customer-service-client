import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AppointmentModel} from '@/models/appointmentModel'

export interface AppointmentResponseModel extends BaseResponseModel {
	data: {
		result: AppointmentModel;
	}
}