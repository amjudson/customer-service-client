import {
  ClientModel,
  AddressModel,
  PhoneModel,
  EmailModel,
} from '@/models'

export default interface ClientDtoModel{
  client: ClientModel
  addresses: AddressModel[]
  phones: PhoneModel[]
  emails: EmailModel[]
}
