import { Api } from "api";
import { RequestProps } from "api/typings";
import { LoginRequestData } from "models/login";

export const userLogin = ({ email, password }: LoginRequestData) => {
  const props: RequestProps = {
    path: "authentication/login",
    options: {
      method: "POST",
      body: { email, password },
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    },
  };
  return Api().request(props);
};
