import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Products: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Products- ${siteMetadata.author}`} description={siteMetadata.description} />

      <h2>Products</h2>
    </Layout>
  );
};

export default Products;
