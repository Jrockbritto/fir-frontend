import { AxiosRequestConfig, Method } from "axios";

export type ApiUrlConfig = string;

export type QueryParameters = {
  [key: string]: string | number;
};

export type RequestOptionsProps = {
  method?: Method;
  config?: AxiosRequestConfig;
  body?: any | unknown;
  queryParams?: QueryParameters;
};

export type RequestProps = {
  path: string;
  options: RequestOptionsProps;
};

export type ResolveQueryParameter = {
  path: string;
  queryParams: QueryParameters;
};
