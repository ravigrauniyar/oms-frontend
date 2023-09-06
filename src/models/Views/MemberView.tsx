import { v4 as uuidv4 } from 'uuid';

export interface MemberView
{
    id: typeof uuidv4,
    firstName: string,
    lastName: string,
    email: string,
    organization: string,
    password: string,
    requiresPasswordReset: boolean,
    role: string,
    address: string,
    isActive: boolean,
    deviceToken: string,
    otp: string,
    imagePath: string
}