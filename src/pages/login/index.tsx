import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { withIronSessionSsr } from 'iron-session/next'

import { sessionOptions } from 'lib/login/session'
import { User } from 'models/user'
import LoginComponent from 'components/pages/Login'

const Login = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <LoginComponent {...props} />
)

export default Login

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user) {
    res.setHeader("location", "/counter");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user,
      },
    };
  }

  return {
    props: { user: {
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
    } },
  };
},
sessionOptions);
