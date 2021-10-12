/* eslint-disable @next/next/no-img-element */
import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/layout";
import { MemberRegi } from "src/components/MemberRegi";
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

                <Link href="/members/profile">
                  <a className="mb-5 py-3 px-10 text-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 rounded tracking-widest">
                    プロフィール
                  </a>
                </Link>
              </div>
              メンバー登録のコンポーネントをここにインポート
            </>
          )}
        </div>
        <MemberRegi />
      </div>
    </Layout>
  );
};

export default Members;
