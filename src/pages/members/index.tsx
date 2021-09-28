import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const Members: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Members</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Members</h2>
    </Layout>
  );
};

export default Members;
