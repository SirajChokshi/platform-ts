import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Mono } from "next/font/google";
import { Noto_Sans_Display } from "next/font/google";
import "highlight.js/styles/github.css";

const DM = DM_Mono({
  subsets: ["latin"],
  weight: "300",
});

const Noto = Noto_Sans_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fonts-mono: ${DM.style.fontFamily};
          --fonts-sans: ${Noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
