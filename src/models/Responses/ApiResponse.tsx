// Model used to receive API responses
export interface ApiResponse<T> 
{
    isSuccess: boolean;
    value: T;
    message: string;
}