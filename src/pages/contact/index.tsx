/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { useRouter } from "next/router";
// import { SubmitHandler, useForm } from "react-hook-form";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Contact: NextPage = () => {
  const router = useRouter();
  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    router.push("/success");

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        to: process.env.NEXT_PUBLIC_SENDGRID_TO_ADDRESS,
        name: event.target.fullname.value,
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
      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">お問い合わせページです。</p>
        </div>
        <div className="container sm:p-6 lg:px-20 mt-10 sm:mt-0">
          <div className="mt-5 md:mt-0">
            <form onSubmit={handleRegisterUser}>
              <div className="mb-3">
                <label htmlFor="fullname">お名前</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="お名前"
                  required
                  minLength={3}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">メールアドレス</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="送信可能なメールアドレス形式：name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">問合せ内容</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows={3}
                  required
                  minLength={20}
                ></textarea>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="font-medium shadow-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-50  bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-700 focus:to-yellow-400 rounded-md text-gray-200"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
