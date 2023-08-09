import { LoginComponent } from "@components/pages/Login";

import { sessionOptions } from "@lib/login/session";

import { withIronSessionSsr } from "iron-session/next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Login = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => <LoginComponent {...props} />;

export default Login;

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function ({ req, res }) {
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
      props: {
        user: {},
      },
    };
  },
  sessionOptions,
);
