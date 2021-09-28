/* eslint-disable react/destructuring-assignment */
import Link from "next/link";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 3;

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-center">
        <ul className="flex flex-row">
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
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
      </nav>
    </div>
  );
};
