import Header from "../../components/Header";
import Image from "next/image";
export default function about() {
  return (
    <>
      <Header />
      <div className="py-20 md:py-32">
        <section className="container md:flex mx-auto">
          <div className="w-full mt-10 md:w-1/2">
            <Image />
          </div>
          <div className="w-full mt-10 md:w-1/2">
            <h2 className="text-6xl text-center leading-normal md:leading-relaxed md:text-[4rem] lg:text-[5rem]">
              <span>SEO Marketing</span>
              <span className="relative inline-block overflow-visible">
                <span className="font-black z-10 relative">分享、幹</span>
                <svg
                  className="text-primary absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 h-[calc(100%)] w-[calc(100%+2rem)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="9"
                    d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                  ></path>
                </svg>
              </span>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}
