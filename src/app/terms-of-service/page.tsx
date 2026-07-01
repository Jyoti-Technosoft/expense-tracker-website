"use client";

import {FileText, CheckCircle, User, Shield, Lock, Database, RefreshCcw, Eye, AlertTriangle} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

export default function TermsOfService() {
  const { termsOfService } = brandConfig;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // how much of section is visible
      const totalHeight = containerRef.current.offsetHeight;
      const visible = Math.min(
        Math.max(windowHeight - rect.top, 0),
        totalHeight
      );

      const percentage = (visible / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconMap: any = {
    check: <CheckCircle className="text-indigo-600 w-5 h-5" />,
    user: <User className="text-indigo-600 w-5 h-5" />,
    shield: <Shield className="text-indigo-600 w-5 h-5" />,
    lock: <Lock className="text-indigo-600 w-5 h-5" />,
    database: <Database className="text-indigo-600 w-5 h-5" />,
    refresh: <RefreshCcw className="text-indigo-600 w-5 h-5" />,
    eye: <Eye className="text-indigo-600 w-5 h-5" />,
  };

  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <Reveal>
        <section className="relative overflow-hidden">

          <div className="absolute inset-0 -z-10 pointer-events-none opacity-60 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">

            <div className="flex justify-center">
              <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">
                <FileText size={34} />
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
              {termsOfService.headline}
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              {termsOfService.subheadline}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Last updated: {termsOfService.lastUpdated}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Content */}
      <section className="py-20">
        <div ref={containerRef} className="max-w-3xl mx-auto px-4 relative">

          {/* Animated indigo line */}
          <div className="absolute left-3 sm:left-0 top-0 h-full w-[2px] bg-indigo-100">
            <div
              className="w-full bg-indigo-600 transition-all duration-300 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          {/* content flow */}
          <div className="pl-10 sm:pl-6 space-y-14">

            {termsOfService.sections.map((item, i) => (
              <div key={i} className="relative">

                {/* Dot */}
                <div className="absolute -left-[34px] sm:-left-[30px] top-2 h-4 w-4 rounded-full border-4 border-white bg-indigo-600 shadow"/>

                {/* Icon and title */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    {iconMap[item.icon]}
                  </div>

                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>
                </div>

                {/* CONTENT */}
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {item.content}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <Reveal>
        <section className="bg-indigo-500 text-white py-16">
          <div className="max-w-3xl mx-auto text-center px-4">

            <AlertTriangle className="mx-auto mb-4" size={32} />

            <h2 className="text-2xl sm:text-3xl font-bold">
              Questions About Terms?
            </h2>

            <p className="mt-3 text-indigo-100">
              {termsOfService.contact.message}
            </p>

            <p className="mt-6 text-white/90 text-sm">
              {brandConfig.company.email}
            </p>

          </div>
        </section>
      </Reveal>

    </main>
  );
}