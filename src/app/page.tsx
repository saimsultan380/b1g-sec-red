import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GHeroSection } from "@/components/sections/b1g-hero-section";
import { WhatIsB1GPlayer } from "@/components/sections/what-is-b1g-player";
import { B1GPricing } from "@/components/sections/pricing";
import { WhatIsIncluded } from "@/components/sections/what-is-included";
import { LiveCategories } from "@/components/sections/live-categories";
import { WhyUKViewers } from "@/components/sections/why-uk-viewers";
import { DownloadApp } from "@/components/sections/download-app";
import { CompatibleDevices } from "@/components/sections/compatible-devices";
import { StartWatchingSteps } from "@/components/sections/steps";
import { MoreDevices } from "@/components/sections/more-devices";
import { PlaybackTips } from "@/components/sections/playback-tips";
import { B1GFAQ } from "@/components/sections/faq";
import { B1GCTABanner } from "@/components/sections/cta-banner";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      {/* 1. Hero */}
      <B1GHeroSection />
      {/* 2. What Is B1G Player */}
      <WhatIsB1GPlayer />
      {/* 3. Plans / Pricing */}
      <B1GPricing />
      {/* 4. What Is Included */}
      <WhatIsIncluded />
      {/* 5. Live / Sports / Films / Series */}
      <LiveCategories />
      {/* 6. App Features + Support + Connection */}
      <WhyUKViewers />
      {/* 7. B1G Player / B1GTV / APK Explained */}
      <DownloadApp />
      {/* 8. Devices */}
      <CompatibleDevices />
      {/* 9. How to Start */}
      <StartWatchingSteps />
      {/* 10. Free Trial */}
      <MoreDevices />
      {/* 11. Picture Quality */}
      <PlaybackTips />
      {/* 12. FAQ */}
      <B1GFAQ />
      {/* 13. Closing CTA */}
      <B1GCTABanner />
      <B1GFooter />
    </main>
  );
}
