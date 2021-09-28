import type { NextPage } from "next";
import Head from "next/head";
import { LayoutSub } from "src/components/layoutSub";

const News: NextPage = () => {
  return (
    <LayoutSub>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>News</h2>
    </LayoutSub>
  );
};

export default News;
