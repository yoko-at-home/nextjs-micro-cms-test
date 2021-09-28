import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const Application: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Application</h2>
    </Layout>
  );
};

export default Application;
