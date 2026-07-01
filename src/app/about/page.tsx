"use client";

import { Users, Zap, Shield, Heart, Rocket } from "lucide-react";
import { brandConfig } from "@/config/brand";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function About() {
  const { about } = brandConfig;

  const valueIcons = {
    users: <Users size={22} />,
    zap: <Zap size={22} />,
    shield: <Shield size={22} />,
    heart: <Heart size={22} />,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}

      <Reveal>
        <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-white">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 border border-indigo-200 text-indigo-600 mb-6">
              About Our Company
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              {about.headline}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {about.subheadline}
            </p>

            <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              <Rocket size={18} />
              We are on a mission to simplify finance automation
            </div>

          </div>
        </section>
      </Reveal>

      {/* Story */}
      <section className="py-10 md:py-14 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-16 items-center">

          {/* LEFT */}
          <Reveal direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {about.story.title}
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                {about.story.content}
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {about.story.content2}
              </p>
            </div>
          </Reveal>

          {/* Right side */}
          <Reveal direction="right">
            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-indigo-200 rounded-3xl blur-2xl opacity-40" />

              <div className="relative bg-white border rounded-3xl overflow-hidden shadow-xl">

                <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] lg:h-[320px]">
                  <Image
                    src={brandConfig.about.story.bgImage_ofGrid}
                    alt="Happy Customers"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />

                <div className="p-5 sm:p-6 text-center">
                  <p className="text-sm text-gray-700 mb-2">
                    Trusted by users
                  </p>

                  <div className="text-4xl sm:text-5xl font-bold text-indigo-600">
                    {brandConfig.hero.stats[0].value}
                  </div>

                  <p className="mt-2 font-medium text-sm sm:text-base">
                    Happy Customers Worldwide
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal>
            <div className="text-center mb-12 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Core Values
              </h2>
              <p className="text-gray-600 mt-3">
                Principles that guide everything we build
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {about.values.map((value, index) => (
              <Reveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <div className="h-full bg-white border rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 sm:mb-5">
                    {valueIcons[value.icon as keyof typeof valueIcons]}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal>
            <div className="text-center mb-12 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Leadership Team
              </h2>
              <p className="text-gray-600 mt-3">
                Experienced minds shaping the product
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {about.team.map((member, index) => (
              <Reveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div className="text-center group">

                  <div className="relative mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-40 h-40 md:w-44 md:h-44 mx-auto rounded-2xl object-cover shadow-md group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>

                  <p className="text-indigo-600 text-sm font-medium">
                    {member.role}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {member.bio}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <Reveal direction="up">
        <section className="py-20 md:py-24 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              See how automation can transform your finance workflow
            </h2>

            <p className="text-indigo-100 mt-4 text-base md:text-lg">
              Book a personalized demo and explore how our platform simplifies financial operations for your team.
            </p>

            <Link
              href="/request-demo"
              className="inline-block mt-8 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:scale-105 transition"
            >
              Book a Demo
            </Link>

          </div>

        </section>
      </Reveal>
    </div>
  );
}