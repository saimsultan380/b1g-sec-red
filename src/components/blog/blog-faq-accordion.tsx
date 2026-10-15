"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

type BlogFaqAccordionProps = {
  items: BlogFaqItem[];
};

export function BlogFaqAccordion({ items }: BlogFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="not-prose space-y-3 my-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E01E26]/30 focus-visible:ring-inset"
            >
              <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                {item.question}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  isOpen
                    ? "bg-red-50 text-[#E01E26]"
                    : "bg-slate-50 text-slate-400"
                }`}
              >
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                ) : (
                  <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                )}
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-slate-100">
                  <p className="pt-3 text-sm text-slate-600 font-semibold leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
