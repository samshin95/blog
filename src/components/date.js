import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import en from "date-fns/locale/en-US";
import fr from "date-fns/locale/fr";
import { useRouter } from "next/router";

export default function Date({ dateISO }) {
  const date = parseISO(dateISO);
  return <time dateTime={dateISO}>{format(date, "LLLL d, yyyy")}</time>;
}

export function ConvertDate({ dateISO }) {
  const { locale } = useRouter();
  return (
    <time dateTime={dateISO}>
      {locale === "en" &&
        format(parseISO(dateISO), "MMM d, yyyy", { locale: en })}
      {locale === "fr" &&
        format(parseISO(dateISO), "d MMM yyyy", { locale: fr })}
      {locale === "ja" && format(parseISO(dateISO), "yyyy-M-d", { locale: ja })}
    </time>
  );
}
