export default interface UserModel {
  firstName?: string;
  lastName?: string;
  id: string;
  email: string;
  roles?: string[];
  claims?: string[];
}
