import Link from "next/link";
import {ArrowRight , CheckCircle , Clock , Shield , Plug , Receipt , Workflow , CreditCard , BarChart3 , FileCheck} from "lucide-react";

import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

export default function ProductPage() {
  const {
    hero,
    overview,
    steps,
    features,
    benefits,
    integrations,
    security,
  } = brandConfig.productPage;

  const iconMap: Record<string, any> = {
    receipt: Receipt,
    workflow: Workflow,
    "credit-card": CreditCard,
    analytics: BarChart3,
    "file-check": FileCheck,
    shield: Shield,
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-3">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-200 border border-indigo-400 shadow-sm text-indigo-700 text-sm font-medium">
              <Plug size={16} />
              {hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              {hero.title}
              <span className="block text-indigo-600 mt-4">
                {hero.highlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={hero.primaryCta.href}
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 inline" size={18} />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="px-8 py-4 border hover:bg-indigo-100 border-indigo-400 rounded-2xl bg-white font-semibold hover:bg-gray-50 transition"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <Reveal>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">

            <div className="
        relative text-center
        rounded-3xl
        border border-gray-100
        bg-gradient-to-br from-indigo-50 via-white to-white
        shadow-sm
        px-6 sm:px-10 lg:px-16
        py-14 sm:py-16 lg:py-20
        overflow-hidden
      ">

              

              {/* Content */}
              <div className="relative space-y-6">

                {/* Badge */}
                <span className="
            inline-flex items-center
            px-4 py-1 rounded-full
            text-lg sm:text-xl font-medium
            bg-indigo-100 text-indigo-700
          ">
                  Overview
                </span>

                {/* Title */}
                <h2 className="
            text-2xl sm:text-3xl lg:text-4xl
            font-bold text-gray-900
            leading-snug
          ">
                  {overview.title}
                </h2>

                {/* Description */}
                <p className="
            text-sm sm:text-base lg:text-lg
            text-gray-600
            leading-relaxed
            max-w-3xl mx-auto
          ">
                  {overview.description}
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* How it Work */}
      <section className="py-28 bg-indigo-100">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">How It Works</h2>
              <p className="mt-3 text-gray-600">
                Simple automation in 4 steps
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8 items-stretch">

            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.08}
              >
                <div className="h-full flex flex-col items-center text-center p-8 rounded-3xl bg-white border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500">

                  <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md mb-6">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm flex-1">
                    {step.description}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Powerful Features</h2>
              <p className="mt-3 text-gray-600">
                Everything your finance team needs
              </p>
            </div>
          </Reveal>

          {/* FIXED GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];

              return (
                <Reveal key={feature.title} delay={index * 0.06}>
                  <div
                    className="
                group h-full flex flex-col
                p-8 rounded-3xl border bg-white shadow-sm
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-500
              "
                  >

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-600 flex items-center justify-center mb-5 flex-shrink-0 group-hover:rotate-3 transition-transform duration-500">
                      {Icon && <Icon className="text-white" size={22} />}
                    </div>

                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 flex-1 leading-relaxed">
                      {feature.description}
                    </p>

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-28 overflow-hidden bg-gray-50">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${benefits.bg_image_url})` }}
        />

        <div className="absolute inset-0 bg-white/70" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left side */}
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold">{benefits.title}</h2>
              <p className="mt-6 text-lg text-gray-600">
                {benefits.description}
              </p>
            </div>
          </Reveal>

          {/* Right side */}
          <div className="space-y-4">
            {benefits.items.map((item, index) => (
              <Reveal
                key={item}
                direction="right"
                delay={index * 0.08}
              >
                <div className="flex items-start gap-3 p-5 bg-white border rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition">

                  <CheckCircle className="text-indigo-500 mt-0.5" size={20} />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Integrations */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <Reveal>
            <Plug className="text-indigo-600 mx-auto mb-6" size={40} />
            <h2 className="text-4xl font-bold">Integrates With Your Stack</h2>
            <p className="mt-3 text-gray-600">
              Connect with all major tools effortlessly
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 items-stretch">
            {integrations.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="h-full flex items-center justify-center p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-105 transition font-medium text-center min-h-[80px]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Security */}
      <section className="relative py-28 text-center overflow-hidden px-6">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${security.bg_image_security})` }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <Reveal>
          <div className="relative max-w-4xl mx-auto text-white">
            <Shield className="mx-auto text-indigo-600 mb-6" size={56} />
            <h2 className="text-4xl font-bold text-black">
              {security.title}
            </h2>
            <p className="mt-6 text-lg text-black">
              {security.description}
            </p>
          </div>
        </Reveal>

      </section>

      {/* CTA */}
      <section className="py-28 text-center relative overflow-hidden">

        <Reveal>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_70%)]" />
        </Reveal>

        <Reveal>
          <Clock className="mx-auto mb-6" size={52} />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-4xl font-bold text-indigo-600">
            Ready to automate your expenses?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-black text-lg">
            Join teams saving hours every week with intelligent automation
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            href={hero.primaryCta.href}
            className="inline-flex mt-10 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            {hero.primaryCta.label}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </Reveal>

      </section>

    </div>
  );
}