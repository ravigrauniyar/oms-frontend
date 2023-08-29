import BaseUrlMapper from "./BaseUrlBuilder"

class ApiService 
{
  // Accept api endpoint and body parameters to make a POST request
  static async postRequest<T>(endpoint: string, requestBody: any, params: Map<string, string>): Promise<T> 
  {
    try
    {
      const url = BaseUrlMapper.buildUrl(endpoint, params)

      const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      )
      return await response.json()
    }
    catch(error)
    {
      throw new Error("Api Service Error!")
    }
  }

  // Accept api endpoint and body parameters to make a PUT request
  static async putRequest<T>(endpoint: string, requestBody: any, email: string, params: Map<string, string>):
  Promise<T> 
  {
    try{
      const url = BaseUrlMapper.buildUrl(endpoint, params)

      const response = await fetch(url, 
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Email': email
          },
          body: JSON.stringify(requestBody),
        }
      )
      return await response.json()
    }
    catch(error)
    {
      throw new Error("Api Service Error!")
    }
  }
}
export default ApiService;