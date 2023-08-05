import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { User } from "models/user";
import { NextApiRequest, NextApiResponse } from "next";

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      userData: {
        id: "",
        name: "",
        lastName: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: "",
      },
      token: "",
    });
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
