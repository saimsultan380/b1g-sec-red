"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Cast,
  Smartphone,
  Laptop,
  ArrowRight,
  Flame,
  Monitor,
} from "lucide-react";

const deviceGroups = [
  {
    title: "Firestick and Fire TV",
    description:
      "Compatible Fire OS devices can install B1G Player through the verified Downloader route. Device menus and third-party installation support can vary by model.",
    icon: Flame,
  },
  {
    title: "Android TV and Google TV",
    description:
      "Compatible Android televisions and boxes can use the supported B1G Player Android build.",
    icon: Tv,
  },
  {
    title: "Samsung and LG Smart TVs",
    description:
      "Samsung Tizen and LG webOS televisions normally require an IPTV player from the television’s official app store.",
    icon: Monitor,
  },
  {
    title: "iPhone, iPad and Apple TV",
    description:
      "Apple customers use a compatible App Store player supporting the supplied account format.",
    icon: Smartphone,
  },
  {
    title: "Windows and Mac",
    description:
      "A compatible desktop application can be used with the supplied Xtream Codes or M3U information.",
    icon: Laptop,
  },
];

export function CompatibleDevices() {
  return (
    <section
      id="compatible-devices"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Devices That Work with{" "}
            <span className="text-brand-gradient font-bold">B1GPlayer</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {deviceGroups.map((device, idx) => {
              const Icon = device.icon;
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
                      {device.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {device.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Any charge made by an independent player developer is separate from the B1G IPTV Subscription unless the order clearly states otherwise.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed font-semibold">
                Check the exact device model and operating system before ordering.
              </p>
            </div>

            <Link href="#compatible-devices" className="shrink-0 w-full md:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Cast className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>Check All Supported Devices</span>
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
