import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Members: NextPage = () => {
  return (
    <Layout>
      <PageSEO title={`Members- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Members</PageTitle>
    </Layout>
  );
};

export default Members;
