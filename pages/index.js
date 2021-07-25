import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { Suspense, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Render3DModel = dynamic(
  () => import("../components/ThreeCanvas"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Render3DModel />
      </main>
    </>
  );
};

export default Home;
