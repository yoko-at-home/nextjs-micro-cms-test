/* eslint-disable import/no-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// pages/news/[id].js
import Link from "next/link";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { Date } from "src/lib/date";

export default function BlogId({ news }) {
  const publishedAt = news.publishedAt;
  const revisedAt = news.revisedAt;
  return (
    <Layout theme="newsArticles">
      <main>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl mt-6 lg:text-center py-12">{news.title}</h1>
        <div className="flex flex-col text-right mt-3 mb-10">
          {publishedAt === revisedAt ? (
            <div>
              Published: <Date className="text-sm text-blueGray-500 mb-3" dateString={news.publishedAt} />
            </div>
          ) : (
            <>
              <div>
                Revised at: <Date className="text-sm text-blueGray-500" dateString={news.revisedAt} />
              </div>
              <div>
                Published at: <Date className="text-sm text-blueGray-500 mb-3" dateString={news.publishedAt} />
              </div>
            </>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${news.body}`,
          }}
        />
        <div className="absolute mt-5 text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 p-3 rounded inline-block right-10 md:right-20 lg:right-40">
          <Link href={`/news`}>
            <a className="">News Top</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => {
    return `/news/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};
