/* eslint-disable import/no-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import type { NextPage } from "next";
// import type { VFC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

// const AppCard: VFC<ItemType> = (props) => {
const AppCard = (props) => {
  return (
    <div key={props.id}>
      <div
        className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
        style={{ backgroundImage: "url(https://source.unsplash.com/1600x500/?plant,flower)" }}
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="absolute top-3 right-5 left-0 mx-5 mt-2 flex justify-between items-center">
          <div
            // href="#"
            className="cursor-pointer text-md rounded bg-gray-600 text-gray-100 px-5 py-2 hover:bg-white bg-opacity-80 hover:text-indigo-600 transition ease-in-out duration-500"
          >
            {props.title}
          </div>
        </div>
        <main className="p-5 z-10">
          <div className="cursor-pointer p-1 h-28 text-md tracking-tight text-white hover:bg-gray-50 hover:bg-opacity-20 rounded word-break overflow-y-scroll transition ease-in-out duration-500">
            {props.description}
          </div>
        </main>
      </div>
    </div>
  );
};

// const Application: NextPage<ItemType> = () => {
const Application = (props) => {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">Loading...</div>
      </div>
    );
  if (error)
    return (
      <Layout theme="main">
        <div>{error.message}</div>
      </Layout>
    );
  return (
    <Layout theme="main">
      <PageSEO title={`Application- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Application</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">製品をヒーローイメージを使ってご紹介できます。</p>
        </div>
        <div className="container py-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {props.news.map((news) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`application/${news.id}`} passHref>
                <a>
                  <AppCard key={news.title} title={news.title} description={news.description} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?offset=0&limit=6`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      news: data.contents,
    },
  };
};

export default Application;
