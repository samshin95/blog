import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  PuzzlePieceIcon,
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";

// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { t } = useTranslation("header");
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Popover id="Header" className="relative bg-white z-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">{t("company")}</span>
                <Image
                  width={64}
                  height={64}
                  src="/images/icons8-gear-64.png"
                  className="inline-block w-auto h-12 md:h-14 transition-transform hover:animate-spin"
                  alt="Sam辛"
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>{t("Topic")}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <a
                              key={t("Vue Cli")}
                              href="/"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <Image
                                width={64}
                                height={64}
                                src="/svg/file_type_vue_icon_130078.svg"
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {t("Vue Cli")}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {t("Vue Cli description")}
                                </p>
                              </div>
                            </a>

                            <a
                              key={t("NEXT.js")}
                              href="/"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <Image
                                width={64}
                                height={64}
                                src="/svg/nextjs_icon_132160.svg"
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {t("NEXT.js")}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {t("NEXT.js description")}
                                </p>
                              </div>
                            </a>
                            {/* {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))} */}
                          </div>
                          {/* <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div> */}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {t("Leetcode")}
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                作品
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>{t("More")}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <a
                              key={t("related resources")}
                              href="/more/resource"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <PuzzlePieceIcon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {t("related resources")}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {t("related resources description")}
                                </p>
                              </div>
                            </a>
                            <a
                              key={t("about")}
                              href="/more/about"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <UserCircleIcon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {t("about")}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {t("about description")}
                                </p>
                              </div>
                            </a>
                            {/* {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))} */}
                          </div>
                          {/* <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                  <li
                                    key={post.id}
                                    className="truncate text-base"
                                  >
                                    <a
                                      href={post.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
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
            {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <a
        href="#"
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Sign in
      </a>
      <a
        href="#"
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Sign up
      </a>
    </div> */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      width={64}
                      height={64}
                      src="/images/icons8-gear-64.png"
                      className="inline-block w-auto h-12 md:h-14 transition-transform hover:animate-spin"
                      alt="Sam辛"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {/* <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <UserCircleIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Pricing
                    </span>
                  </a> */}
                  <a
                    key={t("related resources")}
                    href="/more/resource"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <PuzzlePieceIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {t("related resources")}
                    </span>
                  </a>

                  <a
                    key={t("about")}
                    href="/more/about"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <UserCircleIcon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {t("about")}
                    </span>
                  </a>
                  {/* {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
                {/* <div>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Sign up
      </a>
      <p className="mt-6 text-center text-base font-medium text-gray-500">
        Existing customer?{" "}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">
          Sign in
        </a>
      </p>
    </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
