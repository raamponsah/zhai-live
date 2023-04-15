import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Josefin_Sans } from "@next/font/google";
import Head from "next/head";

const font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Zhai Foundation is a non-profit organization committed to improving the lives of disadvantaged and marginalized communities in Africa. Our causes include education, health, widowhood support, and orphanage support."
        />
        <meta
          name="keywords"
          content="Zhai Foundation, non-profit, Africa, education, health, widowhood support, orphanage support"
        ></meta>
          <meta name="author" content="Zhai Foundation"/>
        <title>Zhai Foundation | Empowering Communities in Africa</title>
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
