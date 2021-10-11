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
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 ">会員登録ページです。</p>
        </div>
        <div className="container py-12">
          {!user ? (
            <Link href="/api/auth/login">
              <a className="mt-12">Login</a>
            </Link>
          ) : (
            <div className="flex justify-between w-48">
              <Link href="/api/auth/logout">
                <a className="mt-12">Logout</a>
              </Link>

              <Link href="/members/profile">
                <a className="mt-12">プロフィール</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Members;
