"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { pricing } = brandConfig;
  const router = useRouter();

  return (
    <main className="min-h-screen pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Hero */}
      <Reveal>
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {pricing.headline}
            </h1>

            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              {pricing.subheadline}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">

              <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>
                Monthly
              </span>

              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? "bg-indigo-600" : "bg-gray-300"
                  }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : ""
                    }`}
                />
              </button>

              <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
                Annual{" "}
                <span className="ml-1 text-green-600 text-xs font-semibold">
                  Save 20%
                </span>
              </span>

            </div>

          </div>
        </section>
      </Reveal>

      {/* Pricing */}
      <Reveal>
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              {pricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-lg ${plan.popular ? "border-indigo-600 scale-[1.02]" : "border-gray-200"
                    }`}
                >

                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="flex items-center gap-1 bg-indigo-600 text-white text-xs sm:text-sm font-medium px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                        <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {plan.description}
                    </p>

                    {/* PRICE */}
                    <div className="mt-6 flex items-end justify-center gap-2">
                      {plan.price.custom ? (
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                          {plan.price.custom}
                        </span>
                      ) : (
                        <>
                          <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                            {plan.price.currency}
                            {isAnnual ? plan.price.yearly : plan.price.monthly}
                          </span>
                          <span className="text-gray-500 text-sm mb-1">
                            /user/mo
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* feature of plan */}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => router.push(plan.href)}
                    className={`mt-8 flex w-full items-center justify-center rounded-xl py-3 font-semibold transition ${plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                  >
                    {plan.cta}
                  </button>

                </div>
              ))}

            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="py-16 sm:py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Still have questions?
            </h2>

            <p className="mt-4 text-indigo-100 text-sm sm:text-lg">
              Our team will help you choose the perfect plan for your business.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Contact Sales
            </a>

          </div>
        </section>
      </Reveal>

    </main>
  );
}