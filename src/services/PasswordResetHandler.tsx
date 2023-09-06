import ApiService from "./ApiService"
import { PasswordResetRequest } from "../models/PasswordResetRequest"

class PasswordResetHandler{
    // Call putRequest method of ApiService to reset password
    static async handlePasswordReset<T>(requestBody: PasswordResetRequest, token: string) : Promise<T>
    {
        try
        {
            const apiEndpoint = 'reset-password'
            const params = new Map<string, string>()

            const response = await ApiService.putRequest<T>(
                apiEndpoint, requestBody, token, params
            )
            return response
        }
        catch (error) 
        {
            throw new Error("Access request service error!")
        }
    }    
}
export default PasswordResetHandler