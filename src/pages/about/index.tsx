import type { NextPage } from "next";
import Image from "next/image";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const About: NextPage = () => {
  return (
    <div
      style={{
        background: "center/cover no-repeat url('/static/images/laurel.png')",
      }}
      className="text-gray-100"
    >
      <Layout>
        <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
        <div className="flex flex-col justify-between">
          <PageTitle>玄川リサーチ</PageTitle>
          <h2 className="mb-5 text-xl font-semibold md:text-2xl lg:mb-10 lg:text-3xl">Gen-Scent Research Laboratory</h2>
          <p className="text-lg"> Shimomeguro, Meguro, Tokyo, Japan</p>
          <div className="container flex pt-6 pb-8 space-y-2 md:space-y-5">
            <p className="mr-5 text-xl font-semibold whitespace-nowrap divide-y divide-gray-200">事業内容</p>
            <div className="">
              <p>GC-MS[用ソフトウェア、データベース販売</p>
              <p>香り分析関連製品販売</p>
            </div>
          </div>
          <div className="container flex-1">
            <div className="mb-5 font-semibold">ロゴマークについて</div>
            <div className="flex">
              <div className="mr-5">
                <Image src={"/static/images/logo.png"} alt="logo" width="50px" height="50px" />
              </div>
              <div className="">
                玄川の家紋をデザイン化したものです。
                <br />
                ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                玄川ファミリーの思いが込められています。
              </div>
            </div>
          </div>
          <div className="container mt-40 text-left text-gray-100 divide-y divide-gray-200 sm:mt-16">
            <p>写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
