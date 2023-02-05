import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function about() {
  return (
    <>
      {/* <div className="py-20 md:py-32">
        <section className="container md:flex mx-auto">
          <div
            className="w-full mt-10 md:w-1/2"
            style={{ position: "relative" }}
          >
            <Image src={"/images/icons8-gear-64.png"} fill />
          </div>
          <div className="w-full mt-10 md:w-1/2"></div>
        </section>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="max-h-96 md:h-screen" style={{ position: "relative" }}>
          <Image
            className="w-screen h-screen object-cover object-top"
            src={"/images/icons8-gear-64.png"}
            alt=""
            fill
          />
        </div>
        <div className="flex p-10">
          <div className="mb-auto mt-auto max-w-lg">
            <h1 className="text-3xl uppercase">Sam Shin</h1>
            <p className="font-semibold mb-5">Web Developer</p>
            <p>
              嗨！我是 <strong>Sam Shin</strong> <strong>辛旻軒</strong>
              現職是一位軟體工程師。
            </p>
            <br />
            <p>
              興趣是寫出有趣的程式並與大家分享，希望有天能為世界做出一點貢獻!
            </p>
            <br />
            <p>
              我目前在
              <strong>
                <Link href={"https://atos.net/en/"}>Atos</Link>
              </strong>
              擔任Java Engineer，也是一名兼職的Freelancer
            </p>
            <br />
            <p>
              本網站於<strong>2023/02/01</strong>
              始動，所以還有許多內容尚未補上，請大家見諒~
            </p>
            <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
              <Link href={"mailto:lonewanderer@samshin95.com"}>聯繫我</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "footer"])),
    },
  };
}
