import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layout";

const Products: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Products</h2>
    </Layout>
  );
};

export default Products;
