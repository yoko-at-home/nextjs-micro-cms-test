import type { NextPage } from "next";
import Head from "next/head";
import { LayoutSub } from "src/components/layoutSub";

const About: NextPage = () => {
  return (
    <LayoutSub>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>About</h2>
    </LayoutSub>
  );
};

export default About;
