/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { CustomLink } from "src/components/CustomLink";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { LayoutCarousel } from "src/layout";

const Showcase: NextPage = () => {
  return (
    <LayoutCarousel>
      <PageSEO title={`Showcase- ${siteMetadata.author}`} description={siteMetadata.description} />
      <CustomLink href="/showcase" aria-label="Gen-Scent Research Laboratory">
        <div className="absolute -top-5 md:-top-20 right-5 bg-gradient-to-t from-gray-700 to-green-50 rounded-full p-3">
          <img alt="cats" src={"/static/gif/animation_500_cat.gif"} className="rounded-full w-16 md:w-24" />
        </div>
      </CustomLink>

      <div className="py-12 text-center bg-black bg-opacity-30 rounded-full text-white text-xs sm:text-xl leading-7 uppercase">
        <div className="p-6">
          <h1 className="text-3xl" style={{ textShadow: "0px 10px 3px rgba(0, 0, 0, 0.9)" }}>
            Welcome to
            <br />
            <span className="text-4xl my-5">Canon&#39;s</span> <br />
            Maine Coon world
          </h1>
        </div>
        <div className="p-6" style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          Cattery CANON is a tiny Maine Coon breeder in Zama City, Kanagawa Prefecure. I am a member of Cat Fanciers
          Association (CFA) and The International Cat Association (TICA). The headquarters are in USA.
        </div>
        <Link href="/showcase/page" passHref>
          <div className="rounded p-2 text-2xl md:text-4xl bg-gradient-to-tl from-pink-800 bg-yellow-400 hover:text-yellow-600 hover:bg-green-400 inline-block bg-opacity-80 uppercase">
            Enter
          </div>
        </Link>
        <div className="p-6" style={{ textShadow: "0px 5px 5px rgba(0, 0, 0, 0.9)" }}>
          Cattery CANONは、神奈川県座間市にある、メインクーン専門の小さなきゃテリーです。アメリカに本部を置く愛猫団体
          CFA TICAに所属しています。
        </div>
      </div>
    </LayoutCarousel>
  );
};

export default Showcase;
