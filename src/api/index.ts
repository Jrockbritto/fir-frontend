import { resolveQueryParameter } from "@utils/functions/resolveQueryParameter";

import { api, URL } from "./config";
import { RequestProps } from "./typings";

export function Api() {
  function request({
    path,
    options: { method = "GET", body, config, queryParams },
  }: RequestProps) {
    api.defaults.baseURL = URL;

    const resolvedPath = queryParams
      ? resolveQueryParameter({ path, queryParams })
      : path;

    return api({
      method,
      url: resolvedPath,
      data: body,
      ...config,
    });
  }

  return {
    request,
  };
}
