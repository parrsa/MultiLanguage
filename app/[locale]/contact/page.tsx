import { getTranslations } from "next-intl/server";
import Link from "next/link";
export default async function ContactPage() {
  const t = await getTranslations("HomePage")
  const p = await getTranslations("validation")
  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("welcome.title")}</h1>
      <p>{p("invalid")}</p>
      <Link href='/'>Home</Link>
    </div>
  );
}
