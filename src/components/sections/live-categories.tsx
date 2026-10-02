"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Trophy,
  Film,
  Newspaper,
  MonitorPlay,
  Users,
} from "lucide-react";

const liveTvCategories = [
  "Entertainment",
  "News",
  "Lifestyle",
  "Documentary",
  "Family",
  "International categories",
];

const liveSportsCategories = [
  "Football",
  "Cricket",
  "Rugby",
  "Motorsport",
  "Boxing",
  "Other events",
];

const moviesCategories = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Documentary",
  "Family",
  "International films",
];

const newsDocCategories = [
  "Current affairs",
  "Factual",
  "History",
  "Nature",
  "Science",
  "Technology",
  "Culture",
  "Travel",
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

export function LiveCategories() {
  return (
    <section
      id="live-categories"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Live Television, Sports,{" "}
            <span className="text-brand-gradient font-bold">Films and TV Series</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Tv className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Live television
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Browse available entertainment, news, lifestyle, documentary, family and international categories through one organised B1G Player interface without switching between several separate players.
                </p>
                <ul className="space-y-2.5">
                  {liveTvCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Trophy className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Sports categories
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Available sports sections may include football, cricket, rugby, motorsport, boxing and other events. Competition schedules and source availability can change, so customers should request a current check when a specific event is important.
                </p>
                <ul className="space-y-2.5">
                  {liveSportsCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Film className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Films
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Explore available action, comedy, drama, thriller, documentary, family and international films organised by category.
                </p>
                <ul className="space-y-2.5">
                  {moviesCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Newspaper className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    News and documentaries
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
                  Access available current-affairs, factual, history, nature, science, technology, culture and travel categories.
                </p>
                <ul className="space-y-2.5">
                  {newsDocCategories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <MonitorPlay className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      TV series
                    </h3>
                  </div>
                </div>
                <div className="lg:flex-1 lg:flex lg:items-center py-2 lg:py-8">
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    Browse available series, seasons and recently added programmes. Exact titles and the number of complete seasons vary over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Users className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      Family viewing note
                    </h3>
                  </div>
                </div>
                <div className="lg:flex-1 lg:flex lg:items-center py-2 lg:py-8">
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    Parents and guardians should check programme suitability and use parental controls where the chosen player provides them.
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
