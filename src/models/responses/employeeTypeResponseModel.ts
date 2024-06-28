import {BaseResponseModel} from '@/models/responses/baseResponseModel'
import {EmployeeTypeModel} from '@/models/employeeTypeModel'

export interface EmployeeTypeResponseModel extends BaseResponseModel {
	result: EmployeeTypeModel;
}
