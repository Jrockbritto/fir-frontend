import { LoginRequestData } from "models/login";

export type UserData = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type User = {
  userData: UserData;
  token?: string;
  login?: LoginRequestData;
};
