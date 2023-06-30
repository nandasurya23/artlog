/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";

const About = () => {
  return (
    <section
      id="about"
      className={clsx(
        "bg-gradient-to-br from-dark to-dark2 font-Montserrat text-white py-20"
      )}
    >
      <div className={clsx("w-11/12 px-3 mx-auto")}>
        <h1 className={clsx("text-center text-2xl font-bold", "md:text-5xl")}>
          Visi & Misi
        </h1>
        <p className={clsx("py-10 text-center font-medium text-lg")}>
          Menjadi pusat unggulan sebagai platform penyedia layanan desain dengan
          menciptakan visualisasi merek yang menarik dengan akses efektif bagi
          seluruh konsumen.
        </p>
        <h1 className={clsx("text-center text-2xl font-bold", "md:text-5xl")}>
          Misi:
        </h1>
        <p className={clsx("py-10 text-center font-medium text-lg")}>
          • Memanfaatkan ide ide yang kreatif dalam pembuatan desain untuk
          mencapai tujuan dan kepuasan konsumen <br />
          • Memberikan kemudahan akses dengan harga bersahabat serta konsultasi
          bagi konsumen <br />• Mempekerjakan SDM berkualitas dengan bidang
          desain grafis yang sudah berpengalaman
        </p>
      </div>
    </section>
  );
};

export default About;
