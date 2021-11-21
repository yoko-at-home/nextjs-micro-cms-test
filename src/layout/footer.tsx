import type { VFC } from "react";
import { NavBarMobile } from "src/components/navbar";
import { siteMetadata } from "src/data/siteMetadata";

import { CustomLink } from "../components/CustomLink";

export const Footer: VFC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-32">
        <div className="flex mb-2 space-x-2 text-sm">
          <div>代表: {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <CustomLink href="/">{siteMetadata.title}</CustomLink>
        </div>
        <div className="my-8 text-sm text-gray-400">
          <CustomLink href="https://over40webclub.netlify.app/">Powered by Over 40 Web Club</CustomLink>
        </div>
        <NavBarMobile />
      </div>
    </footer>
  );
};
