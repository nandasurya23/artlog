import React from "react";
import clsx from "clsx";

const Hero_Section_Shop = () => {
  return (
    <section className="bg-dark2 font-Montserrat text-white bg_shop">
      <div className="w-11/12 px-3 mx-auto py-40">
        <div className="text-center ">
          <h1 className={clsx("text-2xl font-semibold my-5", "md:text-5xl")}>Temukan Sepatu Impianmu</h1>
          <p className="text-lg w-1/2 mx-auto mt-7">
            Cari Sepatu Lokal dan Vintage Impianmu, langsung pesan jangan ragu
            dengan kualitas produk kami!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section_Shop;
