export default interface ApplicationUserModel {
  id: string;
  userName: string;
  email: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  accessFailedCount: number;
  lockoutEnabled: boolean;
  lockoutEnd: Date | null;
  roles: string[];
  userClaims: string[];
}
