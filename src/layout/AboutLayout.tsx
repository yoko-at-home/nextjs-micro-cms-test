// import Image from "next/image";
import type { ReactNode, VFC } from "react";
// import { CustomLink } from "src/components/CustomLink";
import { NavBarDesktop, NavBarMobile } from "src/components/navbar";
import { siteMetadata } from "src/data/siteMetadata";
import { Footer } from "src/layout/footer";

type Props = {
  className?: string;
  children: ReactNode;
};

const AboutHeader = () => {
  return (
    <div className="relative min-w-full">
      <div
        className="min-w-full h-screen bg-top bg-cover"
        style={{
          background: "center/cover no-repeat url('/static/images/laurel.png')",
        }}
      >
        <div className="absolute top-10 p-5 sm:left-10 md:top-14 lg:top-10 text-2xl sm:text-3xl text-white sm:whitespace-nowrap">
          <div className="pr-12">
            <h1
              className="h-6 text-2xl lg:text-4xl md:text-3xl font-semibold my-6 md:mb-20 md:mt-12 md:whitespace-nowrap text-white"
              style={{
                textShadow: "0px 0px 25px rgba(125, 125, 125, 0.8)",
              }}
            >
              {siteMetadata.headerTitle}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutLayout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-between content-center items-center">
      <AboutHeader />
      <div className="absolute top-20 left-3.5 md:left-20 lg:left-40 xl:left-52 2xl:left-72">
        <NavBarDesktop />
        <main className="z-40 mt-20 sm:mt-15 md:mt-10 text-gray-100">{props.children}</main>
      </div>
      <div className="z-40">
        <NavBarMobile />
        <Footer />
      </div>
    </div>
  );
};
