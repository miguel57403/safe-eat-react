import { AxiosInstance, AxiosResponse } from "axios";

export type Uuid = string;
export type Int = number;
export type DateString = string;

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export type PaginationQuery = {
  page: Int;
  page_size: Int;
};

export type Pagination<T> = {
  entities: T[];
  row_count: Int;
};

export type HttpClient = AxiosInstance;
