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
      <DynamicHero />
      <TutorialList />
      <div className="text-center pt-24 pb-16 text-gray-600">
        <h2 id="recentpost" className="text-5xl md:text-6xl">
          最新文章
        </h2>
      </div>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
            <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div class="bg-white shadow-2xl rounded-lg py-4">
                <Link href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div class="p-5">
                  <Link href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </Link>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <Dateview dateISO={date} />
                  </p>
                  <Link
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Link href={`/posts/${id}`} className="group transition-colors">
              <Linkrticle className="space-y-2 rounded-xl p-4 transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dd className="text-sm font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 md:text-base">
                  <Dateview dateISO={date} />
                </dd>
                <div className="space-y-3 xl:col-span-3">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-xl md:text-2xl">
                    {title}
                  </h3>
                </div>
              </Linkrticle>
            </Link> */}
        </li>
      ))}
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
