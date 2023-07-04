/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import { FaClipboardCheck } from "react-icons/fa";

const Testimony = () => {
  return (
    <section
      id="testimony"
      className={clsx(
        "bg-gradient-to-tr from-dark to-dark2 font-Montserrat text-white"
      )}
    >
      <div className={clsx("w-11/12 px-3 mx-auto py-20")}>
        <h1 className={clsx("text-center font-bold text-2xl", "md:text-5xl")}>
          Layanan Kami
        </h1>
        <div className={clsx("grid grid-cols-1 gap-5 md:grid-cols-3 mt-20")}>
          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <FaClipboardCheck className="mx-auto" size={100} />
              <h4 className={clsx("font-semibold text-xl my-5 md:text-2xl")}>
                Desain Grafis
              </h4>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <FaClipboardCheck className="mx-auto" size={100} />
              <h4 className={clsx("font-semibold text-xl my-5 md:text-2xl")}>
                Desain Undangan
              </h4>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col hover:scale-105 duration-200 transition-all"
            )}
          >
            <div className={clsx("text-center")}>
              <FaClipboardCheck className="mx-auto" size={100} />
              <h4 className={clsx("font-semibold text-xl my-5 md:text-2xl")}>
                Desain Web
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
