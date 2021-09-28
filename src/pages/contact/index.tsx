import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Contact</h2>
    </Layout>
  );
};

export default Contact;
