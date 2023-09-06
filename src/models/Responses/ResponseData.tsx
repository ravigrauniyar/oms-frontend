import { MetaData } from "./MetaData";

export interface ResponseData<T>
{
    meta: MetaData,
    items: Array<T>
}