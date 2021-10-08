import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header, HeaderAbout, HeaderNewsArticles, HeaderSub } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main className="mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12 bg-purple-50 bg-opacity-0">{props.children}</main>
      <Footer />
    </>
  );
};

export const LayoutSub: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <HeaderSub />
      <main className="mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12 bg-purple-50 bg-opacity-0">{props.children}</main>
      <Footer />
    </>
  );
};

export const LayoutAbout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <HeaderAbout />
      <main className="mx-3 sm:mx-10 md:mx-auto w-11/12 lg:w-9/12">{props.children}</main>
      <Footer />
    </>
  );
};
export const LayoutHNewsArticles: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <HeaderNewsArticles />
      <main className="mx-3 sm:mx-10 md:mx-auto w-11/12 lg:w-9/12">{props.children}</main>
      <Footer />
    </>
  );
};
