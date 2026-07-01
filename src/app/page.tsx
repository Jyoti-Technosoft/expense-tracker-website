"use client";

import Link from "next/link";
import {
    ArrowRight,
    CheckCircle,
    Users,
    Clock,
    Smile,
    Building,
    Star,
} from "lucide-react";

import { brandConfig } from "../config/brand";
import Reveal from "@/components/Reveal";
import CountUp from "react-countup";

export default function Home() {
    const { hero, features } = brandConfig;

    const iconMap = {
        Users,
        Clock,
        Smile,
        Building,
    } as const;

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="max-w-7xl mx-auto px-6 text-center relative">
                    <Reveal direction="up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            {hero.headline}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.1} direction="up">
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            {hero.subheadline}
                        </p>
                    </Reveal>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Reveal delay={0.2} direction="left">
                            <Link
                                href="/request-demo"
                                className="group inline-flex items-center px-8 py-4 bg-indigo-600  text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {hero.primaryCTA.label}
                                <ArrowRight
                                    className="ml-2 group-hover:translate-x-1 transition"
                                    size={20}
                                />
                            </Link>
                        </Reveal>

                        <Reveal delay={0.2} direction="right">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 border border-indigo-400 text-gray-700 bg-white font-semibold rounded-2xl hover:bg-indigo-100 hover:scale-105 transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </Reveal>
                    </div>

                    <Reveal delay={0.25} direction="up">
                        <p className="text-sm text-gray-500 mt-4">
                            {hero.primaryCTA.subtext}
                        </p>
                    </Reveal>
                </div>

                {/* Stats */}
                <div className="mt-20 max-w-6xl mx-auto px-6">
                    <Reveal direction="up">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
                            Trusted by modern finance teams worldwide
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                        {hero.stats.map((stat, index) => {
                            const Icon =
                                iconMap[stat.icon as keyof typeof iconMap];

                            return (
                                <Reveal
                                    key={index}
                                    delay={index * 0.1}
                                    direction={index % 2 === 0 ? "left" : "right"}
                                >
                                    <div className="relative flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full min-h-[200px] overflow-hidden">

                                        {/* hover background */}
                                        <div className="group absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-50 via-white to-indigo-50" />

                                        {/* ICON (perfect fixed alignment block) */}
                                        <div className="relative flex items-center justify-center w-full h-12 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
                                                {Icon && (
                                                    <Icon className="text-white" size={22} />
                                                )}
                                            </div>
                                        </div>

                                        {/* Number */}
                                        <div className="relative text-3xl sm:text-4xl font-bold text-indigo-600 leading-none">
                                            <CountUp
                                                end={stat.value}
                                                duration={2.2}
                                                enableScrollSpy
                                                scrollSpyOnce
                                            />
                                            <span>{stat.suffix}</span>
                                        </div>

                                        {/* Label */}
                                        <div className="relative text-sm text-gray-600 mt-2">
                                            {stat.label}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <Reveal direction="up">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {features.headline}
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1} direction="up">
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {features.subheadline}
                        </p>
                    </Reveal>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {features.mainFeatures.slice(0, 6).map((feature, index) => (
                            <Reveal
                                key={index}
                                delay={index * 0.1}
                                direction={index % 2 === 0 ? "right" : "left"}
                            >
                                <div className="group relative h-full min-h-[420px] flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                                    {/* hover bg */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative flex flex-col flex-1">
                                        {/* icon */}
                                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle
                                                className="text-white"
                                                size={24}
                                            />
                                        </div>

                                        {/* title */}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {feature.title}
                                        </h3>

                                        {/* desc */}
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {feature.description}
                                        </p>

                                        {/* benefits */}
                                        <ul className="mt-auto space-y-3">
                                            {feature.benefits.map((b, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start text-sm text-gray-600"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 mr-3 flex-shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal direction="up">
                    <div className="text-center mt-14">
                        <Link
                            href="/features"
                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 group"
                        >
                            View all features
                            <ArrowRight
                                className="ml-2 group-hover:translate-x-1 transition"
                                size={20}
                            />
                        </Link>
                    </div>
                </Reveal>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-indigo-100">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <Reveal direction="up">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {brandConfig.testimonials.headline}
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1} direction="up">
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {brandConfig.testimonials.subheadline}
                        </p>
                    </Reveal>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brandConfig.testimonials.items.map((t, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.1}
                            direction={index % 2 === 0 ? "left" : "right"}
                        >
                            <div className="relative h-full flex flex-col p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                                {/* stars */}
                                <div className="flex mb-4 gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={
                                                i < t.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                            }
                                        />
                                    ))}
                                </div>

                                {/* message */}
                                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                                    “{t.message}”
                                </p>

                                {/* user */}
                                <div className="mt-auto">
                                    <div className="font-semibold text-gray-900">
                                        {t.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {t.role} • {t.company}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 bg-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Reveal direction="up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to streamline your expenses?
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1} direction="up">
                        <p className="text-xl text-indigo-100 mb-10">
                            Join 10,000+ businesses saving 15+ hours per month with {brandConfig.product.name}.
                        </p>
                    </Reveal>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4">

                        <Reveal delay={0.2} direction="left">
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/request-demo"
                                    className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 text-center block"
                                >
                                    {hero.primaryCTA.label}
                                </Link>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2} direction="right">
                            <div className="w-full sm:w-auto">
                                <Link
                                    href="/pricing"
                                    className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 text-center block"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </div>
    );
}