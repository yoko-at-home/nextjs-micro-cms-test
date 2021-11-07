import type { ReactNode, VFC } from "react";
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";

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
