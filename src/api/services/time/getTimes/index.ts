import { Api } from "@api/index";

import { GetTimeRequestProps, GetTimeResponse } from "./typings";

export async function getTimes(
  params: GetTimeRequestProps,
): Promise<GetTimeResponse> {
  const { token, userId, queryParams } = params;

  const { data } = await Api().request({
    path: `time/users/${userId}`,
    options: {
      queryParams,
      config: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });

  return data as GetTimeResponse;
}
