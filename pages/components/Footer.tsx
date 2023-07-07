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
            <div className={clsx("flex flex-col items-center", "md:flex-row")}>
              <img
                src="https://ik.imagekit.io/lshkgi0dm/arr.png?updatedAt=1688135387463"
                alt=""
                className={clsx("w-16", "md:w-24")}
              />
            </div>{" "}
            <div className={clsx("w-1/4 bg-gray2 p-[1px] mt-7")}></div>
            <p
              className={clsx("text-base font-medium mt-5 w-1/6", "md:text-xl")}
            >
              <a href="https://www.google.com/maps/place/Gg.+Celuring+6-7,+Kesiman,+Kec.+Denpasar+Tim.,+Kota+Denpasar,+Bali+80239/@-8.6620125,115.2439225,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd24065c1735041:0x4e5af80b868e0c3c!8m2!3d-8.6620178!4d115.2464974!16s%2Fg%2F11c6783fs8?entry=ttu">
                Gg. Celuring 6-7, Kesiman
              </a>
            </p>
          </div>
          <div className={clsx("flex flex-col w-1/4")}>
            <h3 className={clsx("my-5 text-lg")}>Menu</h3>
            <ul className={clsx("space-y-2")}>
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="#about" scroll={false}>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#testimony">Layanan</Link>
              </li>
              <li>
                <Link href="#help">Kontak</Link>
              </li>
            </ul>
          </div>
          <div className={clsx("flex flex-col w-1/4")}>
            <h3 className={clsx("my-5 text-lg")}>Temukan Kami</h3>
            <ul className={clsx("space-y-2")}>
              <li>
                <a
                  href="https://www.instagram.com/artlog.crt/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100090565284136 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/PJ27R2LOQBJUM1"
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
          ©Artlog 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
