import {BaseResponseModel} from '@/models/responses'
import {AddressTypeModel} from '@/models'

export default interface AddressTypeResponseModel extends BaseResponseModel {
	data: {
		result: AddressTypeModel;
	}
}