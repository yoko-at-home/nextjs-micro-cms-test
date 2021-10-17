/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
// import type { NextPage } from "next";
// import type { VFC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useCallback } from "react";
import { useModal } from "react-hooks-use-modal";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

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

const AppCardModal = () => {
  return (
    <div className="p-4" style={{ maxWidth: "800px" }}>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">
          Webサイトのすべての商品情報にアクセスするには、
          <Link href="/members">
            <a className="text-blue-400 hover:text-blue-500">Membersページ </a>
          </Link>
          よりログインしてください。
          <br />
          会員登録がお済みで無い方は、会員登録の申請をお願いします。
        </p>
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
        <img alt="cats" src={"/static/gif/890-loading-animation.gif"} />
      </div>
    );
  if (error)
    return (
      <Layout theme="main">
        <div>{error.message}</div>
      </Layout>
    );

  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });

  const handleOnClick = useCallback(() => {
    // const result = props.news.find(({ title }) => {
    //   return title === props.news.title;
    // });
    // // console.log(result);
    // setSelectedNews(result);
    open();
  }, [open]);

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
            return !user ? (
              <div>
                <button
                  onClick={() => {
                    return handleOnClick();
                  }}
                  key={news.title}
                  title={news.title}
                  description={news.description}
                >
                  <AppCard key={news.title} title={news.title} description={news.description} />
                </button>
                <Modal>
                  <div className="bg-white px-2 sm:px-4 md:px-10 py-10 rounded text-gray-500">
                    <p>
                      <AppCardModal />
                    </p>
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={close}
                        className="rounded p-1 text-center font-medium text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 mb-3 lg:mr-3 lg:py-2 hover:text-gray-100"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            ) : (
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
