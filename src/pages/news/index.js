/* eslint-disable import/no-default-export */
import Image from "next/image";
import Link from "next/link";
// eslint-disable-next-line no-restricted-imports
import React from "react";
import { LayoutSub } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { Pagination } from "src/components/Pagination";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

// eslint-disable-next-line react/destructuring-assignment
export default function News({ news, totalCount }) {
  return (
    <LayoutSub>
      <PageSEO title={`News- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>News</PageTitle>
      <div className="mt-10">
        <ul>
          {news.map((news) => {
            return (
              <li key={news.id} className="mb-8">
                <div className="flex flex-row-reverse justify-between">
                  <Link href={`news/${news.id}`}>
                    <a className="ml-1 lg:ml-10 lg:w-3/12">
                      {!news.imgSrc ? null : (
                        <Image src={news.imgSrc.url} alt={news.title} width="100%" height="100%" />
                      )}
                    </a>
                  </Link>
                  <div className="flex flex-col w-full">
                    <Link href={`news/${news.id}`}>
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
      </div>
    </LayoutSub>
  );
}
export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch("https://gen-scent.microcms.io/api/v1/news?offset=0&limit=3", key)
    // eslint-disable-next-line arrow-body-style
    .then((res) => res.json())
    // eslint-disable-next-line arrow-body-style
    .catch(() => null);

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
