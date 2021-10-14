/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { CustomLink } from "src/components/CustomLink";
import { LayoutCarousel } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Showcase: NextPage = () => {
  return (
    <LayoutCarousel>
      <PageSEO title={`Showcase- ${siteMetadata.author}`} description={siteMetadata.description} />

      <CustomLink href="/showcase" aria-label="Gen-Scent Research Laboratory">
        <div className="absolute -top-5 right-5 bg-gradient-to-t from-gray-700 to-green-50 rounded-full p-2">
          <img alt="cats" src={"/static/animation_500_cat.gif"} className="rounded-full w-16 md:w-32" />
        </div>
      </CustomLink>
      <div className="py-12 text-center bg-black bg-opacity-30 rounded-full shadow-2xl">
        <div className="p-6">
          <h1 className="text-3xl" style={{ textShadow: "0px 10px 3px rgba(0, 0, 0, 0.9)" }}>
            Welcome to
            <br />
            <span className="text-4xl my-5">Canon&#39;s</span> <br />
            Maincoon world
          </h1>
        </div>
        <div className=" p-6" style={{ textShadow: "px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit ipsam doloremque doloribus voluptate ut
          tempora fugiat enim, soluta cumque reiciendis nesciunt officiis voluptatum harum nemo deleniti natus atque
          quo.
        </div>
        <Link href="/showcase/page" passHref>
          <div className="p-2 text-4xl bg-gradient-to-tl from-pink-800 bg-yellow-400 hover:text-yellow-600 hover:bg-green-400 inline-block bg-opacity-80 uppercase">
            Enter
          </div>
        </Link>
        <div className="p-6" style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit ipsam doloremque doloribus voluptate ut
          tempora fugiat enim, soluta cumque reiciendis nesciunt officiis voluptatum harum nemo deleniti natus atque
          quo.
        </div>
      </div>
    </LayoutCarousel>
  );
};

export default Showcase;
