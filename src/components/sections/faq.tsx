"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is B1G Player?",
    answer:
      "B1G Player is the viewing application used with an active B1G IPTV account on compatible devices. It organises available live television, films, TV series and programme information into an accessible interface.",
  },
  {
    question: "Is B1G Player the same as B1G IPTV?",
    answer:
      "No. B1G Player is the viewing application. B1G IPTV is the active subscription account used with the application.",
  },
  {
    question: "Is there a B1G free trial?",
    answer:
      "A B1G free trial may be available for new customers who want to test compatibility before choosing a longer plan. Contact support to confirm the current trial duration, conditions, and availability.",
  },
  {
    question: "What is the B1G Player subscription?",
    answer:
      "A B1G Player subscription generally refers to the B1G IPTV subscription/account used to access the available service through B1G Player or another compatible player. The app itself and the subscription should be treated as separate components.",
  },
  {
    question: "Can I download a B1G APK?",
    answer:
      "A B1G APK is an Android application package. If an APK installation is required for your compatible Android device, use the installation method and file supplied or recommended by the service and make sure it matches your device.",
  },
  {
    question: "Is B1G Player available on Firestick?",
    answer:
      "Compatible Firestick and Fire TV devices can use the supported B1G Player installation method. Always check your exact Fire OS device before installation.",
  },
  {
    question: "What do people mean by “b1gplayer”?",
    answer:
      "“b1gplayer” is simply another way users may type B1G Player when searching for the app or service online.",
  },
  {
    question: "Is “big player” the same as B1G Player?",
    answer:
      "Some users may type “big player” when searching for B1G Player. For the correct app and installation information, use the B1G Player name and check your device compatibility.",
  },
  {
    question: "What is B1GTV?",
    answer:
      "“B1GTV” or “B1G TV” can be used as a search variation for people looking for B1G television services or B1G Player information. The specific product should always be confirmed before installation or purchase.",
  },
  {
    question: "How much does a B1G IPTV Subscription cost?",
    answer:
      "Plans currently start at £10 for one month. Three months cost £20, six months cost £30, and twelve months plus one free month cost £45.",
  },
  {
    question: "Does every source play in 4K?",
    answer:
      "No. Picture quality varies by source, device, display, player, and connection.",
  },
  {
    question: "Can I use the account on two televisions?",
    answer:
      "A standard account permits one active stream. Request a multi-connection option if two screens must play simultaneously.",
  },
  {
    question: "Is the third-party player fee included?",
    answer:
      "Not automatically. Some Smart TV and mobile applications charge their own fee.",
  },
  {
    question: "How quickly is the account activated?",
    answer:
      "Activation begins after the order and payment have been checked.",
  },
  {
    question: "Does the plan renew automatically?",
    answer:
      "It should expire at the end of its term unless recurring renewal is clearly offered and accepted.",
  },
];

export function B1GFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(faqList.length / 2);
  const leftColFaqs = faqList.slice(0, midIndex);
  const rightColFaqs = faqList.slice(midIndex);

  const renderFaqItem = (item: FAQItem, absoluteIndex: number) => {
    const isOpen = openIndex === absoluteIndex;
    return (
      <div
        key={absoluteIndex}
        data-reveal
        data-delay={String((absoluteIndex % 3) * 50)}
        className="rounded-[12px] border border-slate-200 bg-white overflow-hidden transition-all duration-200 select-none"
      >
        <button
          onClick={() => toggleFAQ(absoluteIndex)}
          className="w-full flex items-center justify-between text-left p-5 gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
            {item.question}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen ? "bg-red-50 text-[#E01E26]" : "bg-slate-50 text-slate-400"
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
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0 border-t border-slate-100/50 mt-1">
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <HelpCircle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Support Center
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Frequently Asked <span className="text-brand-gradient font-bold">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
            <div className="flex flex-col gap-4 w-full">
              {leftColFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
            </div>
            <div className="flex flex-col gap-4 w-full">
              {rightColFaqs.map((faq, idx) => renderFaqItem(faq, idx + midIndex))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
