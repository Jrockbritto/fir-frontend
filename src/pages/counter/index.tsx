import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { User } from "models/user";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

const CounterPage = dynamic(() => import('components/pages/Counter'), { ssr: true })

const Counter = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <CounterPage {...props} />
)

export default Counter

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
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
sessionOptions);