/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Contact: NextPage = () => {
  const handleRegisterUser = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };
  return (
    <Layout>
      <PageSEO title={`Contact- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Contact</PageTitle>
      <div className="mt-10 sm:mt-0">
        {/* <div className="md:grid md:grid-cols-2 md:gap-6"> */}
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleRegisterUser}>
            <div className="mb-3">
              <label htmlFor="email">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">問合せ内容</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                rows={3}
              ></textarea>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="font-medium shadow-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-50  bg-gradient-to-r from-gray-400 to-gray-600 focus:from-purple-700 focus:to-yellow-400 rounded-md text-gray-200"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Contact;
