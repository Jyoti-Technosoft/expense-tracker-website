"use client";

import { Receipt, Zap, BarChart3, Plug, Smartphone, Shield, Rocket, Workflow, ShieldCheck, LucideIcon } from "lucide-react";
import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

export default function Features() {
  const { features } = brandConfig;
  const featureIcons = {
    receipt: <Receipt size={28} />,
    automation: <Zap size={28} />,
    analytics: <BarChart3 size={28} />,
    integration: <Plug size={28} />,
    mobile: <Smartphone size={28} />,
    security: <Shield size={28} />,
  };

  const iconMap : Record<string , LucideIcon> = {
    Workflow,
    BarChart3,
    ShieldCheck,
    Smartphone,
  };

  return (
    <div className="bg-white text-gray-900">

      {/* Hero */}
      <Reveal>
        <section className="relative py-24 overflow-hidden">

          <div className="absolute inset-0 -z-10 pointer-events-none opacity-70 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative max-w-5xl mx-auto px-4 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-3  rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 mb-6">
              <Rocket size={17} />
              <span>{features.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {features.headline}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              {features.subheadline}
            </p>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              {features.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon];

                return (
                  <div key={index} className="flex items-center gap-2">
                    {Icon && <Icon size={18} className="text-indigo-600" />}
                    <span>{highlight.title}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/request-demo"
                className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700 transition"
              >
                Request Demo
              </a>

              <a
                href="/pricing"
                className="rounded-xl border border-indigo-300 hover:bg-indigo-100 bg-white border-gray-300 px-8 py-4 font-semibold hover:bg-gray-50 transition"
              >
                View Pricing
              </a>
            </div>

          </div>
        </section>
      </Reveal>

      {/* Features */}
      <section>

        {features.mainFeatures.map((feature, index) => {
          const isDark = index % 2 === 0;
          const direction = index % 2 === 0 ? "left" : "right";

          return (
            <Reveal key={index} direction={direction} delay={index * 0.05}>

              <div
                className={`py-24 transition-all ${isDark
                  ? "bg-indigo-950 text-white"
                  : "bg-white text-gray-900"
                  }`}
              >

                <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-14">
                  <div
                    className={`w-28 h-28 rounded-3xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${isDark
                      ? "bg-indigo-900 text-white"
                      : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                      }`}
                  >
                    {featureIcons[feature.icon as keyof typeof featureIcons]}
                  </div>

                  {/* content */}
                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`w-10 h-[2px] ${isDark ? "bg-indigo-300" : "bg-indigo-600"
                          }`}
                      />

                      <span
                        className={`text-sm font-medium tracking-wider uppercase ${isDark ? "text-indigo-300" : "text-indigo-600"
                          }`}
                      >
                        Feature {index + 1}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">
                      {feature.title}
                    </h2>

                    <p
                      className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`mt-2 w-2 h-2 rounded-full ${isDark ? "bg-indigo-300" : "bg-indigo-600"
                              }`}
                          />
                          <span
                            className={
                              isDark ? "text-gray-200" : "text-gray-700"
                            }
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

            </Reveal>
          );
        })}

      </section>

      {/*CTA*/}
      <Reveal>
        <section className="py-24 bg-indigo-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to experience it all?
            </h2>

            <p className="mt-4 text-indigo-100">
              Start your free trial and explore every feature in minutes.
            </p>

            <a
              href="/request-demo"
              className="inline-block mt-8 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </Reveal>

    </div>
  );
}