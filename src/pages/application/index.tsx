import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Application: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Application- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Application</PageTitle>
    </Layout>
  );
};

export default Application;
