"use client"

import {
  Crosshair,
  MessageSquareMore,
  SlidersHorizontal,
  RefreshCcw,
  BookOpenCheck,
  BadgeCheck,
} from "lucide-react"

const GOLD          = "#D4AF37"
const GOLD_MID      = "rgba(212,175,55,0.55)"
const GOLD_DIM      = "rgba(212,175,55,0.18)"
const GOLD_BG       = "rgba(212,175,55,0.09)"
const GOLD_BORDER   = "rgba(212,175,55,0.28)"

const ICONS = [
  Crosshair,           // Zero Errors — precision targeting
  MessageSquareMore,   // Full Query Management — active conversation
  SlidersHorizontal,   // Tailored for Your Profile — custom adjustment
  RefreshCcw,          // Continuous Follow-Up — persistent loop
  BookOpenCheck,       // Exam Guidance — studied & checked
  BadgeCheck,          // Post-Registration Support — certified ongoing
]

interface Differentiator { title: string; description: string }

export default function GlassDifferentiatorCards({
  differentiators,
}: {
  differentiators: Differentiator[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {differentiators.map((d, idx) => {
        const Icon = ICONS[idx] ?? Crosshair
        const num  = String(idx + 1).padStart(2, "0")

        return (
          <div
            key={d.title}
            className="relative rounded-2xl overflow-hidden cursor-default group flex flex-col"
            style={{
              background: "rgba(255,255,255,0.055)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: `1px solid ${GOLD_BORDER}`,
              boxShadow: "0 6px 32px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.06)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform     = "translateY(-8px) scale(1.02)"
              el.style.background    = "rgba(212,175,55,0.10)"
              el.style.borderColor   = "rgba(212,175,55,0.60)"
              el.style.boxShadow     = "0 28px 60px rgba(0,0,0,0.45), 0 0 60px rgba(212,175,55,0.20), inset 0 1px 0 rgba(255,255,255,0.14)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform     = "translateY(0) scale(1)"
              el.style.background    = "rgba(255,255,255,0.055)"
              el.style.borderColor   = GOLD_BORDER
              el.style.boxShadow     = "0 6px 32px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.06)"
            }}
          >
            {/* Full-width gold top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg, transparent 0%, ${GOLD} 40%, ${GOLD_MID} 75%, transparent 100%)` }}
            />

            {/* Watermark number — top right */}
            <span
              className="absolute top-4 right-5 font-sans font-black select-none pointer-events-none"
              style={{ fontSize: "11px", letterSpacing: "0.25em", color: "rgba(212,175,55,0.18)" }}
            >
              {num}
            </span>

            {/* Ambient blob behind icon — revealed on hover */}
            <div
              className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600"
              style={{ background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)", filter: "blur(28px)" }}
            />

            {/* ── Card body ── */}
            <div className="relative flex flex-col gap-5 p-7 flex-1">

              {/* Icon block */}
              <div className="flex items-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-350"
                  style={{
                    background: GOLD_BG,
                    border: `1.5px solid rgba(212,175,55,0.35)`,
                    boxShadow: `0 0 24px rgba(212,175,55,0.16), inset 0 1px 0 rgba(255,255,255,0.08)`,
                  }}
                >
                  {/* Inner glow ring */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ boxShadow: `inset 0 0 18px rgba(212,175,55,0.22)` }}
                  />
                  <Icon size={26} strokeWidth={1.5} style={{ color: GOLD }} />
                </div>

                {/* Thin vertical gold rule beside icon */}
                <div
                  className="h-10 w-px shrink-0"
                  style={{ background: `linear-gradient(to bottom, transparent, ${GOLD_DIM}, transparent)` }}
                />

                <h3
                  className="font-sans font-bold text-[15px] leading-snug"
                  style={{ color: "#ffffff" }}
                >
                  {d.title}
                </h3>
              </div>

              {/* Gold divider */}
              <div
                className="h-px w-full"
                style={{ background: `linear-gradient(90deg, ${GOLD_DIM} 0%, rgba(212,175,55,0.05) 100%)` }}
              />

              {/* Description */}
              <p
                className="font-sans text-sm leading-[1.75] flex-1"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                {d.description}
              </p>

              {/* Bottom shimmer — hover only */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.70), transparent)" }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
