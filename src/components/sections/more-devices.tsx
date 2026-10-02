"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

const trialChecks = [
  "Use the same device you intend to keep.",
  "Test in the room where you normally watch.",
  "Allow the first catalogue update to finish.",
  "Open several live and on-demand items.",
  "Check EPG, search, favourites, audio and subtitles.",
  "Test during your normal viewing hours.",
  "Confirm that one active connection is sufficient.",
  "Report repeatable problems before the trial ends.",
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

export function MoreDevices() {
  return (
    <section
      id="free-trial"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <HelpCircle className="h-4 w-4 stroke-[2]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#12141F]">
                Test B1G IPTV{" "}
                <span className="text-brand-gradient font-bold">Before Choosing a Longer Plan</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              A trial helps confirm whether the application, device, and internet connection work together.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-4 leading-relaxed">
              For a useful test:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {trialChecks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs text-[#4A4A4A] leading-relaxed">
                Confirm trial availability, duration, and any catalogue restrictions before activation.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={buildIntentWhatsAppUrl("freeTrial")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full lg:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full lg:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-4 text-xs sm:text-sm font-semibold shine-effect"
              >
                <span>Request B1G Free Trial</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </a>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
