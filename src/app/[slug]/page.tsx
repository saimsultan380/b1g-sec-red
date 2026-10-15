import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { BlogCoverImage } from "@/components/blog/blog-cover-image";
import { B1gIptvPlayerTroubleshootingArticle } from "@/components/blog/posts/b1g-iptv-player-troubleshooting";
import { B1gPlayerForWindowsArticle } from "@/components/blog/posts/b1g-player-for-windows";
import { B1gPlayerIptvOnFirestickArticle } from "@/components/blog/posts/b1g-player-iptv-on-firestick";
import { B1gSubscriptionUkPlansPricesArticle } from "@/components/blog/posts/b1g-subscription-uk-plans-prices";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { BLOG_POSTS, getBlogPost, getBlogPostPath } from "@/lib/blog";
import { ROUTES, buildPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const ARTICLE_BY_SLUG: Record<string, React.ComponentType> = {
  "b1g-subscription-uk-plans-prices": B1gSubscriptionUkPlansPricesArticle,
  "b1g-player-for-windows": B1gPlayerForWindowsArticle,
  "b1g-iptv-player-troubleshooting": B1gIptvPlayerTroubleshootingArticle,
  "b1g-player-iptv-on-firestick": B1gPlayerIptvOnFirestickArticle,
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: getBlogPostPath(post.slug),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const Article = ARTICLE_BY_SLUG[slug];

  if (!post || !Article) {
    notFound();
  }

  const postPath = getBlogPostPath(post.slug);

  const breadcrumbs = [
    { name: "Home", path: ROUTES.home },
    { name: "Blog", path: ROUTES.blog },
    { name: post.title, path: postPath },
  ];

  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="w-full">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-20">
          <p className="mb-6 text-xs sm:text-sm font-semibold text-slate-400">
            <Link
              href={ROUTES.blog}
              className="hover:text-[#E01E26] transition-colors"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-500">Article</span>
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] leading-tight mb-4">
            {post.title}
          </h1>

          <time
            dateTime={post.date}
            className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <div className="mb-8 sm:mb-10">
            <BlogCoverImage src={post.coverImage} alt={post.coverImageAlt} />
          </div>

          <div
            className={[
              "text-sm sm:text-base text-slate-600 font-semibold leading-relaxed",
              "[&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-[#12141F] [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4",
              "[&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:text-[#12141F] [&_h3]:mt-8 [&_h3]:mb-3",
              "[&_p]:mb-4 [&_p]:leading-relaxed",
              "[&_a]:text-[#E01E26] [&_a]:font-bold",
            ].join(" ")}
          >
            <Article />
          </div>
        </div>
      </article>

      <B1GFooter />
    </main>
  );
}
