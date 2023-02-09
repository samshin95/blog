import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import Cookies from "universal-cookie";
import { firstvisit, oldvisit } from "../components/Visitors";
import { ScrollToTopButton } from "../components/Features";
import { useRouter } from "next/router";

const DynamicFooters = dynamic(() =>
  import("../components/Footers").then((mod) => mod.Footers)
);

const date = new Date();
const cookies = new Cookies();

if (cookies.get("todayVisit") == "yes") {
} else {
}

if (cookies.get("todayVisit") == date.getDate()) {
} else if (cookies.get("todayVisit") == undefined) {
  console.log(cookies.get("todayVisit"));
  cookies.set("todayVisit", date.getDate());
  firstvisit();
} else {
  oldvisit(cookies.get("visiter"));
  cookies.set("todayVisit", date.getDate());
}

// if (cookies.get("visiter") > 0) {
//   cookies.set("visiter", 1 + parseInt(cookies.get("visiter")));
//   oldvisit(cookies.get("visiter"));
// } else {
//   cookies.set("visiter", 1);
//   firstvisit();
// }

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sam Shin</title>
        <meta name="application-name" content="Sam Shin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sam Shin" />
        <meta name="description" content="The blog of Sam Shin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3b82f6" />

        <link rel="apple-touch-icon" href="/images/icons8-gear-64.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/icons8-gear-64.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons8-gear-64.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/icons8-gear-64.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons8-gear-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons8-gear-64.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/static/favicon.ico" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://samshin95.net" />
        <meta name="twitter:title" content="Sam Shin" />
        <meta name="twitter:description" content="Blog of Sam Shin" />
        <meta
          name="twitter:image"
          content="https://samshin95.net/images/icons8-gear-64.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sam Shin" />
        <meta property="og:description" content="Blog of Sam Shin" />
        <meta property="og:site_name" content="Sam Shin" />
        <meta property="og:url" content="https://samshin95.net" />
        <meta
          property="og:image"
          content="https://samshin95.net/images/icons8-gear-64.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTopButton />
      <DynamicFooters />
    </>
  );
}

export default appWithTranslation(MyApp);
