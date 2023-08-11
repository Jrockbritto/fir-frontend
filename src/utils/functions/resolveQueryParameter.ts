import { ResolveQueryParameter } from "@api/typings";

export function resolveQueryParameter({
  path,
  queryParams,
}: ResolveQueryParameter) {
  const queryKeys = Object.keys(queryParams);

  return queryKeys.reduce((acc, key, index) => {
    if (index == 0) {
      return acc.concat(`?${key}=${String(queryParams[key])}`);
    }
    return acc.concat(`${key}=${String(queryParams[key])}`);
  }, path);
}
