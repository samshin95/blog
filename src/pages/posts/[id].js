import Header from "../../components/Header";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { Footers } from "../../components/Footers";

export default function Post({ postData }) {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="py-20 md:py-32">
          <Head>
            <title>{postData.title}</title>
          </Head>
          <div className="text-6xl font-semibold tracking-widest uppercase dark:text-gray-400">
            {postData.title}
          </div>
          <br />
          <div className="text-xl tracking-widest dark:text-gray-400">
            <Date dateISO={postData.date} />
          </div>

          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
      <Footers />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
