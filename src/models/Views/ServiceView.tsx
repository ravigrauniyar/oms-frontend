import { v4 as uuidv4 } from 'uuid';

export interface ServiceView
{
    serviceId: typeof uuidv4,
    serviceName: string,
    serviceDescription: string,
    isArchive: boolean,
    imagePath: string
}