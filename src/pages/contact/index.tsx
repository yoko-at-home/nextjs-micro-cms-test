import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Contact: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Contact- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Contact</PageTitle>
    </Layout>
  );
};

export default Contact;
