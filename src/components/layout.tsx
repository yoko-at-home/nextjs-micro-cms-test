import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      <main className="mx-3 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12">{props.children}</main>
      <Footer />
    </>
  );
};
