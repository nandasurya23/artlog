/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";

const Testimony = () => {
  return (
    <section
      className={clsx(
        "bg-gradient-to-tr from-dark to-dark2 font-Montserrat text-white"
      )}
    >
      <div className={clsx("w-11/12 px-3 mx-auto py-20")}>
        <h1 className={clsx("text-center font-bold text-2xl", "md:text-5xl")}>
          TESTIMONI
        </h1>
        <div className={clsx("grid grid-cols-1 gap-5 md:grid-cols-3 mt-10")}>
          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <img
                src="https://ik.imagekit.io/js2tl91ey/Artikel_Trixie/testi/testi_1?ik-sdk-version=javascript-1.4.3&updatedAt=1671599688880"
                alt=""
                className={clsx("mx-auto rounded-full w-40 ")}
              />
              <h4 className={clsx("font-semibold my-5")}>Putu Riwan</h4>
              <p className={clsx("w-2/3 mx-auto ")}>
                Beli sepatu di trixie footwear dijamin barangnya aman sampai
                tujuan dan ori, yuk cintai produk lokal.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <img
                src="https://ik.imagekit.io/js2tl91ey/Artikel_Trixie/testi/testi2?ik-sdk-version=javascript-1.4.3&updatedAt=1671599899149"
                alt=""
                className={clsx("mx-auto rounded-full w-40")}
              />
              <h4 className={clsx("font-semibold my-5")}>Enji</h4>
              <p className={clsx("w-2/3 mx-auto")}>
                Produk dari Trixie Footwear sangat terjamin, respon dari owner
                ramah dan pengiriman juga sangat cepat.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <img
                src="https://ik.imagekit.io/js2tl91ey/Artikel_Trixie/testi/testi_fajar?ik-sdk-version=javascript-1.4.3&updatedAt=1671601609714"
                alt=""
                className={clsx("mx-auto rounded-full w-40")}
              />
              <h4 className={clsx("font-semibold my-5")}> Fajar Dwija </h4>
              <p className={clsx("w-2/3 mx-auto")}>
                Admin ramah, pengiriman cepat dan kualitas sepatu ori, top
                banget pokoknya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
