import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });
  return {
    props: {
      content: data,
    },
  };
};

const Home = (props) => {
  return (
    <Layout theme="main">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <PageTitle>{props.content.title}</PageTitle>
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500">{/* {siteMetadata.description} */}</p>
          <div
            className="text-lg pt-25"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.content.body}`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
