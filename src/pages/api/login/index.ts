import { withSessionRoute } from "@lib/login/session";

import { userLogin } from "@api/services/login";

import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const login = await req.body;

  try {
    if (login) {
      const { email, password } = login;
      const { data } = await userLogin({ email, password });
      req.session.user = data;
      await req.session.save();
      res.setHeader("location", "/counter");
      res.json(data);
      res.statusCode = 302;
      res.end();
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
