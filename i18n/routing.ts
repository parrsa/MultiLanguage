import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["fa", "en", "ku", "de"],

    defaultLocale: "fa",

    pathnames: {
        "/contact": {
            fa: "/contact",
            en: "/contact-me",
            ku: "/peywandi",
            de: "/kontakt"
        },
        '/products': {
            fa: '/products',
            en: '/products',
            ku: '/berhem',
            de: '/produkte'
        }
    }
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
