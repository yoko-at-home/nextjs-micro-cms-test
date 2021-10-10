import type { NextPage } from "next";
import { Carousel } from "src/components/Carousel";
import { LayoutCarousel } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Showcase: NextPage = () => {
  return (
    <LayoutCarousel>
      <PageSEO title={`Showcase- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Carousel</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container py-12">
          <div className="pt-6 pb-3 space-y-2 md:space-y-5">
            <p className="text-lg leading-7 text-gray-500 ">showcase</p>
            <Carousel />
          </div>
        </div>
      </div>
    </LayoutCarousel>
  );
};

export default Showcase;
