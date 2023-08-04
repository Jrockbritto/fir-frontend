import { IronSessionOptions } from "iron-session";
import { User } from "models/user";

export const sessionOptions: IronSessionOptions = {
  password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD as string,
  cookieName: "kronus",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}
