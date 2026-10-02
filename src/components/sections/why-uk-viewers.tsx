"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { buildIntentWhatsAppUrl } from "@/lib/seo";
import {
  ShieldCheck,
  LayoutList,
  Search,
  Star,
  History,
  Filter,
  Volume2,
  Captions,
  Rewind,
  Maximize2,
  Smartphone,
  KeyRound,
  ArrowRight,
  HeadphonesIcon,
} from "lucide-react";

const appFeatures = [
  { label: "Secure account sign-in", icon: KeyRound },
  { label: "Clear live, film and series sections", icon: LayoutList },
  { label: "Programme-guide information", icon: ShieldCheck },
  { label: "Search across available categories", icon: Search },
  { label: "Favourite-channel management", icon: Star },
  { label: "Recently viewed items", icon: History },
  { label: "Category filtering", icon: Filter },
  { label: "Audio-track selection", icon: Volume2 },
  { label: "Subtitle controls", icon: Captions },
  { label: "Selected Catch-Up", icon: Rewind },
  { label: "Multiple picture-quality options", icon: Maximize2 },
  { label: "Remote-friendly Android and Fire TV navigation", icon: Smartphone },
];

const supportItems = [
  "Account and setup help",
  "Device compatibility",
  "Subscription-plan selection",
  "B1G free trial requests",
  "B1G Player and app installation",
  "B1G APK installation guidance where applicable",
  "Login errors",
  "Server-address entry",
  "Catalogue refreshes",
  "EPG checks",
  "Connection questions",
  "Renewals",
  "Payment enquiries",
  "Reseller applications",
];

export function WhyUKViewers() {
  return (
    <section
      id="app-features"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player{" "}
            <span className="text-brand-gradient font-bold">App Features</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>
              Features can vary by app version, device and source, but B1G Player may include:
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 w-full">
              {appFeatures.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <li key={idx} data-reveal data-delay={String((idx % 3) * 50)} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#E01E26]">
                      <Icon className="h-3.5 w-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {cat.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-slate-100 pt-4 mt-6">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                A player feature can work only when the selected source supplies the required information. For example, subtitle controls may appear in the application even though a particular programme does not include subtitles.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <HeadphonesIcon className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                  B1G Player Support
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Support can assist with:
              </p>
              <ul className="space-y-2.5 flex-1">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#4A4A4A] leading-relaxed border-t border-slate-100 pt-4">
                When requesting technical support, include the device model, player name, approximate time, and exact error. Never post a password, playlist URL, or payment information publicly.
              </p>
              <a
                href={buildIntentWhatsAppUrl("support")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full rounded-[10px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white text-xs font-semibold py-2.5"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 stroke-[2.5]" />
                </Button>
              </a>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-red-50 text-[#E01E26]">
                  <ShieldCheck className="h-4.5 w-4.5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                  One Active Connection Explained
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                A standard subscription includes one active stream at a time.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                The account may be saved on multiple compatible personal devices, but starting playback on a second screen can interrupt the first session or trigger an account-security check.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Ask about a multi-connection option before ordering if:
              </p>
              <ul className="space-y-2.5 flex-1">
                {[
                  "Two televisions need to play simultaneously",
                  "Two household members regularly watch at the same time",
                  "The account will be active on two screens",
                  "Simultaneous mobile and television viewing is required",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Installing the login on several devices does not automatically increase the active connection allowance.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
