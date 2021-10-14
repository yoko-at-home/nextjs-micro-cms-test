import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header, HeaderCarousel } from "src/components/header";

type Props = {
  className?: string;
  theme?: "main" | "sub" | "news" | "flower" | "newsArticles";
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <Header theme={props.theme || "main"} />
      <main className="mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12 bg-purple-50 bg-opacity-0">{props.children}</main>
      <Footer />
    </>
  );
};

export const LayoutCarousel: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="w-screen">
      <HeaderCarousel />
      <main className="mt-60 mx-3 sm:mx-10 md:mx-auto w-11/12 lg:w-9/12">{props.children}</main>
      <Footer />
    </div>
  );
};
