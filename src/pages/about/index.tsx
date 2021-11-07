import type { NextPage } from "next";
import Image from "next/image";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { AboutLayout } from "src/layout";

const About: NextPage = () => {
  return (
    <AboutLayout>
      <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex flex-col justify-between">
        <h1 className="mt-5 mb-5 text-2xl lg:text-4xl md:text-3xl font-semibold">玄川リサーチ</h1>
        <h2 className="mb-5 lg:mb-10 text-xl lg:text-3xl md:text-2xl font-semibold">Gen-Scent Research Laboratory</h2>
        <p className="text-lg"> Shimomeguro, Meguro, Tokyo, Japan</p>
        <div className="flex pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-xl whitespace-nowrap mr-5 font-semibold">事業内容</p>
          <div className="">
            <p>GC-MS[用ソフトウェア、データベース販売</p>
            <p>香り分析関連製品販売</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-5 font-semibold">ロゴマークについて</div>
          <div className="flex">
            <div className="mr-5">
              <Image src={"/static/images/logo.png"} alt="logo" width="50px" height="50px" />
            </div>
            <div>
              玄川の家紋をデザイン化したものです。
              <br />
              ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う 玄川ファミリーの思いが込められています。
            </div>
          </div>
        </div>
        <div className="mt-40 sm:mt-16 text-gray-100 text-left">
          <p>写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。</p>
        </div>
      </div>
    </AboutLayout>
  );
};

export default About;
