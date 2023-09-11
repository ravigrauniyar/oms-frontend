class BaseUrlBuilder
{
    static getBaseUrl = (environment: string) =>
    {
        // Get the base URL from .env file
        switch (environment) 
        {
          case 'development':
            return import.meta.env.VITE_API_BASE_URL_DEV

          case 'staging':
            return import.meta.env.VITE_API_BASE_URL_STAGE

          case 'production':
            return import.meta.env.VITE_API_BASE_URL_PROD

          default:
            throw new Error('Invalid environment')
        }
    }
    static buildUrl = (endpoint: string, params: Map<string, string>) =>
    {
        // Passing environment variable to getBaseUrl
        const baseUrl = this.getBaseUrl(import.meta.env.VITE_APP_ENVIRONMENT)
        
        const queryParams = new URLSearchParams()

        // Adding key-value pairs from the paramMap to the URLSearchParams
        params.forEach((value: string, key: string) => 
        {
            queryParams.append(key, value)
        })
        // Appending base URL, requested endpoint and query parameters
        const fullUrl = `${baseUrl}${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
        return fullUrl
    }
}
export default BaseUrlBuilder