import { Api } from "api";
import { RequestProps } from "api/typings";

export const handleCounter = (token: string) => {
  const props: RequestProps = {
    path: 'time',
    options: {
      method: "POST",
      config: {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      },
    }
  }
  return Api().request(props);
}