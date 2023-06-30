/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { product } from "../api/data/product";
import clsx from "clsx";

export default function view() {
  const { query } = useRouter();
  const { slug } = query;
  const data = product.find((x) => x.slug === slug);
  if (!data) {
    return <div>PRODUK TIDAK DITEMUKAN</div>;
  }

  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={clsx("bg-dark2 font-Montserrat text-white w-full")}>
        <div className={clsx("w-11/12 px-3 mx-auto py-32 ", "md:py-52")}>
          <div
            className={clsx(
              "flex flex-col justify-center items-center",
              "md:flex-row"
            )}
          >
            <div
              className={clsx(
                "flex flex-col w-full items-center justify-center",
                "md:flex-row md:w-1/2"
              )}
            >
              <div
                className={clsx("grid grid-cols-1 mb-10", "md:w-full md:mb-0")}
              >
                <Slider {...settings}>
                  <img
                    src={data.image}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                  <img
                    src={data.image2}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                  <img
                    src={data.image3}
                    alt=""
                    width={10}
                    className="rounded-md"
                  />
                </Slider>
              </div>
            </div>

            <div className={clsx("flex w-full flex-col space-y-4 self-start")}>
              <h1 className={clsx("text-2xl md:text-3xl font-semibold")}>
                {data.name}
              </h1>
              <hr />
              <p className={clsx("text-2xl md:text-3xl")}>
                {" "}
                Rp.{" "}
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <hr />
              <p className={clsx("space-x-8 text-lg md:text-xl")}>
                Ukuran :{" "}
                {data.size.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}
              </p>
              <hr />
              <p className={clsx("text-lg md:text-xl")}>{data.desc}</p>
              <div className={clsx("flex justify-center", "md:justify-end")}>
                <button
                  className={clsx(
                    "mt-3 bg-white w-full px-10 py-1.5 text-lg text-dark rounded-md font-medium hover:scale-105 transition-all duration-200 md:w-1/2"
                  )}
                >
                  <a
                    href="https://wa.me/+6285896131604?text=HAI%20KAK%20SAYA%20INGIN%20PESAN%20SEPATU%20KAK%20.%20APAKAH%20BARANGNYA%20MASIH%20TERSEDIA%20KAK%20%3F%3F"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan Sekarang
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
