import env from "../../../config/env";

import axios from "axios";

const URL = env().backUrl;

const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

api.interceptors.response.use(
  async (response) => response,
  async (error) => {
    console.log("erroAxios", error);
  },
);

export { api, URL };
