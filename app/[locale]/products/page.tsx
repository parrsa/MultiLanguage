import { getTranslations } from "next-intl/server"
export default async function ProductsPage() {
    const t = await getTranslations("products");
    return (
        <div>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
        </div>
    );
}