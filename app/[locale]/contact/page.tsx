import { getTranslations } from "next-intl/server";
import Link from "next/link";
export default async function ContactPage() {
  const t = await getTranslations("HomePage")
  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("name")}</h1>
      <Link href='/'>Home</Link>
    </div>
  );
}
