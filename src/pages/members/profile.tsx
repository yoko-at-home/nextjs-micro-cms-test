import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import { LayoutSub } from "src/components/layout";
// import { PageTitle } from "src/components/PageTitle";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <LayoutSub>
        <div>{error.message}</div>
      </LayoutSub>
    );

  return (
    user && (
      <LayoutSub>
        <section className="mt-72 py-16 bg-gray-600">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <div>
                        <Image
                          className="rounded-full"
                          src={user.picture as string}
                          alt={user.name as string}
                          width={70}
                          height={70}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">{user.name}</h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">{user.email}</i> */}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {user.email}
                  </div>
                </div>
              </div>
              <Link href="/members">
                <a className="p-4 whitespace-nowrap text-gray-700 text-right"> to members top</a>
              </Link>
            </div>
          </div>
        </section>
      </LayoutSub>
    )
  );
}
