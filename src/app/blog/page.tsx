import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { BLOG_POSTS } from "@/lib/blog";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES.find((p) => p.path === "/blog/")!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      {/* Simple page header */}
      <header className="w-full border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player{" "}
            <span className="text-brand-gradient font-bold">Blog</span>
          </h1>
        </div>
      </header>

      {/* Posts grid — 3 cards per row (ready for posts) */}
      <section className="w-full py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <B1GFooter />
    </main>
  );
}
