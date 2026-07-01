"use client";

import {ShieldCheck , UserCheck , Database , Eye , Lock , RefreshCcw , Mail , MessageCircle} from "lucide-react";

import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

export default function PrivacyPolicy() {
  const { privacyPolicy } = brandConfig;

  const iconMap: any = {
    user: <UserCheck className="text-indigo-600 w-5 h-5" />,
    database: <Database className="text-indigo-600 w-5 h-5" />,
    share: <Eye className="text-indigo-600 w-5 h-5" />,
    shield: <ShieldCheck className="text-indigo-600 w-5 h-5" />,
    check: <Lock className="text-indigo-600 w-5 h-5" />,
    eye: <Eye className="text-indigo-600 w-5 h-5" />,
    refresh: <RefreshCcw className="text-indigo-600 w-5 h-5" />,
  };

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <Reveal>
        <section className="relative overflow-hidden">

          {/* Grid Background */}
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600">
                <ShieldCheck size={32} />
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
              {privacyPolicy.headline}
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              {privacyPolicy.subheadline}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Last updated: {privacyPolicy.lastUpdated}
            </p>

          </div>
        </section>
      </Reveal>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-8">

          {privacyPolicy.sections.map((item, i) => {
            const direction = i % 2 === 0 ? "left" : "right";

            return (
              <Reveal key={i} direction={direction}>
                <div className="border rounded-2xl p-6 bg-white hover:shadow-md transition">

                  {/* TITLE ROW */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-50">
                      {iconMap[item.icon]}
                    </div>

                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>
                  </div>

                  {/* CONTENT */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.content}
                  </p>

                </div>
              </Reveal>
            );
          })}

        </div>
      </section>

      {/* CONTACT */}
      <Reveal>
        <section className="bg-indigo-500 text-white py-16">
          <div className="max-w-3xl mx-auto text-center px-4">

            <MessageCircle className="mx-auto mb-4" size={32} />

            <h2 className="text-2xl sm:text-3xl font-bold">
              Privacy Questions?
            </h2>

            <p className="mt-3 text-indigo-100">
              {privacyPolicy.contact.message}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
              <Mail size={18} />
              <span>{privacyPolicy.contact.email}</span>
            </div>

          </div>
        </section>
      </Reveal>

    </main>
  );
}