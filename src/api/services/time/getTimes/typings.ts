import { Time } from "@models/time";

import { QueryParameters } from "@api/typings";

export type GetTimeRequestProps = {
  userId: string;
  token?: string;
  queryParams: QueryParameters;
};

export type GetTimeResponse = {
  times: Time[];
  total: number;
};
