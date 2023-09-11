// Model used to request login
export interface AccessRequest
{
    deviceToken: string;
    email: string;
    password: string;
}