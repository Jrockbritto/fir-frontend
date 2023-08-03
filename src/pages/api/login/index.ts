import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/login/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userInfo = await req.body

    const user = {
      ...userInfo,
      isLoggedIn: true
    }

    req.session.user = user
    await req.session.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
