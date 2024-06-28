export interface AppointmentModel {
	appointmentTypeId: number;
	name: string;
	appointmentId: number;
	description: string;
	startDateTime: string;
	endDateTime: string;
	allDay: boolean;
}