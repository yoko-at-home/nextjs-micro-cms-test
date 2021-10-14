import Link from "next/link";
import { useRouter } from "next/router";

export const Pagination = (props) => {
  const PER_PAGE = 5;

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const router = useRouter();

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5 flex justify-center">
      <nav className="flex flex-row">
        <div>
          {router.asPath === "/news" ? null : (
            <Link href={`/news`}>
              <a className="mr-5 text-xs font-bold text-gray-300 px-3 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 p-3 rounded">
                News Top
              </a>
            </Link>
          )}
        </div>
        <ul className="flex">
          {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => {
            return (
              <li key={index}>
                <Link href={`/news/page/${number}`}>
                  <a className="mr-6 p-3 text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 rounded">
                    {number}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div>
          {router.asPath === "/news" ? null : (
            <Link href={`/news`}>
              <a className="text-gray-300 px-3 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 p-3 rounded">
                News Top
              </a>
            </Link>
          )}
        </div> */}
      </nav>
    </div>
  );
};
