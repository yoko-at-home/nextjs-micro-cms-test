import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const News: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>News</h2>
    </Layout>
  );
};

export default News;
