import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Artlog</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/lshkgi0dm/arr.png?updatedAt=1688135387463"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
