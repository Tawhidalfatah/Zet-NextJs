"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  {
    path: "Home",
    href: "/",
  },
  {
    path: "About Us",
    href: "/about",
  },

  {
    path: "Partner with Us",
    href: "/partner-with-us",
  },
  {
    path: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(pathname);

  return (
    <nav className="border border-b-2 relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex mx-10 items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/zet.svg" width={85} height={50} alt="Zet Logo" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center space-x-4">
              {navLinks.map(({ path, href }) => {
                const isActive = pathname.endsWith(href);
                return (
                  <li key={path}>
                    <Link
                      className={isActive ? "active" : "inactive"}
                      href={href}
                    >
                      {path}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button className="bg-[#2075f0] w-[127] h-[32] p-2 rounded-md text-white">
                  Download Zet
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
            >
              {isMobileMenuOpen ? (
                <RxCross1 size={28} />
              ) : (
                <RxHamburgerMenu size={28} />
              )}
            </button>
            {isMobileMenuOpen && (
              <div className="absolute left-0 top-20 z-20 bg-white w-full">
                <ul className="flex flex-col gap-20 text-center">
                  {navLinks.map(({ path, href }) => {
                    const isActive = pathname.endsWith(href);
                    return (
                      <li key={path}>
                        <Link
                          className={isActive ? "active" : "inactive"}
                          href={href}
                        >
                          {path}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link href="/download" className="inactive">
                      Download ZET
                    </Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=in.onecode.app"
                    >
                      <Image
                        className="mx-auto"
                        src="/googleplay.svg"
                        alt="Google Play Download"
                        width={120}
                        height={35}
                      ></Image>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
