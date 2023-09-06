import { v4 as uuidv4 } from 'uuid';

export interface PatientView
{
    id: typeof uuidv4,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    gender: string,
    age: number,
    requiresPasswordReset: boolean,
    role: string,
    isActive: boolean,
    deviceToken: string,
    otp: string,
    imagePath: string
}