/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/components/layout";
import { Pagination } from "src/components/Pagination";

const PER_PAGE = 3;

// pages/news/[id].js
export default function NewsPageId({ news, totalCount }) {
  return (
    <Layout>
      <ul className="mt-10">
        {news.map((news) => {
          return (
            <li key={news.id} className="mb-8">
              <div className="flex flex-row-reverse justify-between">
                <Link href={`/news/${news.id}`}>
                  <a className="ml-1 lg:ml-10 lg:w-3/12">
                    {!news.imgSrc ? null : <Image src={news.imgSrc.url} alt={news.title} width="100%" height="100%" />}
                  </a>
                </Link>
                <div className="flex flex-col w-full">
                  <Link href={`/news/${news.id}`}>
                    <a className="font-bold">{news.title}</a>
                  </Link>
                  <div className="pt-3">{news.description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination totalCount={totalCount} />
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const res = await fetch("https://gen-scent.microcms.io/api/v1/news", key);

  const repos = await res.json();

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/news/page/${repo}`;
  });

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const data = await fetch(`https://gen-scent.microcms.io/api/v1/news?offset=${(id - 1) * 3}&limit=3`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
