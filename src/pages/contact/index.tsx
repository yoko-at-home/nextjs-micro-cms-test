import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Contact: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Contact- ${siteMetadata.author}`} description={siteMetadata.description} />

      <h2>Contact</h2>
    </Layout>
  );
};

export default Contact;
