"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  KeyRound,
  Tv,
  AlertCircle,
  Film,
  MonitorPlay,
  Globe,
  Radio,
  Newspaper,
  Baby,
  CalendarDays,
  Rewind,
  Maximize2,
  Settings,
  Headphones,
} from "lucide-react";

const catalogueItems = [
  { label: "35,000+ live channels", icon: Tv },
  { label: "50,000+ films", icon: Film },
  { label: "10,000+ TV series", icon: MonitorPlay },
  { label: "UK and international television categories", icon: Globe },
  { label: "Sports and entertainment sections", icon: Radio },
  { label: "News and documentaries", icon: Newspaper },
  { label: "Family and children’s categories", icon: Baby },
  { label: "Electronic Programme Guide where supplied", icon: CalendarDays },
  { label: "Selected Catch-Up where available", icon: Rewind },
  { label: "SD, HD, Full HD and 4K sources where available", icon: Maximize2 },
  { label: "Private username, password and server details", icon: KeyRound },
  { label: "Installation and login guidance", icon: Settings },
  { label: "Customer account support", icon: Headphones },
];

export function WhatIsIncluded() {
  return (
    <section
      id="what-is-included"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            What Is Included with{" "}
            <span className="text-brand-gradient font-bold">B1G IPTV Player?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            The current advertised wider catalogue includes:
          </p>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Tv className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Catalogue and account access
                  </h3>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {catalogueItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#E01E26] mt-0.5">
                          <Icon className="h-3 w-3 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <KeyRound className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Private login details
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                    Customers receive a private username, password and server address, together with installation guidance and account support. These details should be kept private and should not be posted publicly.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                    Keep these details private and do not post them publicly.
                  </p>
                </div>
              </div>

              <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <AlertCircle className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Availability can change
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed mt-2">
                    Catalogue totals describe the wider service when published. Channels, titles, languages, EPG information, Catch-Up and picture quality can change because of source availability, maintenance, regional restrictions and applicable rights.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    If one particular category is important, ask support to confirm its current availability before purchasing a longer plan.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
