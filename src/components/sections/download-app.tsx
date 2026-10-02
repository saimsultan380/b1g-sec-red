"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Info,
  Smartphone,
  Tv,
  Package,
  Search,
} from "lucide-react";

const explainedItems = [
  {
    title: "B1G Player",
    description:
      "B1G Player is the application used to access an active B1G IPTV account on supported devices.",
    icon: Tv,
  },
  {
    title: "B1G IPTV",
    description:
      "B1G IPTV is the subscription/account that provides the available catalogue and login details.",
    icon: Package,
  },
  {
    title: "B1G APK",
    description:
      "B1G APK refers to an Android application package used when an Android-compatible installation requires an APK.",
    icon: Smartphone,
  },
  {
    title: "B1GTV or B1G TV",
    description:
      "B1GTV or B1G TV may be used as a search variation by people looking for B1G television or the B1G Player service.",
    icon: Search,
  },
  {
    title: "“b1gplayer” and “big player”",
    description:
      "“b1gplayer” and “big player” are alternative search phrases users may enter when looking for the B1G Player app.",
    icon: Info,
  },
];

export function DownloadApp() {
  return (
    <section
      id="download-app"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player, B1GTV and{" "}
            <span className="text-brand-gradient font-bold">B1G APK Explained</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              Several different search terms can lead users to the same B1G IPTV topic. You may see searches such as “b1gplayer”, “big player”, “bigtv”, “B1G TV”, “B1G APK,” or “B1G Player”.
            </p>
            <p>
              Here is the simple difference:
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {explainedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4 h-full"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Using the correct app and installation method for your device is more important than the search term you use.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
