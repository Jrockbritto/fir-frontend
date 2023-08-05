import { api } from "api/config";
import { LoginRequestData } from "models/login";

export const userLogin = async ({ email, password }: LoginRequestData) => {
  const { data } = await api.post("authentication/login", { email, password });

  return data;
};
