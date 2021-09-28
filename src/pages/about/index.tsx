import type { NextPage } from "next";
import { LayoutSub } from "src/components/layoutSub";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const About: NextPage = () => {
  return (
    <LayoutSub>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <h2>About</h2>
    </LayoutSub>
  );
};

export default About;
