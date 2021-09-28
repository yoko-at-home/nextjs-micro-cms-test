import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Home: NextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <Layout>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <h2>Home</h2>
      <button onClick={handleClick}>Button</button>
    </Layout>
  );
};

export default Home;
