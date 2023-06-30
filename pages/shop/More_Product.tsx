/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { product } from "../api/data/product";
import clsx from "clsx";

const More_Product = () => {
  return (
    <section className="bg-dark2 font-Montserrat text-white">
      <div className="w-11/12 px-3 mx-auto py-20">
        <div className="text-center">
          <h1
            className={clsx(
              "text-2xl font-semibold my-5 w-2/6 mx-auto",
              "md:text-5xl"
            )}
          >
            Produk Lainnya
          </h1>
        </div>
        <div
          className={clsx("grid grid-cols-1 gap-10 mt-20", "md:grid-cols-3")}
        >
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className={clsx(
                  "flex flex-col items-center hover:scale-105 duration-200 transition-all ",
                  "md:flex-row"
                )}
              >
                <img src={item.image} alt="" className="mx-5 w-40 rounded-md" />
                <div className="text-lg">
                  <h2 className="my-3 font-semibold">{item.name}</h2>
                  <p className="my-3">
                    Rp.{" "}
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                  <Link href={`product/${item.name}`}>
                    <button className="bg-white px-5 py-1 text-dark2 my-3 rounded-md w-full text-base font-semibold hover:scale-105 transition-all duration-200">
                      Selengkapnya
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default More_Product;
