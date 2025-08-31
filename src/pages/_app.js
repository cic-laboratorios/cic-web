import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Analytics />
    <Component {...pageProps} />
    <SpeedInsights />
  </>
  );
}

export default MyApp;
