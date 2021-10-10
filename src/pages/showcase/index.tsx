/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Carousel } from "src/components/Carousel";
import { CustomLink } from "src/components/CustomLink";
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
        <CustomLink href="/" aria-label="Gen-Scent Research Laboratory">
          <div className="absolute top-5 right-5 bg-gradient-to-t from-pink-700 to-green-300 rounded-full p-2">
            <img alt="cats" src={"/static/animation_500_cat.gif"} className="rounded-full w-20 md:w-32" />
          </div>
        </CustomLink>
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
