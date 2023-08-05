import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { User } from "models/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

const AddUserPage = dynamic(
  () => import("components/pages/AccessControl/AddUser"),
  {
    ssr: true,
  },
);

const AddUser = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => <AddUserPage {...props} />;

export default AddUser;

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
