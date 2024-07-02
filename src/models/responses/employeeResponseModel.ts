import {BaseResponseModel} from '@/models/responses'
import {EmployeeModel} from '@/models'

export default interface EmployeeResponseModel extends BaseResponseModel {
	data: {
		result: EmployeeModel;
	}
}