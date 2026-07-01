"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brand";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const items = brandConfig.navigation.items;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
             src={brandConfig.company.logo}
              alt={brandConfig.company.name}
              className="w-9 h-9 object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-gray-900 text-sm sm:text-base">
                {brandConfig.company.name}
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                {brandConfig.product.name}
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden xl:flex items-center gap-5">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm transition ${isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={brandConfig.navigation.ctaButton.path}
              className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700"
            >
              {brandConfig.navigation.ctaButton.label}
            </Link>
          </div>

          {/* Tablet */}
          <div className="hidden lg:flex xl:hidden items-center gap-3">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm transition ${isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={brandConfig.navigation.ctaButton.path}
              className="px-3 py-2 bg-indigo-600 text-white text-xs rounded-md"
            >
              Demo
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-gray-900"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[9999] ${isOpen ? "visible" : "invisible"
          }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-[100dvh] w-80 bg-white flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <img
                src={brandConfig.company.logo}
                alt={brandConfig.company.name}
                className="w-8 h-8 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-sm text-black">
                  {brandConfig.company.name}
                </span>
                <span className="text-xs text-gray-500">
                  {brandConfig.product.name}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* nav */}
          <div className="flex-1 overflow-y-auto p-2">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md ${isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="p-3 border-t">
            <Link
              href={brandConfig.navigation.ctaButton.path}
              onClick={() => setIsOpen(false)}
              className="w-full flex justify-center py-3 bg-indigo-600 text-white rounded-lg"
            >
              {brandConfig.navigation.ctaButton.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}