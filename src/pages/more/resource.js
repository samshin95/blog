import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function resource() {
  return <></>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "footer"])),
    },
  };
}
