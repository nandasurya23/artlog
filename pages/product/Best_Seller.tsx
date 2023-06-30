/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { product } from "../api/data/product";
import Link from "next/link";
import clsx from "clsx";

const Best_Seller = () => {
  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className={clsx(
        "bg-gradient-to-br from-dark to-dark2 font-Montserrat text-white pt-10 pb-20 "
      )}
    >
      <div className={clsx("w-11/12 px-3 mx-auto")}>
        <h1
          className={clsx(
            "text-2xl font-bold text-center py-5 mb-7",
            "md:text-4xl"
          )}
        >
          Produk Terlaris Trixie Footwear
        </h1>
        {/* SLIDER */}
        <Slider {...settings}>
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className={clsx(
                  "px-3 py-5 bg-white w-1/6 rounded-md hover:scale-95 duration-200 transition-all"
                )}
              >
                <img
                  src={item.image}
                  alt=""
                  className={clsx("rounded-md object-contain mx-auto")}
                />
                <div className={clsx("text-center mt-3")}>
                  <h3 className={clsx("text-dark font-semibold")}>
                    {item.name}
                  </h3>
                  <p className={clsx("text-dark font-normal")}>
                    Rp.
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
                <Link href={`product/${item.name}`}>
                  <div
                    className={clsx("flex justify-center items-center mt-3")}
                  >
                    <button
                      className={clsx(
                        "py-2 w-36 bg-dark2 font-medium text-base rounded-md text-center"
                      )}
                    >
                      Selengkapnya
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Best_Seller;
