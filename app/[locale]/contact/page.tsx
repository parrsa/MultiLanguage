// import { getTranslations } from "next-intl/server";
// import Link from "next/link";
// export default async function ContactPage() {
//   const t = await getTranslations("HomePage")
//   const p = await getTranslations("validation")
//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <h1>{t("welcome.title")}</h1>
//       <p>{p("invalid")}</p>
//       <Link href='/'>Home</Link>
//     </div>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

async function translateText(text: string, target: string) {
  if (target === "en") return text; 

  const res = await fetch("/api/translate", {
    method: "POST",
    body: JSON.stringify({ text, to: target }),
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();
  return data?.result || text;
}

export default function ProductsPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchAndTranslate() {
    setLoading(true);

    const res = await fetch("https://fakestoreapi.com/products");
    const data: Post[] = await res.json();
    const firstTen = data.slice(0, 5);
    const translatedPosts = [];
    for (const post of firstTen) {
      translatedPosts.push({
        ...post,
        title: await translateText(post.title, locale),
        description: await translateText(post.description, locale)
      });
    }

    setPosts(translatedPosts);
    setLoading(false);
  }

  fetchAndTranslate();
}, [locale]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
          <img src={post.image} alt={post.title} width={150} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Price: ${post.price}</p>
        </div>
      ))} */}
    </div>
  );
}
