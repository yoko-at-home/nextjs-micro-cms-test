/* eslint-disable import/no-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from "next";
import type { VFC } from "react";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const items = [
  {
    id: 1,
    title: "aaaaライブラリ",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit ?",
  },
  {
    id: 2,
    title: "bbb",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit ?",
  },
  {
    id: 3,
    title: "ccc",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit ?",
  },
  {
    id: 4,
    title: "ddd",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit ?",
  },
  {
    id: 5,
    title: "eee",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit ?",
  },
  {
    id: 6,
    title: "fff",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.amet consectetur adipisicing elit.amet consectetur adipisicing elit.amet consectetur adipisicing elit.aaaaAAAAAA AAAAAAA AAAAAAAAAA ?",
  },
];

type ItemType = {
  id?: number;
  title: string;
  description: string;
};

const AppCard: VFC<ItemType> = (props) => {
  return (
    <div key={props.id}>
      <div
        className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
        style={{ backgroundImage: "url(https://source.unsplash.com/1600x500/?plant,flower)" }}
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="absolute top-10 right-5 left-0 mx-5 mt-2 flex justify-between items-center">
          <a
            href="#"
            className="cursor-pointer text-xs rounded bg-indigo-600 text-black px-5 py-2 uppercase hover:bg-white bg-opacity-60 hover:text-indigo-600 transition ease-in-out duration-500"
          >
            {props.title}
          </a>
        </div>
        <main className="p-5 z-10">
          <div className="cursor-pointer p-1 h-28 text-md tracking-tight font-medium leading-7 font-regular text-white hover:text-gray-800 hover:bg-gray-50 hover:bg-opacity-40 rounded hover:font-black word-break overflow-y-scroll">
            {props.description}
          </div>
        </main>
      </div>
    </div>
  );
};

const Application: NextPage<ItemType> = () => {
  return (
    <Layout>
      <PageSEO title={`Application- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Application</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {items.map((item, index) => {
          return <AppCard key={index} id={item.id} title={item.title} description={item.description} />;
        })}
      </div>
    </Layout>
  );
};

export default Application;
