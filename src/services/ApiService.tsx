class ApiService 
{
  // Accept api endpoint and body parameters to make a POST request
  static async postRequest<T>(url: string, requestBody: any): Promise<T> 
  {
    try
    {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      )
      return await response.json();
    }
    catch(error)
    {
      throw new Error("Api Service Error!");
    }
  }

  // Accept api endpoint and body parameters to make a PUT request
  static async putRequest<T>(url: string, requestBody: any, email: string): Promise<T> 
  {
    try
    {
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
      return await response.json();
    }
    catch(error)
    {
      throw new Error("Api Service Error!");
    }
  }
}
export default ApiService;