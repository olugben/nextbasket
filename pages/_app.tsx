import type { AppProps } from "next/app";
import "../pages/globals.css";
import { mt } from "../fonts";
import { Provider } from "react-redux";

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mt.variable} font-mont w-full overflow-hidden`}>
      <Component {...pageProps} />{" "}
    </main>
  );
}

export default MyApp;
