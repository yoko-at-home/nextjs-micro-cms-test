import type { NextPage } from "next";
import { LayoutAbout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Success: NextPage = () => {
  return (
    <LayoutAbout>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>お問合せを受け付けました。</PageTitle>
      <div className="mt-10">お問い合わせいただき、ありがとうございます。回答をお待ちください。</div>
    </LayoutAbout>
  );
};

export default Success;
