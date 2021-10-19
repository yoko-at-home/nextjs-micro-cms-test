/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @next/next/no-img-element */
import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import { FormMemberRegistration } from "src/components/FormMemberRegistration";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { Layout } from "src/layout";

const Members: NextPage = () => {
  const { user } = useUser();

  return (
    <Layout theme="main">
      <PageSEO title={`Members- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Members</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container py-12">
          {!user ? (
            <div>
              <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <p className="text-lg leading-7 text-gray-500 ">
                  非公開の商品情報のご提供には、会員登録をお願いしております。以下のログインリンクからメールアドレスを認証して、会員登録の申請をお願いします。
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/api/auth/login">
                  <a className="mb-5 py-1 px-5 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 rounded tracking-widest">
                    Login
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-end">
                <Link href="/api/auth/logout">
                  <a className="mb-5 py-1 px-5 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 rounded tracking-widest">
                    Logout
                  </a>
                </Link>

                {/* <Link href="/members/profile">
                  <a className="mb-5 py-1 px-5 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 rounded tracking-widest">
                    プロフィール
                  </a>
                </Link> */}
              </div>
              {/* {!user ? ( //ここにロールを渡す*/}
              <FormMemberRegistration />
              {/* ) : (
                <div className="mt-10">
                  会員登録ありがとうございます。{user.name}{" "}
                  様のステータスは「承認ユーザー」です。本サイトの全ての商品情報にアクセスいただけます。
                </div>
              )} */}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
