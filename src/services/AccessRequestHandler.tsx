import ApiService from "./ApiService"
import { AccessRequest } from "../models/Requests/AccessRequest"

class AccessRequestHandler
{
    // Call postRequest method of ApiService to login
    static async handleLogin<T>(requestBody: AccessRequest) : Promise<T>
    {
        try
        {
            const apiEndpoint = 'login'
            const params = new Map<string, string>()
            
            const response = await ApiService.postRequest<T>(
                apiEndpoint, requestBody, params
            )
            return response
        }
        catch (error) 
        {
            throw new Error("Access request service error!")
        }
    }    
}
export default AccessRequestHandler