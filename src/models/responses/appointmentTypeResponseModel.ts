import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {AppointmentTypeModel} from '@/models/appointmentTypeModel'

export interface AppointmentTypeResponseModel extends BaseResponseModel {
	result: AppointmentTypeModel;
}
