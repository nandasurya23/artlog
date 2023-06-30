/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className={clsx("bg-dark2 w-full font-Montserrat text-white")}
    >
      <div className={clsx("container px-3 mx-auto py-20")}>
        <div
          className={clsx(
            "flex flex-col items-start justify-between",
            "md:flex-row md:items-center"
          )}
        >
          <div className={clsx("flex flex-col w-full")}>
            <div className={clsx("flex flex-col items-center",'md:flex-row')}>
              <img
                src="https://ik.imagekit.io/lshkgi0dm/trixie_logo_putih.svg?updatedAt=1680079612664"
                alt=""
                className={clsx("w-16", "md:w-24")}
              />
              <img
                src="https://ik.imagekit.io/lshkgi0dm/logo_wariorr_1-removebg-preview_1.svg?updatedAt=1681029263827"
                alt=""
                className="w-20"
              />
            </div>{" "}
            <div className={clsx("w-1/4 bg-gray2 p-[1px] mt-7")}></div>
            <p className={clsx("text-lg font-medium mt-5 w-1/6", "md:text-xl")}>
              Kapal, Badung 80351, Bali, Indonesia
            </p>
          </div>
          <div className={clsx("flex flex-col w-1/4")}>
            <h3 className={clsx("my-5 text-lg")}>Menu</h3>
            <ul className={clsx("space-y-2")}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about" scroll={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="#help">Help</Link>
              </li>
            </ul>
          </div>
          <div className={clsx("flex flex-col w-1/4")}>
            <h3 className={clsx("my-5 text-lg")}>Temukan Kami</h3>
            <ul className={clsx("space-y-2")}>
              <li>
                <a
                  href="https://www.instagram.com/trixiefootwear/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Trixie_Footwear?t=kn3zE7oZIjxV2bABC7Y2vA&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me//085896131604"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("w-full bg-gray2 p-[1px] mt-10")}></div>
        <p className={clsx("text-center text-sm mt-5")}>
          ©Trixie Footwear 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
