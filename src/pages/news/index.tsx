import type { NextPage } from "next";
import { LayoutSub } from "src/components/layoutSub";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const News: NextPage = () => {
  return (
    <LayoutSub>
      <PageSEO title={`News- ${siteMetadata.author}`} description={siteMetadata.description} />

      <h2>News</h2>
    </LayoutSub>
  );
};

export default News;
