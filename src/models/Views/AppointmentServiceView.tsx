import { v4 as uuidv4 } from 'uuid';

export interface AppointmentServiceView
{
    serviceId: typeof uuidv4,
    serviceName: string
}