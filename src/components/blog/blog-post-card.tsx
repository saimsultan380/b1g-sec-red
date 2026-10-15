import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getBlogPostPath } from "@/lib/blog";
import { BlogCoverImage } from "@/components/blog/blog-cover-image";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const href = getBlogPostPath(post.slug);

  return (
    <article className="flex flex-col h-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-6">
      <BlogCoverImage
        src={post.coverImage}
        alt={post.coverImageAlt}
        compact
      />
      <time
        dateTime={post.date}
        className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3"
      >
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
      <h2 className="text-base sm:text-lg font-bold text-[#12141F] leading-snug mb-3">
        <Link href={href} className="hover:text-[#E01E26] transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed flex-1 mb-5">
        {post.excerpt}
      </p>
      <Link
        href={href}
        className="text-xs sm:text-sm font-bold text-[#E01E26] hover:underline underline-offset-2 mt-auto"
      >
        Read more
      </Link>
    </article>
  );
}
