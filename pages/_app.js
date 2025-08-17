import "@/styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DocsMorpher</title>
        <meta name="description" content="DocsMorpher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/icons/Favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
