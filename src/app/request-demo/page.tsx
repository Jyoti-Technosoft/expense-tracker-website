"use client"
import { useState } from "react";
import { brandConfig } from "@/config/brand";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from "@/components/ui/select";
import { Users, Building2, Layers, Building, Crown, Check, Send, Calendar, Sparkles, User, Phone, MessageSquare, MailIcon, Workflow } from "lucide-react";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const DayPicker = dynamic(
  () =>
    import("react-day-picker").then((mod) => ({
      default: mod.DayPicker,
    })),
  {
    ssr: false,
  }
);

const Reveal = dynamic(
  () => import("@/components/Reveal"),
  {
    ssr: false,
  }
);

export default function RequestDemo() {
  const { requestDemo, product } = brandConfig;
  const badges = [
    "No setup required",
    "Personalized demo",
    "Free consultation"
  ]
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    teamSize: "",
    phone: "",
    preferredDate: null as Date | null,
    message: "",
  });
  const iconMap: Record<string, any> = {
    users: Users,
    "building-2": Building2,
    layers: Layers,
    building: Building,
    crown: Crown,
    user: User,
    mail: MailIcon,
    phone: Phone,
    calendar: Calendar,
    messageSquare: MessageSquare
  };
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCalendar, setShowCalendar] = useState(false);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 20);

  const formatDate = (date: Date) => {
    return format(date, "dd/MM/yyyy");
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.workEmail?.trim()) {
      newErrors.workEmail = "Work Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)
    ) {
      newErrors.workEmail = "Invalid Email format";
    }

    if (!formData.company?.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Team Size is required";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred Date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          preferredDate: formData.preferredDate
            ? format(formData.preferredDate, "dd/MM/yyyy")
            : "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setErrors({});
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send request");
    }
  };

  const fullNameField = requestDemo.form.fields.find(
    (f) => f.name === "fullName"
  );
  const FullNameIcon = fullNameField && fullNameField.icon ? iconMap[fullNameField.icon as keyof typeof iconMap] : null;

  const emailField = requestDemo.form.fields.find(
    (f) => f.name === "workEmail"
  );
  const WorkMaliIcon = emailField && emailField.icon ? iconMap[emailField.icon as keyof typeof iconMap] : null;

  const companyField = requestDemo.form.fields.find(
    (f) => f.name === "company"
  )
  const CompanyIcon = companyField && companyField.icon ? iconMap[companyField.icon as keyof typeof iconMap] : null;

  const teamSizeField = requestDemo.form.fields.find(
    (f) => f.name === "teamSize"
  )
  const TeamSizeIcon = teamSizeField && teamSizeField.icon ? iconMap[teamSizeField.icon as keyof typeof iconMap] : null;

  const dateField = requestDemo.form.fields.find(
    (f) => f.name === "preferredDate"
  );
  const DateIcon = dateField && dateField.icon ? iconMap[dateField.icon as keyof typeof iconMap] : null;

  const messageField = requestDemo.form.fields.find(
    (f) => f.name === "message"
  )
  const MessageIcon = messageField && messageField.icon ? iconMap[messageField.icon as keyof typeof iconMap] : null;
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <Reveal direction="right" delay={0.1}>
        <section className="relative pt-28 pb-20 mb-10 overflow-hidden">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative max-w-4xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border shadow-sm text-indigo-600 text-sm font-medium hover:scale-105 transition">
              <Sparkles size={16} className="animate-pulse" />
              Book a personalized demo
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking tight">
              See how{" "}
              <span className="text-indigo-600">{product?.name || "our product"}</span>
              {" "}transforms your workflow
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Get a live walkthrough tailored to your business in just 30 minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              {badges.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  <Check className="w-4 h-4 text-indigo-600" />
                  {item}
                </span>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* Main Section */}
      <Reveal>
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

            {/* Left side */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                  What you’ll get in your demo
                </h2>
                <p className="text-lg text-indigo-600 leading-relaxed mt-2">
                  {requestDemo.credebilityText}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A quick walkthrough tailored to your team’s workflow and needs.
                </p>
              </div>
              <Reveal direction="left" delay={0.2}>
                <div className="space-y-3">
                  {requestDemo.benefits.map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 p-5 rounded-2xl 
                   bg-white border shadow-sm 
                   hover:shadow-md hover:border-indigo-200 
                   transition-all duration-300"
                    >

                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition">
                        <Check className="text-indigo-600" size={16} />
                      </div>

                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="relative overflow-hidden p-6 rounded-2xl 
                  bg-gradient-to-br from-indigo-50 to-white 
                  border border-indigo-100 shadow-sm">

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200/40 rounded-full blur-2xl" />

                <div className="relative flex items-center gap-2 text-indigo-700 font-semibold">
                  <Calendar size={18} />
                  30-minute live session
                </div>

                <p className="relative text-sm text-gray-600 mt-2 leading-relaxed">
                  Our product expert will walk you through real use cases,
                  setup flow, and optimization opportunities for your team.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-3">

              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border shadow-xl">

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                      <Send className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mt-4">
                      Request Received!
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Our team will contact you shortly to schedule your demo.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-indigo-50 p-6 md:p-10 rounded-2xl">
                      <h3 className="text-4xl text-indigo-500 font-bold mb-6">
                        Book your demo
                      </h3>


                      <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="grid md:grid-cols-2 gap-4">

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Full Name <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                              {FullNameIcon && (
                                <FullNameIcon
                                  className="absolute left-4 top-1/2 -translate-y-1/2
                   h-5 w-5 text-gray-400"
                                />
                              )}

                              <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full h-14 pl-12 pr-4 rounded-xl border bg-white
                 focus:ring-2 focus:ring-indigo-500 outline-none"
                              />
                            </div>

                            {errors.fullName && (
                              <p className="text-red-500 text-xs">{errors.fullName}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Work Email <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                              {WorkMaliIcon && (
                                <WorkMaliIcon
                                  className="absolute left-4 top-1/2 -translate-y-1/2
                   h-5 w-5 text-gray-400"
                                />
                              )}

                              <input
                                name="workEmail"
                                type="text"
                                value={formData.workEmail}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                className="w-full p-3 h-14 pl-12 pr-4 rounded-xl bg-white border focus:ring-2 focus:ring-indigo-500 outline-none"
                              />
                            </div>

                            {errors.workEmail && (
                              <p className="text-red-500 text-xs">{errors.workEmail}</p>
                            )}
                          </div>
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Company Name <span className="text-red-500">*</span>
                          </label>

                          <div className="relative">
                            {CompanyIcon && (
                              <CompanyIcon
                                className="absolute left-4 top-1/2 -translate-y-1/2
                   h-5 w-5 text-gray-400"
                              />
                            )}

                            <input
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                              className="w-full h-14 pl-12 pr-4 p-3 bg-white rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                          </div>

                          {errors.company && (
                            <p className="text-red-500 text-xs">{errors.company}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Team Size <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                              {
                                TeamSizeIcon && (
                                  <TeamSizeIcon className="absolute left-4 top-1/2 -translate-y-1/2
                   h-5 w-5 text-gray-400" />
                                )
                              }
                              <Select
                                value={formData.teamSize}
                                onValueChange={(value) =>
                                  setFormData({ ...formData, teamSize: value })
                                }
                              >
                                <SelectTrigger
                                  className="
    w-full min-h-[60px] px-5 py-4
    rounded-xl border bg-white shadow-sm
    hover:shadow-md transition
    focus:ring-2 focus:ring-indigo-500 pl-12 pr-4
  "
                                >
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>

                                <SelectContent className="
  rounded-2xl border bg-white/95 backdrop-blur-xl
  shadow-2xl p-2
">
                                  {requestDemo.form.fields
                                    .find((f) => f.name === "teamSize")
                                    ?.options?.map((opt: any) => {
                                      const Icon = iconMap[opt.icon];

                                      return (
                                        <SelectItem
                                          key={opt.value}
                                          value={opt.value}
                                          className="
            rounded-xl px-3 py-2 cursor-pointer
            focus:bg-indigo-50
            data-[state=checked]:bg-indigo-100
            data-[state=checked]:text-indigo-700
          "
                                        >
                                          <div className="flex items-start gap-3">

                                            {/* Icon */}
                                            {Icon && (
                                              <Icon className="w-4 h-4 mt-0.5 text-indigo-600" />
                                            )}

                                            {/* Text */}
                                            <div className="flex flex-col leading-tight">
                                              <span className="text-sm font-medium">
                                                {opt.label}
                                              </span>
                                              <span className="text-xs text-gray-500">
                                                {opt.description}
                                              </span>
                                            </div>

                                          </div>
                                        </SelectItem>
                                      );
                                    })}
                                </SelectContent>
                              </Select>
                            </div>

                            {errors.teamSize && (
                              <p className="text-red-500 text-xs">{errors.teamSize}</p>
                            )}
                          </div>

                          <div className="space-y-2 relative">
                            <label className="text-sm font-medium text-gray-700">
                              Preferred Date <span className="text-red-500">*</span>
                            </label>

                            {/* Display input */}
                            <div className="relative">
                              {DateIcon && (
                                <DateIcon className="absolute left-4 top-1/2 -translate-y-1/2
                   h-5 w-5 text-gray-400" />
                              )}
                              <input
                                type="text"
                                readOnly
                                value={formData.preferredDate ? formatDate(formData.preferredDate) : ""}
                                placeholder="Select a date"
                                className="w-full h-14 p-3 bg-white pl-12 pr-4 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                                onClick={() => setShowCalendar(!showCalendar)}
                              />
                            </div>

                            {errors.preferredDate && (
                              <p className="text-red-500 text-xs">{errors.preferredDate}</p>
                            )}

                            {/* Calendar popup */}
                            {showCalendar && (
                              <div className="absolute z-50 mt-2 bg-white border rounded-xl shadow-lg">
                                <DayPicker
                                  mode="single"
                                  selected={formData.preferredDate || undefined}
                                  onSelect={(date) => {
                                    setFormData({ ...formData, preferredDate: date || null });
                                    setShowCalendar(false);
                                  }}
                                  disabled={[
                                    { before: today },
                                    { after: maxDate },
                                  ]}
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Additional Notes
                          </label>

                          <div className="relative">
                            {
                              MessageIcon && (
                                <MessageIcon className="absolute left-4 top-7 -translate-y-1/2
                   h-5 w-5 text-gray-400" />
                              )
                            }

                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your requirements..."
                              rows={5}
                              className="w-full p-4 pl-12 pr-4 bg-white rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                        >
                          Request Demo
                        </button>

                      </form>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </section>
      </Reveal>

      {/* What happens next */}
      <Reveal direction="right" delay={0.1}>
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-white border rounded-2xl shadow-sm p-8 md:p-10">

            {/* Heading */}
            <div className="text-center mb-8">

              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-indigo-600" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900">
                {requestDemo.whatHappenNext.headline}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {requestDemo.whatHappenNext.subheadline}
              </p>

            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6">

              {requestDemo.whatHappenNext.nextSteps?.map((step, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-xl border bg-gray-50 hover:bg-indigo-50 transition"
                >

                  {/* Step number */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold mb-4">
                    {i + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector line (optional visual polish) */}
                  {i !== 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-gray-300" />
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}