"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Sparkles, Info } from "lucide-react";

const dependsOn = [
  "Original source quality",
  "Selected stream",
  "Device performance",
  "Display capability",
  "Player compatibility",
  "Broadband stability",
  "Wi-Fi strength",
  "Other household internet use",
];

const tipsList = [
  "Use Ethernet where possible.",
  "Keep Wi-Fi devices close to the router.",
  "Use a strong 5 GHz or 6 GHz connection.",
  "Avoid large downloads while watching.",
  "Close unnecessary background apps.",
  "Maintain free device storage.",
  "Restart the player and router when needed.",
  "Select a quality suitable for the connection.",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function PlaybackTips() {
  return (
    <section
      id="playback-tips"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Picture Quality and{" "}
            <span className="text-brand-gradient font-bold">Playback</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Available resolutions can include SD, HD, Full HD, and selected 4K sources. Actual playback depends on:
          </p>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Info className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Playback depends on
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
              {dependsOn.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Sparkles className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  For better results:
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
                {tipsList.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
              <Info className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                No internet-delivered television service can responsibly guarantee that interruption or buffering will never occur.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
