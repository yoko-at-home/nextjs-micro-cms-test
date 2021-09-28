import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Members: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Members- ${siteMetadata.author}`} description={siteMetadata.description} />

      <h2>Members</h2>
    </Layout>
  );
};

export default Members;
