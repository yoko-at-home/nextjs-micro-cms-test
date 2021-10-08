import Image from "next/image";
import Link from "next/link";
import { LayoutSub } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { Pagination } from "src/components/Pagination";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

// const ErrorPage = "エラーが発生しました";

// eslint-disable-next-line react/destructuring-assignment
const News = ({ news, totalCount }) => {
  // console.log(content);
  // if (!content) {
  //   return ErrorPage;
  // }
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
                        <picture>
                          <Image src={news.imgSrc.url} alt={news.title} width="150%" height="100%" />
                        </picture>
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
};
export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?offset=0&limit=5`, key)
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

// eslint-disable-next-line import/no-default-export
export default News;
