import dynamic from "next/dynamic";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/login/session";
import { InferGetServerSidePropsType } from "next";

const HomePage = dynamic(() => import("pages/counter"), { ssr: true });

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => <HomePage {...props} />;

export default Home;

export const getServerSideProps = withIronSessionSsr(({ req, res }) => {
  const user = req.session.user;

  if (!user) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
}, sessionOptions);
