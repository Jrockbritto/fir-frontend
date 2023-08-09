import fetchJson from "@lib/fetchJson";

import env from "@config/env";

import axios from "axios";
import Router from "next/router";

const URL = env().backUrl;

const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

api.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const path = window.location.pathname;
    const protectedPaths = ["/login"];
    const status = [401, 403];
    if (
      !protectedPaths.includes(path) &&
      status.includes(error?.response?.status)
    ) {
      await fetchJson("/api/logout", {
        method: "POST",
      });
      Router.reload();
    }
  },
);

export { api, URL };
