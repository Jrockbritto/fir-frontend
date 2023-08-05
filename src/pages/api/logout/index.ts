import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { User } from "models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  res.setHeader("location", "/login");
  res.statusCode = 302;
  res.end();
}
