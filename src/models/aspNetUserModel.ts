export default interface AspNetUserModel {
	accessFailedCount: number;
	phoneNumber: string;
	id: string;
	lastName: string;
	normalizedUserName: string;
	securityStamp: string;
	phoneNumberConfirmed: boolean;
	passwordHash: string;
	lockoutEnd: string;
	firstName: string;
	email: string;
	lockoutEnabled: boolean;
	userName: string;
	twoFactorEnabled: boolean;
	concurrencyStamp: string;
	normalizedEmail: string;
	emailConfirmed: boolean;
}