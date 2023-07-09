import { AxiosInstance, AxiosResponse } from "axios";

export type Uuid = string;
export type Int = number;
export type DateString = string;

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export type HttpClient = AxiosInstance;
