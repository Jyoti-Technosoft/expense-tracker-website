"use client";

import { useState } from "react";
import Image from "next/image";
import {HelpCircle , MessageCircleQuestion,Sparkles , ShieldCheck , Clock , ChevronDown} from "lucide-react";

import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const { frequentlyAskedQuestions } = brandConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* TOP INTRO */}
        <Reveal>
          <div className="text-center mb-16 space-y-4">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-300 text-sm text-gray-700 bg-indigo-200 hover:bg-indigo-100">
              <MessageCircleQuestion size={18} className="text-indigo-600" />
              Help Center
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything You Need to Know
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Find quick answers about how the platform works, pricing,
              security, integrations, and how to get started in minutes.
            </p>
          </div>
        </Reveal>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <Reveal direction="left">
            <div className="space-y-8 lg:sticky lg:top-24">

              <h3 className="text-2xl font-bold text-gray-900">
                Built to make your workflow simple, fast, and secure
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We designed this platform for teams that want clarity and control.
                Everything is structured to reduce complexity and improve productivity.
              </p>

              {/* feature points */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Sparkles className="text-indigo-600 mt-1" size={18} />
                  <p className="text-sm text-gray-600">
                    Clean experience designed for everyone
                  </p>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="text-indigo-600 mt-1" size={18} />
                  <p className="text-sm text-gray-600">
                    Enterprise-grade security built-in
                  </p>
                </div>

                <div className="flex gap-3">
                  <Clock className="text-indigo-600 mt-1" size={18} />
                  <p className="text-sm text-gray-600">
                    Save hours with automation
                  </p>
                </div>
              </div>

              {/* FLOATING IMAGE (NOT FIXED HEIGHT BLOCK) */}
              <div className="mt-10 relative">
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src="/faq/faq.jpg"
                    alt="FAQ"
                    width={420}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </Reveal>

          {/* RIGHT FAQ */}
          <Reveal direction="right">
            <div className="space-y-4">
              {frequentlyAskedQuestions.faq.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex justify-between px-5 py-4 text-left"
                    >
                      <div className="flex gap-3">
                        <HelpCircle size={18} className="text-indigo-600 mt-1" />
                        <span className="font-semibold text-gray-900">
                          {item.question}
                        </span>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${isOpen ? "rotate-180 text-indigo-600" : "text-gray-500"
                          }`}
                      />
                    </button>

                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-sm text-gray-600 pl-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}