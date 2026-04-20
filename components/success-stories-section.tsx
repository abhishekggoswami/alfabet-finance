"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Tv, Trophy, Award } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealStyle, revealCardStyle } from "@/hooks/use-scroll-reveal"

/* ══════════════════════════════════════════════════════════════
   Static Subtle Grid — subtle vertical lines like chalkboard
══════════════════════════════════════════════════════════════ */
function SubtleGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 100%",
      }}
    />
  )
}

/* ══════════════════════════════════════════════════════════════
   Story Data — single featured alumni
══════════════════════════════════════════════════════════════ */
const story = {
  name: "Om Mehra",
  role: "Research Analyst & Market Commentator",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_1m75gg1m75gg1m75-removebg-preview-HqF4k652PMXzMOW71iGbaaCFq6VcLE.png",
  quote:
    "Hridyesh demonstrates a sound understanding of capital market concepts and has a strong hold on technical analysis. His ability to explain complex ideas in a structured and simplified manner reflects clarity of thought. His approach emphasizes building a strong foundation, with a focus on financial literacy, technical analysis, and conceptual understanding.",
  achievements: [
    {
      icon: Tv,
      label: "CNBC Panelist",
      detail: "Featured as Research Analyst on national financial media",
    },
    {
      icon: Trophy,
      label: "Research Champion",
      detail: "Winner of equity research competitions — 5+ times",
    },
    {
      icon: Award,
      label: "Capital Market Expert",
      detail: "Recognized for structured & simplified market analysis",
    },
  ],
}

export default function SuccessStoriesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="success-stories"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #1B5E5E 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div ref={containerRef} className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Real Results"
            heading={<>Stories That Speak{" "}<VariableProximity
              label="Louder"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), Georgia, serif" }}
            />{" "}Than Claims</>}
            subheading="From conceptual clarity to real-world application — these are the people who chose to invest in their financial education and transformed the way they engage with markets."
          />
        </div>

        {/* Main Card */}
        <div style={revealCardStyle(isVisible, 200)}>
          <div
            className="rounded-2xl md:rounded-3xl overflow-hidden"
            style={{
              background: "#0A2E2E",
              boxShadow: "0 36px 88px rgba(10,46,46,0.22), 0 8px 28px rgba(10,46,46,0.12)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* ══════ LEFT: Photo Panel ══════ */}
              <div
                className="lg:col-span-2 relative flex flex-col justify-end overflow-hidden"
                style={{ minHeight: "420px", "@media (min-width: 1024px)": { minHeight: "340px" } }}
              >
                {/* Dark teal bg */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(145deg, #0D3838 0%, #0A2E2E 55%, #071E1E 100%)",
                  }}
                />

                {/* Large "01" number */}
                <div
                  className="absolute top-4 left-4 md:top-6 md:left-6 select-none pointer-events-none font-sans font-black leading-none"
                  style={{
                    fontSize: "clamp(4rem, 10vw, 7rem)",
                    color: "rgba(255,255,255,0.04)",
                  }}
                  aria-hidden="true"
                >
                  01
                </div>

                {/* Subtle vertical grid lines */}
                <SubtleGrid />

                {/* Gold glow behind person */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
                  style={{
                    height: "65%",
                    background:
                      "radial-gradient(ellipse at bottom center, rgba(212,175,55,0.12) 0%, transparent 60%)",
                  }}
                />

                {/* Person image */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <div
                    className="relative"
                    style={{
                      width: "82%",
                      maxWidth: "320px",
                      height: "80%",
                      marginBottom: "100px",
                    }}
                  >
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      style={{
                        filter: "drop-shadow(0 10px 36px rgba(0,0,0,0.4))",
                      }}
                    />
                  </div>
                </div>

                {/* Name badge overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10"
                  style={{
                    background: "linear-gradient(to top, #0A2E2E 0%, #0A2E2E 60%, transparent 100%)",
                    paddingTop: "48px",
                  }}
                >
                  <div className="p-5 md:p-6">
                    <h3
                      className="font-sans font-bold leading-tight"
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(1.4rem, 4vw, 1.75rem)",
                      }}
                    >
                      {story.name}
                    </h3>
                    <p
                      className="font-sans text-sm mt-1 mb-4"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {story.role}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moneycontrol-logo-png_seeklogo-544913-removebg-preview%20%281%29-XakZ3kZrRgKBP4zztUOPIzsRsDInGU.png"
                        alt="Moneycontrol"
                        width={80}
                        height={28}
                        style={{ objectFit: "contain" }}
                      />
                      <Image
                        src="/cnbc-logo.png"
                        alt="CNBC"
                        width={80}
                        height={28}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ══════ RIGHT: Content Panel ══════ */}
              <div
                className="lg:col-span-3 flex flex-col justify-between p-6 md:p-8 lg:p-10"
                style={{ background: "#0A2E2E" }}
              >
                {/* Quote block */}
                <div>
                  {/* Opening quote mark */}
                  <div
                    className="font-serif select-none mb-3"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      lineHeight: 0.7,
                      color: "rgba(212,175,55,0.28)",
                      fontWeight: 900,
                    }}
                    aria-hidden="true"
                  >
                    {"\u201C"}
                  </div>

                  <blockquote
                    className="font-sans font-normal leading-relaxed mb-8"
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                      lineHeight: 1.8,
                    }}
                  >
                    {story.quote}
                  </blockquote>

                  {/* Achievements */}
                  <div className="flex flex-col gap-5">
                    {story.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4"
                        style={revealStyle(isVisible, 400 + i * 100)}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: "rgba(212,175,55,0.08)",
                            border: "1px solid rgba(212,175,55,0.18)",
                          }}
                        >
                          <ach.icon
                            size={18}
                            strokeWidth={1.5}
                            style={{ color: "#D4AF37" }}
                          />
                        </div>
                        <div>
                          <p
                            className="font-sans font-semibold text-sm"
                            style={{ color: "#D4AF37" }}
                          >
                            {ach.label}
                          </p>
                          <p
                            className="font-sans text-xs mt-0.5 leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.42)" }}
                          >
                            {ach.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>{/* end grid */}
          </div>{/* end rounded card */}
        </div>{/* end card transition wrapper */}
      </div>{/* end max-w-6xl */}
    </section>
  )
}
