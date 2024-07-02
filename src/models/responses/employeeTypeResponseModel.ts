import {BaseResponseModel} from '@/models/responses'
import {EmployeeTypeModel} from '@/models'

export default interface EmployeeTypeResponseModel extends BaseResponseModel {
	data: {
		result: EmployeeTypeModel;
	}
}