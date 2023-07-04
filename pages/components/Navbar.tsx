import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={clsx(
        "box-border bg-prime-5/50 px-3 py-6 fixed w-full z-50 shadow-xl backdrop-filter backdrop-blur-2xl "
      )}
    >
      <div
        className={clsx(
          "mx-auto flex flex-wrap w-full justify-between items-center",
          "md:w-11/12 md:flex-nowrap "
        )}
      >
        <div
          className={clsx(
            "text-white text-xl font-bold flex items-center w-1/2"
          )}
        >
          <img
            src="https://ik.imagekit.io/lshkgi0dm/arr.png?updatedAt=1688135387463"
            alt=""
            className={clsx("w-10", "md:w-20")}
          />
        </div>
        <FiMenu
          className={clsx("block h-6 w-6 cursor-pointer", "md:hidden")}
          color="white"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block w-full mt-5 md:hidden" : "hidden md:mt-0"
          } md:flex  md:items-center md:w-auto`}
        >
          <ul
            className={clsx(
              "text-white mt-5 space-y-3",
              "md:space-y-0 md:mt-0 md:flex"
            )}
          >
            <li
              className={clsx(
                "mx-5 hover:text-gray2 cursor-pointer transition-all duration-200 hover:scale-110"
              )}
            >
              <Link href="/">Beranda</Link>
            </li>
            <li
              className={clsx(
                "mx-5 hover:text-gray2 cursor-pointer transition-all duration-200 hover:scale-110 "
              )}
            >
              <Link href="#about" scroll={false}>
                Tentang Kami
              </Link>
            </li>
            <li
              className={clsx(
                "mx-5 hover:text-gray2 cursor-pointer transition-all duration-200 hover:scale-110"
              )}
            >
              <Link href="#testimony" scroll={false}>
                Layanan
              </Link>
            </li>
            <li
              className={clsx(
                "mx-5 hover:text-gray2 cursor-pointer transition-all duration-200 hover:scale-110"
              )}
            >
              <Link href="#footer" scroll={false}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
