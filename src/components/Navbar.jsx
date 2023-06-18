import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

const Navbar = () => {
  //   const router = useRouter();
  console.log("2");
  return (
    <nav className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="" href="/">
              <Image src="zet.svg" width={85} height={50} alt="Zet Logo" />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              //   className={
              //     router.pathname === "/"
              //       ? "text-[#2075f0] text-xl px-3 py-2 rounded-md"
              //       : "text-black text-xl px-3 py-2 rounded-md"
              //   }
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-xl"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-xl"
              href="/about"
            >
              Partner With Us
            </Link>
            <Link
              className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-xl"
              href="/about"
            >
              Blog
            </Link>
            <button className="bg-[#2075f0] w-[127] h-[30] px-2 rounded-md text-white">
              Download Zet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
