"use client"

import { useRef } from "react"
import { ArrowRight, BookOpen } from "lucide-react"
import VariableProximity from "./variable-proximity"

interface CompactCTAProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonHref: string
  whatsappText: string
}

export default function CompactCTA({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  whatsappText,
}: CompactCTAProps) {
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <>
      {/* Separator */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }}
          />
        </div>
      </div>

      <section className="relative overflow-hidden" style={{ background: "#0A2E2E" }}>
      {/* Animated square grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "hidden" }}
        aria-hidden="true"
      >
        <div className="compact-cta-grid-bg absolute inset-0" />
      </div>

      {/* Main content area */}
      <div className="relative py-16 md:py-24">
        <div ref={containerRef} className="relative max-w-3xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2
            className="font-sans font-bold leading-tight text-balance mb-3"
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            }}
          >
            {title}{" "}
            <VariableProximity
              label={subtitle}
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{
                color: "#D4AF37",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            />
          </h2>

          {/* Description */}
          <p
            className="font-sans max-w-2xl mx-auto leading-relaxed mb-8"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
            }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Gold button */}
            <a
              href={buttonHref}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "#D4AF37",
                color: "#0A2E2E",
                boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
              }}
            >
              <BookOpen size={15} strokeWidth={1.5} />
              <span>{buttonText}</span>
              <ArrowRight
                size={13}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp glassmorphism button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 20px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.18)"
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.55)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"
              }}
            >
              {/* WhatsApp SVG icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{whatsappText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Animated grid CSS */}
      <style jsx>{`
        @keyframes compactGridMove {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        .compact-cta-grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: compactGridMove 6s linear infinite;
          width: calc(100% + 80px);
          height: calc(100% + 80px);
          top: -40px;
          left: -40px;
        }
      `}</style>
    </section>

      {/* Separator */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }}
          />
        </div>
      </div>
    </>
  )
}
