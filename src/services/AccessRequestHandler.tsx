import ApiService from "./ApiService"
import { AccessRequest } from "../models/AccessRequest"

class AccessRequestHandler
{
    // Call postRequest method of ApiService to login
    static async handleLogin<T>(requestBody: AccessRequest) : Promise<T>
    {
        try
        {
            const apiEndpoint = 'http://localhost:5045/api/login'
            const response = await ApiService.postRequest<T>(
                apiEndpoint, requestBody
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