export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  /** Set to a public path like `/blog/slug.jpg` when the image is ready. */
  coverImage: string | null;
  coverImageAlt: string;
};

/** Canonical post URL (root path, no `/blog/` prefix). */
export function getBlogPostPath(slug: string): string {
  return `/${slug}/`;
}

/**
 * Blog posts for the /blog/ index (3 cards per row).
 * Individual posts live at /{slug}/.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "b1g-player-iptv-on-firestick",
    title:
      "B1G Player for Firestick: How to Download & Set Up B1G IPTV on Firestick",
    metaTitle:
      "B1G Player for Firestick: Install & Setup B1G IPTV on Firestick",
    metaDescription:
      "Learn how to download or set up B1G Player on Firestick, install B1G IPTV, enter login details & fix common setup issues on Fire TV devices with easy steps",
    excerpt:
      "Install and set up B1G Player on Firestick with Downloader code steps, login details, and fixes for common Fire TV setup issues.",
    date: "2026-10-15",
    coverImage: "/b1g-player-firestick-blog-thumbnail.png",
    coverImageAlt:
      "B1G Player for Firestick install and setup guide for B1G IPTV",
  },
  {
    slug: "b1g-iptv-player-troubleshooting",
    title:
      "B1G IPTV Player Troubleshooting: Fix B1G Player Down, Login Errors & Channels Not Loading",
    metaTitle:
      "B1G IPTV Player Down? B1G IPTV Troubleshooting Issue & Fixes",
    metaDescription:
      "Is B1G Player down or not working? Fix B1G IPTV login errors, server issues, buffering, and missing channels with these practical B1G troubleshooting steps.",
    excerpt:
      "Fix B1G Player down issues, login errors, server problems, buffering, and channels not loading with practical troubleshooting steps.",
    date: "2026-10-15",
    coverImage: "/b1g-iptv-troubleshooting-blog-thumbnail.png",
    coverImageAlt:
      "B1G IPTV Player troubleshooting guide for login errors and channels not loading",
  },
  {
    slug: "b1g-player-for-windows",
    title:
      "B1G Player for Windows: How to Download, Install and Set Up B1G IPTV",
    metaTitle:
      "B1G Player for Windows: Download & Install B1G IPTV on Window",
    metaDescription:
      "Learn how to download B1G Player for Windows, install a compatible IPTV player, and set up B1G IPTV on your PC using M3U or Xtream Codes.",
    excerpt:
      "Learn how to use B1G IPTV on Windows with a compatible desktop player, including M3U and Xtream Codes setup, safety tips and troubleshooting.",
    date: "2026-10-15",
    coverImage: "/b1g-player-windows-blog-thumbnail-corrected.png",
    coverImageAlt:
      "B1G Player for Windows download and install guide for B1G IPTV",
  },
  {
    slug: "b1g-subscription-uk-plans-prices",
    title: "B1G Subscription UK: Plans & Best Value B1G IPTV Subscription",
    metaTitle: "B1G Subscription UK: Plans & Best Value B1G IPTV Subscription",
    metaDescription:
      "Compare B1G subscription plans in the UK, including B1G IPTV and B1G Player subscription prices. Explore the £45 annual plan with 1 month free.",
    excerpt:
      "Compare B1G subscription plans in the UK, including prices from £10 and the £45 annual plan with 1 month free for the best effective monthly value.",
    date: "2026-10-15",
    coverImage: "/b1g-subscription-blog-thumbnail.png",
    coverImageAlt:
      "B1G Subscription UK plans and prices comparison for B1G IPTV",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
