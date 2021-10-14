import type { ReactNode, VFC } from "react";
import { Carousel } from "src/components/Carousel";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import { NavBarMobile } from "src/components/navbar";

type Props = {
  className?: string;
  theme?: "main" | "sub" | "news" | "flower" | "newsArticles";
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <Header theme={props.theme || "main"} />
      <main className="mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12">{props.children}</main>
      <Footer />
    </>
  );
};

export const LayoutCarousel: VFC<Props> = (props) => {
  return (
    <div className="relative">
      <Carousel />
      <main className="absolute top-20 md:top-40">{props.children}</main>
      <NavBarMobile />
    </div>
  );
};
