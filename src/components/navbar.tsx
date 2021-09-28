import Link from "next/link";
import type { VFC } from "react";
import { useState } from "react";
import { CustomLink } from "src/components/CustomLink";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/about", label: "About" },
  { href: "/about", label: "About" },
  { href: "/about", label: "About" },
  { href: "/about", label: "About" },
];

export const NavBarDesktop: VFC = () => {
  return (
    <nav className="text-center p-3 bg-yellow-100 max-h-12 hidden sm:block">
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="p-1 text-center font-medium text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-purple-600 focus:to-yellow-600 opacity-80 mr-1 lg:mr-3  hover:text-gray-100 whitespace-nowrap">
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export const NavBarMobile: VFC = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [navShow, setNavShow] = useState(false);

  const handleOnToggleNav = () => {
    setNavShow((status) => {
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
      <div className="sm:hidden absolute top-6 left-6">
        <button
          type="button"
          className="w-8 h-8 ml-1 mr-1 rounded"
          aria-label="Toggle Menu"
          onClick={handleOnToggleNav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-200 ">
            {navShow ? (
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
          className={`fixed w-full h-full top-24 right-0 bg-gray-300  opacity-85 z-10 transform ease-in-out duration-300 ${
            navShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed w-full h-full cursor-auto focus:outline-none"
            onClick={handleOnToggleNav}
          ></button>
          <nav className="text-center mt-40">
            {items.map(({ href, label }) => {
              return (
                <CustomLink key={href} href={href} onClick={handleOnToggleNav}>
                  <a className="flex flex-col text-2xl tracking-widest  p-1 font-medium text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 focus:from-green-700 focus:to-yellow-500 opacity-80 hover:text-gray-100 text-center">
                    {label}
                  </a>
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
