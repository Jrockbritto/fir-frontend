import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute } from "iron-session/next";
import { User } from "models/user";
import { NextApiHandler } from "next";

export const sessionOptions: IronSessionOptions = {
  password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD as string,
  cookieName: "kronus",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

<<<<<<< HEAD
export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

declare module "iron-session" {
  export interface IronSessionData {
=======
declare module "iron-session" {
  interface IronSessionData {
>>>>>>> e08eb5f37b9d4418793ce1f1f3760d1cea05faf3
    user?: User;
  }
}
