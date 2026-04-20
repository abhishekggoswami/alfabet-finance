"use client"

import { useRef, useEffect, useState } from "react"
import VariableProximity from "./variable-proximity"

interface SectionHeadingProps {
  eyebrow?: string
  heading: React.ReactNode
  subheading?: string
  light?: boolean
  align?: "center" | "left"
  className?: string
}

/**
 * Shared heading component used across all home page sections.
 * Animates the eyebrow line, heading words, and subheading on scroll-enter.
 * Uses IntersectionObserver internally — no prop drilling needed.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  light = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const goldColor = "#D4AF37"
  const headingColor = light ? "#ffffff" : "#0A2E2E"
  const subColor = light ? "rgba(255,255,255,0.65)" : "#556060"
  const lineColor = "rgba(212,175,55,0.5)"

  return (
    <div ref={ref} className={`${align === "left" ? "text-left" : "text-center"} ${className}`} style={{ position: "relative" }}>
      <div ref={containerRef} style={{ position: "relative" }}>
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 mb-4 ${align === "left" ? "" : ""}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 500ms cubic-bezier(0.22,1,0.36,1) 0ms, transform 500ms cubic-bezier(0.22,1,0.36,1) 0ms",
          }}
        >
          <div className="h-px w-8" style={{ background: lineColor }} />
          <VariableProximity
            label={eyebrow}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 12"
            containerRef={containerRef}
            radius={80}
            falloff="linear"
            className="font-sans text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: goldColor }}
          />
          <div className="h-px w-8" style={{ background: lineColor }} />
        </div>
      )}

      {/* Heading — word-by-word reveal */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 650ms cubic-bezier(0.22,1,0.36,1) 120ms, transform 650ms cubic-bezier(0.22,1,0.36,1) 120ms",
        }}
      >
        <h2
          className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
      </div>

      {/* Subheading */}
      {subheading && (
        <p
          className={`text-base md:text-lg leading-relaxed mt-5 font-sans ${align === "left" ? "max-w-2xl" : "max-w-2xl mx-auto"}`}
          style={{
            color: subColor,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 620ms cubic-bezier(0.22,1,0.36,1) 260ms, transform 620ms cubic-bezier(0.22,1,0.36,1) 260ms",
          }}
        >
          {subheading}
        </p>
      )}
      </div>
    </div>
  )
}
