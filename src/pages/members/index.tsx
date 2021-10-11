/* eslint-disable @next/next/no-img-element */
import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layout";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";

const Members: NextPage = () => {
  const { user } = useUser();
  return (
    <Layout>
      <PageSEO title={`Members- ${siteMetadata.author}`} description={siteMetadata.description} />

      <PageTitle>Members</PageTitle>
      <div className="divide-y divide-gray-200 ">
        <div className="container py-12">
          {!user ? (
            <div>
              <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <p className="text-lg leading-7 text-gray-500 ">
                  Webサイトのすべての商品情報にアクセスするには、会員登録をお願いしております。以下のログインリンクからメールアドレスを認証して、会員登録の申請をお願いします。
                </p>
              </div>
              <Link href="/api/auth/login">
                <a className="mb-5 p-5 bg-gray-300">Login</a>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between">
                <Link href="/api/auth/logout">
                  <a className="p-5 bg-gray-300">Logout</a>
                </Link>

                <Link href="/members/profile">
                  <a className="p-5 bg-gray-300">プロフィール</a>
                </Link>
              </div>
              メンバー登録のコンポーネントをここにインポート
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
