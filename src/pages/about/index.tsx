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
    </LayoutAbout>
  );
};

export default About;
