import type { NextPage } from "next";
import { LayoutAbout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const About: NextPage = () => {
  return (
    <LayoutAbout>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>About</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">紹介ページ</p>
        </div>
        <div className="container py-12"></div>
      </div>
    </LayoutAbout>
  );
};

export default About;
