import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {EmployeeModel} from '@/models/employeeModel'

export interface EmployeeResponseModel extends BaseResponseModel {
	result: EmployeeModel;
}
