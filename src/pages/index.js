import { TutorialList } from "../components/TutorialList";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Dateview from "../components/date";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

new Date();

const DynamicHero = dynamic(() =>
  import("../components/Hero").then((mod) => mod.Hero)
);

export default function Home({ allPostsData }) {
  const router = useRouter();
  return (
    <>
      <TutorialList />
      <DynamicHero />
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
