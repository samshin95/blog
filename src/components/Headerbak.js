import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="relative bg-white" id="Header">
        <header className="border-b-2 border-gray-100 w-full fixed bg-white top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 md:px-4">
            <div className="flex justify-between items-center py-4 lg:py-6 lg:justify-start lg:space-x-10">
              <div className="flex justify-start items-center lg:w-0 lg:flex-1">
                <Image
                  width={64}
                  height={64}
                  src="/images/icons8-gear-64.png"
                  className="inline-block w-auto h-12 md:h-14 transition-transform hover:animate-spin"
                  alt="Sam辛"
                />
                <span className="sr-only">
                  {router.locale == "zh" && "Sam辛"}
                  {router.locale == "en" && "SamShin"}
                  {router.locale == "fr" && "SamShin"}
                  {router.locale == "jp" && "Sam辛"}
                </span>

                <h1 className="inline-block ml-2 text-3xl md:text-4xl">
                  <Link
                    href="/"
                    passHref
                    rel="home"
                    aria-current="page"
                    locale="zh"
                  >
                    {router.locale == "zh" && "Sam辛"}
                    {router.locale == "en" && "SamShin"}
                    {router.locale == "fr" && "SamShin"}
                    {router.locale == "jp" && "Sam辛"}
                  </Link>
                </h1>
              </div>

              <div className="-mr-2 -my-2 lg:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-expanded="false"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">
                    {router.locale == "zh" && "選單"}
                    {router.locale == "en" && "Menu"}
                    {router.locale == "fr" && "Menu"}
                    {router.locale == "jp" && "メニュー"}
                  </span>
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <Popover.Group className="hidden lg:flex space-x-10">
                <Popover className="relative">
                  <Popover.Button
                    className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary"
                    aria-expanded="false"
                  >
                    <span>
                      {router.locale == "zh" && "專欄"}
                      {router.locale == "en" && "Topic"}
                      {router.locale == "fr" && "Sujet"}
                      {router.locale == "jp" && "トピック"}
                    </span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-[28rem] sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">
                              {router.locale == "zh" && "Vue Cli 基本入門"}
                              {router.locale == "en" &&
                                "Getting Started with Vue Cli Basics"}
                              {router.locale == "fr" &&
                                "Premiers pas avec les bases de Vue CLI"}
                              {router.locale == "jp" &&
                                "Vue CLI の基本を使い始める"}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {router.locale == "zh" &&
                                "Vue 社群開發集大成 ，後起之秀不容小看。"}
                              {router.locale == "en" &&
                                "The masterpiece of Vue community and developers , the rising star should never be underestimated."}
                              {router.locale == "fr" &&
                                "Chef-d'œuvre de la communauté et des développeurs Vue, l'étoile montante ne doit jamais être sous-estimée."}
                              {router.locale == "jp" &&
                                "Vue コミュニティと開発者の傑作である新星は決して過小評価されるべきではありません。"}
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">
                              {router.locale == "zh" && "NEXT.js 基本入門"}
                              {router.locale == "en" &&
                                "Getting Started with NEXT.js Basics"}
                              {router.locale == "fr" &&
                                "Premiers pas avec les bases de NEXT.js"}
                              {router.locale == "jp" &&
                                "NEXT.js の基本を使い始める"}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {router.locale == "zh" &&
                                "整合SEO與SSG的React框架 挑戰最強"}
                              {router.locale == "en" &&
                                "The React framework which integrate SEO and SSG ,intend being the strongest"}
                              {router.locale == "fr" &&
                                "Le framework React qui intègre SEO et SSG ,avoir l'intention d'être le plus fort"}
                              {router.locale == "jp" &&
                                "SEOとSSGを統合したReactフレームワーク ,最強になるつもり"}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>

                <Popover className="relative">
                  <Popover.Button
                    className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary"
                    aria-expanded="false"
                  >
                    <span>作品</span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-60 sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">11111</p>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                        </Link>
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">22222</p>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>

                <Popover className="relative">
                  <Popover.Button
                    className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary"
                    aria-expanded="false"
                  >
                    <span>
                      {router.locale == "zh" && "Leetcode 刷題日記"}
                      {router.locale == "en" && "Leetcode learning diary"}
                      {router.locale == "fr" &&
                        "Leetcode journal d'apprentissage"}
                      {router.locale == "jp" && "Leetcode 学習日記"}
                    </span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-60 sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">Blind 75</p>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                        </Link>
                        <Link
                          href="#"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">Grind 75</p>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>

                <Popover className="relative">
                  <Popover.Button
                    className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary"
                    aria-expanded="false"
                  >
                    <span>更多</span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-[28rem] sm:px-0 lg:right-0 lg:ml-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link
                          href="/more/relate"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">相關資源</p>
                            <p className="mt-1 text-sm text-gray-500">
                              網站文章中使用到的一些第三方資源、程式碼。
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/more/about"
                          passHref
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium">關於</p>
                            <p className="mt-1 text-sm text-gray-500">
                              關於我以及這個網站的資訊。
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>
                {router.pathname == "/" && (
                  <Popover className="relative">
                    <Popover.Button
                      className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <title>Language</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                        />
                      </svg>
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-60 sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <Link
                            href={router.pathname}
                            locale="en"
                            passHref
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium">English</p>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                          </Link>
                          <Link
                            href={router.pathname}
                            locale="zh"
                            passHref
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium">繁體中文</p>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                          </Link>
                          <Link
                            href={router.pathname}
                            locale="fr"
                            passHref
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium">Français</p>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                          </Link>
                          <Link
                            href={router.pathname}
                            locale="jp"
                            passHref
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium">日本語</p>
                              <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                )}
              </Popover.Group>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
