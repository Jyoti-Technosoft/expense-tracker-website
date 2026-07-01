"use client";

import { useState } from "react";
import Image from "next/image";
import {MessageCircle , Mail , Phone , MapPin , Send , CheckCircle2 , User , MessageSquare , Building2 , FileText} from "lucide-react";
import { brandConfig } from "@/config/brand";
import Reveal from "@/components/Reveal";

type FormState = Record<string, string>;

export default function ContactPage() {
  const { contact } = brandConfig;
  const [formData, setFormData] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const stepIcons = [FileText, Send, CheckCircle2];

  const iconMap: Record<string, any> = {
    name: User,
    email: Mail,
    phone: Phone,
    message: MessageSquare,
    company: Building2,
    subject: FileText,
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    contact.form.fields.forEach((field) => {
      const value = formData[field.name];

      if (field.required && (!value || value.trim() === "")) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[field.name] = "Invalid email format";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({});
        setErrors({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <Reveal>
        <section className="relative overflow-hidden isolate">

          {/* Grid Background */}
          <div className="absolute inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <Reveal direction="left" delay={0.1}>
                <div className="space-y-6">

                  {/* Title */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="text-indigo-600 w-7 h-7" />
                      <h1 className="text-4xl font-bold tracking-tight">
                        Send Us a Message
                      </h1>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {contact.subheadline}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {contact.highlights?.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="#form"
                      className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
                    >
                      Contact Support
                    </a>

                    <a
                      href="#info"
                      className="border border-indigo-400 hover:bg-indigo-100 bg-white px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
                    >
                      View Info
                    </a>
                  </div>

                  {/* Footer note */}
                  <p className="text-sm text-gray-400 pt-2">
                    We typically respond within {contact.ResponseTime}. No automated replies — real humans only.
                  </p>

                </div>
              </Reveal>

              {/* RIGHT */}
              <Reveal direction="right" delay={0.1}>
                <div className="relative">

                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border shadow-xl bg-gray-100">
                    <Image
                      src="/contact/contact_image.webp"
                      alt="Contact"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute -bottom-4 left-4 bg-white border shadow-md rounded-xl px-4 py-2">
                    <p className="text-xs text-gray-500">Response Time</p>
                    <p className="text-indigo-600 font-bold">
                      Within {contact.ResponseTime}
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal direction="left" delay={0.1}>
        <div className="pt-12 space-y-10 text-center">

          {/* Header */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              What happens next
            </p>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              A simple, guided process to get started in minutes
            </p>
          </div>

          {/* Wrapper */}
          <div className="relative max-w-6xl mx-auto px-4">

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 relative">

              {contact.steps?.map((step, i) => {
                const Icon = stepIcons[i % stepIcons.length];

                return (
                  <div
                    key={i}
                    className="
                group relative
                rounded-2xl border border-gray-100
                bg-indigo-50 backdrop-blur
                shadow-sm hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                p-8 flex flex-col items-center text-center
              "
                  >

                    {/* Icon */}
                    <div className="
                w-16 h-16 rounded-2xl
                flex items-center justify-center
                bg-white text-indigo-600
                group-hover:bg-indigo-600 group-hover:text-white
                transition-all duration-300
              ">
                      <Icon size={26} />
                    </div>

                    {/* Step badge */}
                    <div className="
                mt-4 text-xs font-semibold
                px-3 py-1 rounded-full
                bg-indigo-50 text-indigo-600
              ">
                      Step {i + 1}
                    </div>

                    {/* Content */}
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section id="form" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-12 gap-12">

              {/* Form */}
              <div className="lg:col-span-8">
                <div className="rounded-3xl border bg-indigo-100 shadow-xl p-8">

                  {submitted ? (
                    <div className="text-center py-20">
                      <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold">Message Sent!</h2>
                      <p className="text-gray-600 mt-2">
                        {contact.form.successMessage}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold">
                        {contact.headline}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {contact.subheadline}
                      </p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                        {contact.form.fields.map((field) => {
                          const Icon = iconMap[field.icon || ""];

                          return (
                            <div key={field.name} className="space-y-2">

                              <label className="text-sm font-medium text-gray-700">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-1">*</span>}
                              </label>

                              <div className="relative">

                                {/* ICON */}
                                {Icon && (
                                  <Icon className="absolute left-4 top-6 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                )}

                                {field.type === "textarea" ? (
                                  <textarea
                                    name={field.name}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    rows={6}
                                    className="w-full bg-white rounded-xl border pl-12 pr-4 py-3 outline-none
            focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition"
                                  />
                                ) : (
                                  <input
                                    name={field.name}
                                    type={field.type === "email" ? "text" : field.type}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-xl border pl-12 pr-4 py-3 outline-none
            focus:border-indigo-600 focus:ring-4 bg-white focus:ring-indigo-100 transition"
                                  />
                                )}

                              </div>

                              {errors[field.name] && (
                                <p className="text-red-500 text-xs">{errors[field.name]}</p>
                              )}
                            </div>
                          );
                        })}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <Send size={18} />
                          {loading ? "Sending..." : contact.form.submitButton}
                        </button>

                      </form>
                    </>
                  )}

                </div>
              </div>

              {/* Departments */}
              <div id="info" className="lg:col-span-4 space-y-6">

                {contact.departments.map((dept, i) => {
                  const isDark = i % 2 === 0;

                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition border ${isDark
                        ? "bg-indigo-900 text-white border-indigo-800"
                        : "bg-white text-gray-900 border-gray-200"
                        }`}
                    >
                      <h3 className="font-semibold text-lg">{dept.name}</h3>

                      <p
                        className={`text-sm mt-1 ${isDark ? "text-indigo-100" : "text-gray-500"
                          }`}
                      >
                        {dept.description}
                      </p>

                      <div className="mt-4 space-y-3 text-sm">

                        <div className="flex items-center gap-2">
                          <Mail size={16} className={isDark ? "text-white" : "text-indigo-600"} />
                          <a href={`mailto:${dept.email}`} className="hover:underline">
                            {dept.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone size={16} className={isDark ? "text-white" : "text-indigo-600"} />
                          <a href={`tel:${dept.phone}`} className="hover:underline">
                            {dept.phone}
                          </a>
                        </div>

                      </div>
                    </div>
                  );
                })}

                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <MapPin size={18} className="text-indigo-600" />
                    Headquarters
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    {brandConfig.company.address}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}