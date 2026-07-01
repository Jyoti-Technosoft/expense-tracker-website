import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { brandConfig } from "@/config/brand";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9">
                <img
                  src={brandConfig.company.logo}
                  alt={brandConfig.company.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg">
                  {brandConfig.company.name}
                </span>
                <span className="text-xs text-gray-400">
                  {brandConfig.product.name}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              {brandConfig.footer.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={brandConfig.footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={brandConfig.footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href={brandConfig.footer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* product links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              {brandConfig.footer.links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              {brandConfig.footer.links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Support
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>{brandConfig.company.email}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>{brandConfig.company.phone}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Globe size={16} />
                <span>{brandConfig.company.location}</span>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                Support available within 24 hours
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          
          <p className="text-sm text-gray-400">
            © {currentYear}{" "}
            <span className="text-white font-semibold">
              {brandConfig.company.name}
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            {brandConfig.footer.links.legal.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}