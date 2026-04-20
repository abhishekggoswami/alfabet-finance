"use client"

import Link from "next/link"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealStyle, revealCardStyle } from "@/hooks/use-scroll-reveal"

/* Custom icons matching the inspiration design */
function LiveSessionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <circle cx="12" cy="9" r="2" fill="#D4AF37" stroke="none" />
      <path d="M8 17v0a4 4 0 0 1 8 0v0" />
    </svg>
  )
}

function SmallBatchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <circle cx="15" cy="7" r="3" fill="#D4AF37" stroke="none" />
      <path d="M5 21v-2a4 4 0 0 1 4-4h2" />
      <path d="M13 21v-2a4 4 0 0 1 4-4h2" />
    </svg>
  )
}

function ScheduleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="4" x2="9" y2="9" />
      <line x1="15" y1="4" x2="15" y2="9" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#D4AF37" stroke="none" />
    </svg>
  )
}

function CertificateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 12.5L6 22l6-3 6 3-2-9.5" />
      <circle cx="12" cy="8" r="1.5" fill="#D4AF37" stroke="none" />
    </svg>
  )
}

const features = [
  {
    icon: LiveSessionIcon,
    title: "Live Interactive Sessions",
    description: "Real-time learning with Q&A opportunities and hands-on exercises",
  },
  {
    icon: SmallBatchIcon,
    title: "Small Batch Sizes",
    description: "Personalized attention ensuring every participant gets their questions answered",
  },
  {
    icon: ScheduleIcon,
    title: "Regular Schedule",
    description: "New workshops announced monthly covering trending market topics",
  },
  {
    icon: CertificateIcon,
    title: "Certificate of Completion",
    description: "Receive a verified certificate after each workshop to showcase your skills",
  },
]

const topics = [
  "Technical Analysis",
  "Options Trading",
  "Mutual Funds",
  "Risk Assessment",
  "NISM Preparation",
]

export default function WorkshopsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="workshops"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#f9f9f7" }}
    >
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Live Learning Experience"
            heading={<>Workshops That{" "}<VariableProximity
              label="Transform"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic font-normal"
              style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
            /></>}
            subheading="Join our regular live workshops led by Hridyesh Mishra, Ex SEBI Registered Investment Advisor, and gain practical skills in stock market analysis, personal finance, and wealth building."
          />
        </div>

        {/* Main content: 2-column layout */}
        <div className="grid lg:grid-cols-12 gap-5 mb-10">
          {/* Left: 4 feature cards in 2x2 grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 2px 16px rgba(10,46,46,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                  ...revealCardStyle(isVisible, idx * 80),
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(10,46,46,0.12), 0 4px 12px rgba(0,0,0,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 16px rgba(10,46,46,0.07), 0 1px 4px rgba(0,0,0,0.04)")}
              >
                {/* Gradient top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #1B5E5E 0%, #D4AF37 100%)" }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(27,94,94,0.06)" }}
                >
                  <feature.icon />
                </div>
                <h3
                  className="font-sans font-bold text-base mb-2"
                  style={{ color: "#1a1a1a" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#777777" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Workshop info card */}
          <div
            className="lg:col-span-5 p-7 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 50%, #0A2E2E 100%)",
              boxShadow: "0 24px 56px rgba(10,46,46,0.28), 0 4px 16px rgba(0,0,0,0.1)",
              ...revealCardStyle(isVisible, 320),
            }}
          >
            {/* Upcoming Topics label */}
            <span
              className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-5"
              style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37" }}
            >
              Upcoming Topics
            </span>

            {/* Topics pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="font-sans text-xs font-medium px-3.5 py-2 rounded-full"
                  style={{
                    background: "transparent",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="font-sans text-sm leading-relaxed mb-7"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Our workshops are conducted regularly, covering the most relevant topics in finance and investing.
              Each session is designed to provide actionable insights you can apply immediately.
            </p>

            {/* Stats row */}
            <div className="flex items-start gap-8 mb-7">
              <div>
                <p className="font-sans font-bold text-2xl mb-0.5" style={{ color: "#ffffff" }}>50+</p>
                <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Workshops conducted</p>
              </div>
              <div>
                <p className="font-sans font-bold text-2xl mb-0.5" style={{ color: "#ffffff" }}>1500+</p>
                <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Participants</p>
              </div>
              <div>
                <p className="font-sans font-bold text-2xl mb-0.5" style={{ color: "#D4AF37" }}>4.9</p>
                <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Avg Rating</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-[0.15em] px-6 py-3.5 rounded-lg transition-all duration-200 hover:gap-3 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
              style={{
                background: "#1B5E5E",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              View Workshop Schedule
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Bottom banner */}
        <div
          className="text-center py-8 px-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #1B5E5E 0%, #0A2E2E 100%)",
            boxShadow: "0 12px 32px rgba(10,46,46,0.2)",
            ...revealStyle(isVisible, 400),
          }}
        >
          <p
            className="font-sans text-sm md:text-base mb-3"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            New workshops are announced every month. Stay updated with the latest schedule.
          </p>
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-200 hover:gap-3"
            style={{ color: "#D4AF37" }}
          >
            Check for upcoming workshops
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
