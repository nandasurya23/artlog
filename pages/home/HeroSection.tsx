/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
const HeroSection = () => {
  return (
    <>
      <section id="home" className={clsx("bg-dark2 w-full bg_hero")}>
        <div
          className={clsx(
            "w-11/12 px-3 mx-auto pb-20 pt-20 font-Montserrat text-white md:pt-64 md:pb-44"
          )}
        >
          <div className={clsx("flex flex-col items-center")}>
            <h1
              className={clsx(
                "font-extrabold text-3xl leading-normal tracking-widest text-center mt-5",
                "md:text-6xl md:text-center md:mt-0"
              )}
            >
              Artlog
            </h1>
            <p
              className={clsx(
                "text-center mt-5 font-normal text-base leading-normal ",
                "md:text-2xl"
              )}
            >
              Artlog merupakan startup desain yang sedang merevolusi dunia
              kreativitas. Kami adalah tim bersemangat yang terdiri dari tim
              berbakat dan pengembang kreatif dengan satu tujuan menghadirkan
              desain yang menakjubkan dan solusi yang inovatif.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
