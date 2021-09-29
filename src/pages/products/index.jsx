import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Products: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Products- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Products</PageTitle>
    </Layout>
  );
};

export default Products;
