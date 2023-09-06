import { v4 as uuidv4 } from 'uuid';

// Model used to retrieve User's details
export interface PersonView{
    id: typeof uuidv4,
    firstName: string,
    lastName: string,
    requiresPasswordReset: boolean,
    role: string,
    email: string,
    organization: string,
    address: string
}