import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LayoutAbout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Success: NextPage = () => {
  const router = useRouter();
  // console.log(router.query);
  return (
    <LayoutAbout>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>お問合せありがとうございます</PageTitle>
      <div className="container p-3 text-lg">
        <div className="mt-10 whitespace-pre-line break-words">{router.query.text}</div>
        <div className="mt-5 text-right">
          <span className="text-xs text-gray-500"> true: 希望する / false: 希望しない</span>
        </div>
      </div>
    </LayoutAbout>
  );
};

export default Success;
