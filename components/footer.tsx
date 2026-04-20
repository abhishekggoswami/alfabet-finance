"use client"

import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react"
import { LegalLinks } from "@/components/legal-modals"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "/courses" },
  { label: "Workshops", href: "#workshops" },
  { label: "Calculators", href: "/calculators" },
  { label: "Testimonials", href: "#testimonials" },
]

const courses = [
  { label: "Stock Market Basics", href: "/courses/basics-of-stock-market" },
  { label: "Pro Mutual Fund Investor", href: "/courses/pro-mutual-fund-investor" },
  { label: "Technical Analysis", href: "/courses/technical-analysis" },
  { label: "Options Pro", href: "/courses/options-pro" },
  { label: "Fundamental Analysis", href: "/courses/fundamental-analysis" },
  { label: "SEBI Research Analyst", href: "/courses/sebi-research-analyst" },
]

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/learnwithalfabetfinance?igsh=MW9tZjcyajFibDdncQ%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@alfabetfinance?si=_CqiSmgSoRRL_uU7", label: "YouTube" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/FSpAEKtxIzPFjvAYF7UWtZ", label: "WhatsApp Community" },
  { icon: Send, href: "https://t.me/+ZofYRt_iIAM4YTNl", label: "Telegram Community" },
]

export default function Footer() {
  return (
    <footer style={{ background: "#0A2E2E" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-DCuPTSLKBmUhcTabfcwzENG35GwMVs.png"
                alt="Alfabet Finance Logo"
                width={130}
                height={65}
                className="brightness-0 invert opacity-90 w-[100px] md:w-[130px]"
              />
            </div>
            <p
              className="font-sans text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Empowering individuals to take charge of their financial future
              through expert-led courses, interactive workshops, and
              personalized coaching.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(212,175,55,0.15)"
                    e.currentTarget.style.color = "#D4AF37"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                  }}
                >
                  <social.icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-[0.15em] mb-5"
              style={{ color: "#D4AF37" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 font-sans text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)"
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-[0.15em] mb-5"
              style={{ color: "#D4AF37" }}
            >
              Our Courses
            </h4>
            <ul className="flex flex-col gap-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="group inline-flex items-center gap-1.5 font-sans text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)"
                    }}
                  >
                    <span>{course.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-sans font-semibold text-sm uppercase tracking-[0.15em] mb-5"
              style={{ color: "#D4AF37" }}
            >
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4AF37" }}
                />
                <span
                  className="font-sans text-sm"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  contact@alfabetfinance.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4AF37" }}
                />
                <span
                  className="font-sans text-sm"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4AF37" }}
                />
                <span
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  India
                </span>
              </li>
            </ul>

            {/* Newsletter mini-form */}
            <div className="mt-6">
              <p
                className="font-sans text-xs font-medium uppercase tracking-wider mb-2.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Stay Updated
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg font-sans text-xs outline-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRight: "none",
                    color: "#ffffff",
                  }}
                />
                <button
                  className="px-4 py-2 rounded-r-lg font-sans text-xs font-semibold transition-all duration-200 hover:brightness-110 cursor-pointer"
                  style={{
                    background: "#1B5E5E",
                    color: "#ffffff",
                    border: "1px solid #1B5E5E",
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)",
          }}
        />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p
          className="font-sans text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          &copy; {new Date().getFullYear()} Alfabet Finance. All rights
          reserved.
        </p>

        <div className="flex items-center gap-6">
          <LegalLinks />
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.15)"
            e.currentTarget.style.color = "#D4AF37"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)"
            e.currentTarget.style.color = "rgba(255,255,255,0.4)"
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={16} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  )
}
