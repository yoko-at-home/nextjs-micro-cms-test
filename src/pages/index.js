/* eslint-disable react/destructuring-assignment */
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { API_URL } from "src/lib/const";

export const getStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch(`${API_URL}/top`, key)
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

const Home = ({ content }) => {
  return (
    <Layout>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 md:mt-8 pb-8 space-y-2 md:space-y-5">
          <PageTitle>{content.title}</PageTitle>
          <p className="text-lg leading-7 text-gray-500 ">
            {/* {siteMetadata.description}
            <br /> */}
            {content.body}
          </p>
        </div>

        {/* <h2 className="mt-10 text-2xl font-extrabold leading-9 tracking-tight text-gray-700  sm:text-4xl sm:leading-10 md:text-5xl md:leading-10">
          What's new!
        </h2> */}
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
