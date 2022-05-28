import "../styles/globals.css";
import type { AppProps } from "next/app";

import { GameProvider } from "../contexts/game";
import { Footer, Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </GameProvider>
  );
}

export default MyApp;
