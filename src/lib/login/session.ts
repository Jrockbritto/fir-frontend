import { User } from "@models/user";

import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next/types";

export const sessionOptions: IronSessionOptions = {
  password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD as string,
  cookieName: "kronus",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

declare module "iron-session" {
  export interface IronSessionData {
    user?: User;
  }
}
