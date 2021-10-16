/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Success: NextPage = () => {
  const router = useRouter();
  // console.log(router.query);
  return (
    <Layout theme="flower">
      <PageSEO title={`Success- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="flex justify-center">
        <img alt="cats" src={"/static/gif/74797-thank-you-with-confetti.gif"} className="rounded-full w-20 md:w-56" />
        <img alt="cats" src={"/static/gif/43018-thank-you-lottiefiles.gif"} className="rounded-full w-20 md:w-56" />
        <img alt="cats" src={"/static/gif/42737-thanks-for-a-good-deal.gif"} className="rounded-full w-20 md:w-56" />
      </div>
      <div className="container p-3 text-lg">
        <div className="mt-10 whitespace-pre-line break-words">{router.query.text}</div>
      </div>
    </Layout>
  );
};

export default Success;
