import { AppointmentServiceView } from "./AppointmentServiceView";
import { PersonView } from "./PersonView";
import { v4 as uuidv4 } from 'uuid';

export interface AppointmentView
{
    appointmentId: typeof uuidv4,
    date: string,
    timeSlot: string,
    isApproved: boolean,
    isCompleted: boolean,
    isWaiting: boolean,
    patient: PersonView,
    doctor: PersonView,
    service: AppointmentServiceView
}