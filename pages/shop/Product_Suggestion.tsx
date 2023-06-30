import React from "react";
import { BiEnvelope } from "react-icons/bi";
import clsx from "clsx";
import Link from "next/link";

const Product_Suggestion = () => {
  return (
    <section id="help" className="bg-dark2 font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <div className="text-center">
          <h2
            className={clsx(
              "text-2xl font-semibold my-5 w-1/2 mx-auto",
              "md:text-5xl"
            )}
          >
            Saran Produk
          </h2>
          <p className="w-1/2 mx-auto mt-14">
            Jika kamu punya saran sepatu yang kamu inginkan bisa langsung
            mengisi kotak saran yang ada dibawah, Jangan lupa follow instagram
            kami, have fun :)
          </p>
        </div>
        <a
          href="mailto:aldiariasa81@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center mt-10 space-x-6 text-xl font-semibold tracking-wider hover:scale-105 duration-200 transition-all">
            <BiEnvelope size={60} />
            <Link href={"mailto:footwear.trixie.gmail.com"}>
              <h1>footwear.trixie.gmail.com</h1>
            </Link>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Product_Suggestion;
