import "../styles/globals.css";
import type { AppProps } from "next/app";
import { usePreserveScroll } from "../hooks/usePreserveScroll";

export default function App({ Component, pageProps }: AppProps) {
  usePreserveScroll();

  return <Component {...pageProps} />;
}
