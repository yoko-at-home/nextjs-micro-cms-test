/* eslint-disable import/no-default-export */
/* eslint-disable @next/next/no-img-element */
// pages/application/[id].js
import { Button } from "src/components/button";
import { CustomLink } from "src/components/CustomLink";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { Date } from "src/lib/date";

export default function ApplicationId(props) {
  const publishedAt = props.news.publishedAt;
  const revisedAt = props.news.revisedAt;
  return (
    <Layout theme="newsArticles">
      <main>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl mt-6 lg:text-center py-12">
          {props.news.title}
        </h1>
        <div className="flex flex-col text-right mt-3 mb-10">
          {publishedAt === revisedAt ? (
            <div>
              Published: <Date className="text-sm text-blueGray-500 mb-3" dateString={props.news.publishedAt} />
            </div>
          ) : (
            <>
              <div>
                Revised at: <Date className="text-sm text-blueGray-500" dateString={props.news.revisedAt} />
              </div>
              <div>
                Published at: <Date className="text-sm text-blueGray-500 mb-3" dateString={props.news.publishedAt} />
              </div>
            </>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.news.body}`,
          }}
        />
        <div className="absolute mt-5 inline-block right-10 md:right-20 lg:right-40">
          <CustomLink href="/application">
            <Button>Application Top</Button>
          </CustomLink>
        </div>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => {
    return `/application/${content.id}`;
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
