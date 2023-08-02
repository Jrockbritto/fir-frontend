"use client";
import styles from "./page.module.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function Home() {
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Source+Code+Pro:wght@500&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Source+Code+Pro:wght@500&family=Urbanist:wght@400;500;600&display=swap"
      rel="stylesheet"
    ></link>
  </Head>;

  return (
    <>
      <NextNProgress />
      <main className={styles.main}>Beth é linda demais</main>
    </>
  );
}
