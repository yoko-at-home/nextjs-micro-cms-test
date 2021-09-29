/* eslint-disable react/jsx-handler-names */
/* eslint-disable import/no-default-export */
import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { Card } from "src/components/Card";
import { CardModal } from "src/components/Card";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { productData } from "src/data/productData";
import { siteMetadata } from "src/data/siteMetadata";

const Products = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });
  const [selectedItem, setSelectedItem] = useState();

  const handleOnClick = useCallback(
    (d) => {
      const result = productData.find(({ title }) => {
        return title === d.title;
      });
      // console.log(result);
      setSelectedItem(result);
      open();
    },
    [open]
  );

  return (
    <Layout>
      <PageSEO title={`Products- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Products</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">Showcase your projects with a hero image (16 x 9)</p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap m-4">
            {productData.map((d) => {
              return (
                <button
                  // eslint-disable-next-line react/jsx-handler-names
                  onClick={() => {
                    return handleOnClick(d);
                  }}
                  description={d.description}
                  key={d.title}
                  href={d.href}
                  className="md:w-1/2 md"
                >
                  <Card
                    // key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    // href={d.href}
                  />
                </button>
              );
            })}
          </div>
          <Modal>
            <div className="bg-white px-10 py-30 rounded">
              <h1>会員登録がお済みのお客様は画像のタップからデータにアクセスできます。</h1>
              <p>
                <CardModal
                  // isOpen={d.key === selectedItem}
                  // key={result.title}
                  title={selectedItem?.title}
                  description={selectedItem?.description}
                  imgSrc={selectedItem?.imgSrc}
                  href={selectedItem?.href}
                />
              </p>
              <div className="flex justify-between">
                <p>会員登録されていない他は...より会員登録をお願いします。</p>
                <button
                  onClick={close}
                  className="rounded p-1 text-center font-medium text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 mb-3 lg:mr-3 lg:text-2xl lg:py-2 hover:text-gray-100"
                >
                  閉じる
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
