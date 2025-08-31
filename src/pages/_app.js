import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Analytics />
  <Component {...pageProps} />
  </>
  );
}

export default MyApp;
