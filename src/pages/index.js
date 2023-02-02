import { Hero } from "../components/Hero";
import { TutorialList } from "../components/TutorialList";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Dateview from "../components/date";
import { useRouter } from "next/router";
import { firstvisit, oldvisit } from "../components/Visitors";
import Cookies from "universal-cookie";
import { ScrollToTopButton } from "../components/Features";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

new Date();
const cookies = new Cookies();

// cookies.set("visittoday", "yes", { path: "/", expires: Date.now });
if (cookies.get("visiter") > 0) {
  cookies.set("visiter", 1 + parseInt(cookies.get("visiter")));
  oldvisit(cookies.get("visiter"));
} else {
  cookies.set("visiter", 1);
  firstvisit();
}

export default function Home({ allPostsData }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>SamShin</title>
        <meta name="description" content="Sam Shin 辛" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:site_name" content="SamShin" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SamShin" />
        <meta property="og:description" content="Sam Shin 辛" />
      </Head>
      <ScrollToTopButton />
      <Hero />
      <TutorialList />
      {/* <RecentPosts /> */}
      {/* <Topics /> */}
      <div className="text-center pt-24 pb-16 text-gray-600">
        <h2 id="recentpost" className="text-5xl md:text-6xl">
          最新文章
        </h2>
      </div>
      <ul className="text-center">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link locale="zh" href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small>
              <Dateview dateISO={date} />
            </small>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "footer"])),
      allPostsData,
    },
  };
}
