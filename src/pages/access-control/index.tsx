import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { User } from "models/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

const AccessControlPage = dynamic(
  () => import("components/pages/AccessControl"),
  {
    ssr: true,
  },
);

const AccessControl = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => <AccessControlPage {...props} />;

export default AccessControl;

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function ({ req, res }) {
    const user = req.session.user;

    if (!user) {
      res.setHeader("location", "/login");
      res.statusCode = 302;
      res.end();
      return {
        props: {
          user: {} as User,
        },
      };
    }

    return {
      props: { user: req.session.user },
    };
  },
  sessionOptions,
);
