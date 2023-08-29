import ApiService from "./ApiService"
import { PasswordResetRequest } from "../models/PasswordResetRequest"

class PasswordResetHandler{
    // Call putRequest method of ApiService to reset password
    static async handlePasswordReset<T>(requestBody: PasswordResetRequest, token: string) : Promise<T>
    {
        try
        {
            const apiEndpoint = 'http://localhost:5045/api/reset-password'

            const response = await ApiService.putRequest<T>(
                apiEndpoint, requestBody, token
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