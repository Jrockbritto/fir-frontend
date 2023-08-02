import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/globals";
import RootLayout from "./layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Kronus`}</title>
        <meta
          name="description"
          content={`Sistema pra gestão inteligente do seu tempo.`}
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <GlobalStyles />

      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default App;
