import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Application: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Application- ${siteMetadata.author}`} description={siteMetadata.description} />

      <h2>Application</h2>
    </Layout>
  );
};

export default Application;
