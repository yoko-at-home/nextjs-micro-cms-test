import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "src/components/CustomLink";
import { siteMetadata } from "src/data/siteMetadata";

export const Header: VFC = () => {
  return (
    <header className="h-60 bg-gray-500 opacity-70 relative">
      <Image
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src={"/static/images/laurel.png"}
        alt={"text"}
      />
      <h1 className="absolute top-10 p-5 sm:left-10 md:top-14 text-2xl sm:text-3xl text-white sm:whitespace-nowrap">
        <CustomLink href="/" aria-label="Gen-Scent Research Laboratory">
          <div className="flex items-center justify-between mb-8">
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="h-6 text-2xl lg:text-5xl md:text-3xl font-semibold my-6 md:mb-20 md:mt-12 text-center md:whitespace-nowrap">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </CustomLink>
      </h1>
    </header>
  );
};
