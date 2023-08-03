import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { withIronSessionSsr } from 'iron-session/next'

import LoginComponent from 'components/pages/login'

import { sessionOptions } from 'lib/login/session'

const Login = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <LoginComponent {...props} />
)

export default Login

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  ({ req, res }) => {
    const user = req.session.user

    if (user) {
      const props = { user }
      res.setHeader('location', '/')
      res.statusCode = 302
      res.end()
      return { props }
    }

    return {
      props: { user: {} }
    }
  },
  sessionOptions
)
