import { ResponseData } from "./ResponseData";

export interface ApiListResponse<T>
{
    isSuccess: boolean,
    data: ResponseData<T>
}