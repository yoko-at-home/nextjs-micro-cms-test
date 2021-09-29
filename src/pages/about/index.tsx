import type { NextPage } from "next";
import { LayoutSub } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const About: NextPage = () => {
  return (
    <LayoutSub>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>About</PageTitle>
    </LayoutSub>
  );
};

export default About;
