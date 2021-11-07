import Link from "next/link";
import type { VFC } from "react";
import { useState } from "react";
import { CustomLink } from "src/components/CustomLink";

const items = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/application", label: "Application" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/members", label: "Memebers" },
];

export const NavBarDesktop: VFC = () => {
  return (
    <nav className="hidden justify-center mt-40 text-center sm:flex">
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="p-1 mr-1 font-medium text-center text-gray-300 hover:text-gray-100 whitespace-nowrap bg-gradient-to-r from-gray-400 focus:from-purple-600 to-gray-500 focus:to-yellow-600 opacity-80 sm:px-4 lg:py-2 lg:mr-3 lg:text-2xl">
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export const NavBarMobile: VFC = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const handleOnToggleNav = () => {
    setIsNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <>
      {/* <div className="sm:hidden absolute top-6 left-6"> */}
      <div className="fixed right-5 bottom-10 px-2 pt-1 bg-gray-400 bg-opacity-80 rounded sm:hidden">
        <button
          type="button"
          className="mr-1 ml-1 w-8 h-8 rounded"
          aria-label="Toggle Menu"
          onClick={handleOnToggleNav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-200 ">
            {isNavShow ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
        <div
          className={`fixed w-full h-full top-0 right-0 bg-purple-50 z-10 transform ease-in-out duration-300 ${
            isNavShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed -top-7 w-full h-4/5 cursor-auto focus:outline-none"
            onClick={handleOnToggleNav}
          ></button>
          <nav className="mt-40 text-center">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleOnToggleNav}
                  className="flex flex-col p-1 py-3 pr-3 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 bg-gradient-to-r from-gray-400 focus:from-green-700 to-gray-500 focus:to-yellow-500 opacity-90 sm:px-4"
                >
                  {label}
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
