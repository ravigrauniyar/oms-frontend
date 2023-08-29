// Model used to request password reset
export interface PasswordResetRequest
{
    newPassword: string;
    confirmPassword: string;
}