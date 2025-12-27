# 🌍 Next.js Internationalized App

A Next.js application built with **App Router** and **next-intl** to support
multi-language routing and translations.

## ✨ Features

- 🌐 Internationalization (i18n) with `next-intl`
- 🗺️ Locale-based routing (`/fa`, `/en`, `/ku`)
- 🧭 Localized navigation using `next-intl/navigation`
- 🧩 Middleware for automatic locale detection
- 📦 App Router compatible
- 📝 JSON-based message files
- 🔤 Local fonts (Geist Sans & Geist Mono)
- ⚡ Type-safe locale handling

## 🌍 Supported Languages

- 🇮🇷 Persian (`fa`) – default
- 🇺🇸 English (`en`)
- 🟡 Kurdish (`ku`)

## 📁 Project Structure

```txt
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       └── contact/
│           └── page.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── messages/
│   ├── fa.json
│   ├── en.json
│   └── ku.json
├── middleware.ts
└── next.config.ts
⚙️ Setup & Installation
bash
npm install
# or
yarn install
# or
pnpm install
Run the development server:

bash
npm run dev
Open:

http://localhost:3000/fa

http://localhost:3000/en

http://localhost:3000/ku

🧭 Routing Configuration
Locales and pathnames are defined in:

ts
src/i18n/routing.ts
Example:

ts
locales: ["fa", "en", "ku"];
defaultLocale: "fa";
📝 Translations
Translation messages are stored in:

txt
src/messages/{locale}.json
Example:

json
{
  "HomePage": {
    "title": "Hello world",
    "contact": "Go to contact page"
  }
}
Usage in components:

ts
const t = await getTranslations("HomePage");
t("title");
🧩 Middleware
Locale detection and routing is handled by:

ts
src/middleware.ts
ts
matcher: ["/", "/(fa|en|ku)/:path*"];
🔤 Fonts
Local fonts are loaded using next/font/local:

Geist Sans

Geist Mono

Configured in RootLayout.

🚀 Tech Stack
Next.js 14+

App Router

next-intl

TypeScript

📌 Notes
Invalid locales are handled using notFound()

Locale is validated against the defined routing config

Translations are fully type-safe
