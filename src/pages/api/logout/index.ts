import { sessionOptions } from "@lib/login/session";

import { User } from "@models/user";

import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  res.setHeader("location", "/login");
  res.json({} as User);
  res.end();
}
