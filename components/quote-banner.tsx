"use client"

import { useEffect, useRef, useState } from "react"

const OPEN_QUOTE = "\u201C"

export default function QuoteBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div
        className="relative max-w-3xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(3rem, 8vw, 6rem)",
          paddingBottom: "clamp(3rem, 8vw, 6rem)",
        }}
      >
        {/* Label */}
        <div
          className="inline-flex items-center gap-3 mb-6 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.55)" }} />
          <span
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#D4AF37" }}
          >
            Words to Live By
          </span>
          <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.55)" }} />
        </div>

        {/* Decorative open quote mark */}
        <div
          className="select-none pointer-events-none font-serif leading-none mb-4"
          style={{
            fontSize: "clamp(48px, 10vw, 80px)",
            color: "rgba(180,140,40,0.22)",
            fontWeight: 900,
            lineHeight: 0.75,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.2s ease-out 0.2s",
          }}
          aria-hidden="true"
        >
          {OPEN_QUOTE}
        </div>

        {/* Quote text */}
        <blockquote
          className="relative z-10 transition-all duration-[1400ms] ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "300ms",
          }}
        >
          <p
            className="font-serif leading-relaxed text-balance"
            style={{
              color: "rgba(20,20,20,0.85)",
              fontSize: "clamp(1.15rem, 3.5vw, 1.75rem)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            The best investment you can make{" "}
            <strong
              style={{
                fontWeight: 700,
                color: "#D4AF37",
                fontStyle: "normal",
              }}
            >
              is in yourself.
            </strong>
            <br className="hidden sm:block" />
            {" "}The more you learn, the more you earn.
          </p>
        </blockquote>

        {/* Attribution */}
        <div
          className="mt-8 flex items-center gap-2 justify-center transition-all duration-[1800ms] ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: "600ms",
          }}
        >
          <span
            style={{
              color: "#D4AF37",
              fontSize: "11px",
              lineHeight: 1,
            }}
          >
            &bull;
          </span>
          <span
            className="font-sans font-semibold tracking-[0.22em] uppercase"
            style={{
              color: "#D4AF37",
              fontSize: "clamp(9px, 1.8vw, 11px)",
            }}
          >
            Warren Buffett
          </span>
        </div>
      </div>
    </section>
  )
}
