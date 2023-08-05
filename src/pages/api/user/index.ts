import { withSessionRoute } from "lib/login/session";
import { User } from "models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(userRoute);

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    
    res.json({...req.session.user})
  } else {
    res.json({
      userData: {
        id: '',
        name: '',
        lastName: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: ''
      },
      token: '',
      login: {
        email: "",
        password: ""
      }
    })
  }
}