/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { FormMemberRegistration } from "src/components/FormMemberRegistration";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Members: NextPage = () => {
  return (
    <Layout theme="main">
      <PageSEO title={`Members- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Members</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container py-12">
          <FormMemberRegistration />
        </div>
      </div>
    </Layout>
  );
};

export default Members;
