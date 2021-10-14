/* eslint-disable react/destructuring-assignment */
import type { VFC } from "react";

import Facebook from "./facebook.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Mail from "./mail.svg";
import Twitter from "./twitter.svg";
import Youtube from "./youtube.svg";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
};

type Props = {
  kind?: "mail" | "github" | "facebook" | "youtube" | "linkedin" | "twitter";
  href?: string;
  size: string;
};
// export const SocialIcon: VFC<Props> = ({ kind, href, size = 8 }) => {
export const SocialIcon: VFC<Props> = (props) => {
  if (!props.href) return null;

  const SocialSvg = components[props.kind || "mail"];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
    >
      <span className="sr-only">{props.kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${props.size} w-${props.size}`}
      />
    </a>
  );
};
