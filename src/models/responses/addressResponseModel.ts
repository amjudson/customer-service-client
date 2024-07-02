import {BaseResponseModel} from '@/models/responses'
import {AddressModel} from '@/models'

export default interface AddressResponseModel extends BaseResponseModel {
	data: {
		result: AddressModel;
	}
}
