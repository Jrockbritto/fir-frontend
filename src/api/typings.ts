import { AxiosRequestConfig, Method } from "axios";

export type ApiUrlConfig = string;

export type RequestOptionsProps = {
  method?: Method;
  config?: AxiosRequestConfig;
  body?: any | unknown;
};

export type RequestProps = {
  path: string;
  options: RequestOptionsProps;
};
