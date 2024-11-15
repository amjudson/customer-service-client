import {
	PersonModel,
	AddressModel,
	PhoneModel,
	EmailModel,
} from '@/models'

export default interface PersonDtoModel {
	person: PersonModel;
	addresses: AddressModel[];
	phones: PhoneModel[];
	emails: EmailModel[];
}
