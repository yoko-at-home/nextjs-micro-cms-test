/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
// import type { NextPage } from "next";
// import type { VFC } from "react";
import Link from "next/link";
// import { useCallback } from "react";
// import { useModal } from "react-hooks-use-modal";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

// const AppCard: VFC<ItemType> = (props) => {
const AppCard = (props) => {
  return (
    <div key={props.id}>
      <div
        className="relative h-60 w-full flex items-end justify-start text-left bg-cover bg-center"
        // style={{ backgroundImage: "url(https://source.unsplash.com/1600x500/?plant,flower)" }}
        style={{ backgroundImage: "url(static/images/laurel.png)" }}
      >
        <div className="absolute top-3 m-3 flex flex-col justify-between">
          <div
            // href="#"
            className="h-16 cursor-pointer text-lg text-gray-100 p-1 hover:bg-gray-50 hover:bg-opacity-20 transition ease-in-out duration-500 word-break overflow-y-scroll"
          >
            {props.title}
          </div>
          <main className="z-10">
            <div className="cursor-pointer p-1 h-32 text-md tracking-tight text-white hover:bg-gray-50 hover:bg-opacity-20 word-break overflow-y-scroll transition ease-in-out duration-500">
              {props.description}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// const AppCardModal = () => {
//   return (
//     <div className="p-4" style={{ maxWidth: "800px" }}>
//       <div className="pt-6 pb-8 space-y-2 md:space-y-5">
//         <p className="text-lg leading-7 text-gray-500 ">
//           ただいま準備中です。会員登録いただいた方には資料をメールにてお送りします。
//           <Link href="/members">
//             <a className="text-blue-400 hover:text-blue-500">Membersページ </a>
//           </Link>{" "}
//           より申請をお願いします。
//         </p>
//       </div>
//     </div>
//   );
// };

// const Application: NextPage<ItemType> = () => {
const Application = (props) => {
  // const [Modal, open, close] = useModal("root", {
  //   preventScroll: true,
  // });

  // const handleOnClick = useCallback(() => {
  // const result = props.news.find(({ title }) => {
  //   return title === props.news.title;
  // });
  // // console.log(result);
  // setSelectedNews(result);
  //   open();
  // }, [open]);

  return (
    <Layout theme="main">
      <PageSEO title={`Application- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Application</PageTitle>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg leading-7 text-gray-500 ">製品をヒーローイメージを使ってご紹介できます。</p>
      </div>
      <div className="container py-10"></div>
      <div className="grid grid-cols-3  gap-3">
        {props.news.map((news) => {
          return (
            <Link href={`application/${news.id}`} passHref key={news.id}>
              <a>
                <AppCard key={news.title} title={news.title} description={news.description} />
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?offset=0&limit=9`, key)
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
