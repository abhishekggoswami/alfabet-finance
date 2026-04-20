"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Pause, Play } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal"

const HRIDYESH =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-03-28_at_5.38.39_PM-removebg-preview-QKG7fnRZGMNq1vemV0k5uBl7NYomqP.png"
const LOGO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-NAcdog6vBdPNAYI08bfAVamvAywlVY.png"

const CARD_HEIGHT = 390

const components = [
  {
    number: "01",
    label: "Technical Analysis",
    courseLabel: "COURSE 01",
    title: "Technical Analysis for\nTraders & Investors",
    description:
      "Master candlestick patterns, chart reading, support & resistance, RSI, MACD and build high-probability trade setups with professional money management.",
    duration: "30-40 HRS",
    slug: "technical-analysis",
    isConsultancy: false,
    bgType: "candles",
    collapsedBg: "rgba(10,46,46,0.72)",
    activeBg:    "rgba(8,38,38,0.92)",
    textDark:    "#D4AF37",
    textMid:     "#D4AF37",
    textLight:   "rgba(255,255,255,0.54)",
    borderColor: "rgba(212,175,55,0.38)",
    borderActiveColor: "rgba(212,175,55,0.65)",
    pillBg: "rgba(255,255,255,0.05)",
    pillBorder: "rgba(255,255,255,0.13)",
    labelColor: "rgba(255,255,255,0.36)",
  },
  {
    number: "02",
    label: "Options Pro",
    courseLabel: "COURSE 02",
    title: "Options Pro – Mastering\nOptions Trading",
    description:
      "Understand the Greeks, volatility, multi-leg strategies — straddles, iron condors, delta-neutral — and structured risk management for consistent income.",
    duration: "30-40 HRS",
    slug: "options-pro",
    isConsultancy: false,
    bgType: "grid",
    collapsedBg: "rgba(12,40,50,0.75)",
    activeBg:    "rgba(9,32,42,0.94)",
    textDark:    "#D4AF37",
    textMid:     "#D4AF37",
    textLight:   "rgba(255,255,255,0.54)",
    borderColor: "rgba(212,175,55,0.38)",
    borderActiveColor: "rgba(212,175,55,0.65)",
    pillBg: "rgba(255,255,255,0.05)",
    pillBorder: "rgba(255,255,255,0.13)",
    labelColor: "rgba(255,255,255,0.36)",
  },
  {
    number: "03",
    label: "Fundamental Analysis",
    courseLabel: "COURSE 03",
    title: "Fundamental Analysis\nfor Investors",
    description:
      "Read balance sheets, P&L statements, apply DCF, EV/EBITDA and build conviction in quality businesses through deep financial and business analysis.",
    duration: "90-100 HRS",
    slug: "fundamental-analysis",
    isConsultancy: false,
    bgType: "wave",
    collapsedBg: "rgba(10,50,40,0.72)",
    activeBg:    "rgba(8,40,32,0.93)",
    textDark:    "#D4AF37",
    textMid:     "#D4AF37",
    textLight:   "rgba(255,255,255,0.54)",
    borderColor: "rgba(212,175,55,0.38)",
    borderActiveColor: "rgba(212,175,55,0.65)",
    pillBg: "rgba(255,255,255,0.05)",
    pillBorder: "rgba(255,255,255,0.13)",
    labelColor: "rgba(255,255,255,0.36)",
  },
  {
    number: "04",
    label: "NISM Series XV",
    courseLabel: "COURSE 04",
    title: "NISM-Series-XV:\nResearch Analyst Certification",
    description:
      "Complete exam-focused preparation for the NISM Series XV Research Analyst certification — the mandatory qualification for SEBI RA registration.",
    duration: "60 HRS",
    slug: "nism-research-analyst",
    isConsultancy: false,
    bgType: "table",
    collapsedBg: "rgba(11,36,52,0.74)",
    activeBg:    "rgba(9,28,44,0.93)",
    textDark:    "#D4AF37",
    textMid:     "#D4AF37",
    textLight:   "rgba(255,255,255,0.54)",
    borderColor: "rgba(212,175,55,0.38)",
    borderActiveColor: "rgba(212,175,55,0.65)",
    pillBg: "rgba(255,255,255,0.05)",
    pillBorder: "rgba(255,255,255,0.13)",
    labelColor: "rgba(255,255,255,0.36)",
  },
  {
    number: "*",
    label: "SEBI RA Consultancy",
    courseLabel: "CROWN JEWEL · VALUED ₹17,000",
    title: "End-to-End SEBI RA\nRegistration Consultancy",
    description:
      "From eligibility check to SEBI approval — we handle documentation, application filing, SEBI queries and follow-ups until your RA licence is issued.",
    duration: "END-TO-END",
    slug: "sebi-ra-consultancy",
    isConsultancy: true,
    bgType: "consultancy",
    collapsedBg: "rgba(28,20,4,0.80)",
    activeBg:    "rgba(22,15,2,0.96)",
    textDark:    "#D4AF37",
    textMid:     "#D4AF37",
    textLight:   "rgba(255,255,255,0.54)",
    borderColor: "rgba(212,175,55,0.60)",
    borderActiveColor: "rgba(212,175,55,0.85)",
    pillBg: "rgba(212,175,55,0.12)",
    pillBorder: "rgba(212,175,55,0.32)",
    labelColor: "rgba(212,175,55,0.65)",
  },
]

// ─── Per-card background SVG patterns ───────────────────────────────────────
function BgPattern({ type, accentColor, dimColor }: { type: string; accentColor: string; dimColor: string }) {
  const dimLine = dimColor
  const gold    = accentColor

  if (type === "candles") {
    // Candlestick bars — alternating bull/bear, gentle CSS pulse
    const bars = [
      { x: 28,  h: 100, y: 110, bull: true  },
      { x: 80,  h: 62,  y: 148, bull: false },
      { x: 132, h: 120, y: 88,  bull: true  },
      { x: 184, h: 72,  y: 130, bull: false },
      { x: 236, h: 98,  y: 112, bull: true  },
      { x: 288, h: 58,  y: 145, bull: false },
      { x: 340, h: 108, y: 96,  bull: true  },
      { x: 392, h: 78,  y: 122, bull: false },
      { x: 444, h: 90,  y: 108, bull: true  },
      { x: 496, h: 65,  y: 136, bull: false },
      { x: 548, h: 105, y: 100, bull: true  },
    ]
    return (
      <svg
        className="absolute inset-0 w-full h-full anim-candle"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 640 440"
        aria-hidden="true"
      >
        {bars.map((b, i) => (
          <g key={i}>
            <line
              x1={b.x + 13} y1={b.y - 22}
              x2={b.x + 13} y2={b.y + b.h + 22}
              stroke={b.bull ? "rgba(80,205,130,0.30)" : "rgba(220,80,80,0.30)"}
              strokeWidth="1.5"
            />
            <rect
              x={b.x} y={b.y} width={26} height={b.h} rx="2"
              fill={b.bull ? "rgba(60,180,100,0.12)" : "rgba(200,60,60,0.12)"}
              stroke={b.bull ? "rgba(80,205,130,0.38)" : "rgba(220,80,80,0.38)"}
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Trend line */}
        <polyline
          points="28,320 132,290 236,265 340,235 444,205 548,178"
          fill="none" stroke={gold} strokeWidth="1.5"
        />
      </svg>
    )
  }

  if (type === "grid") {
    // Options data grid with faint pulsing
    const cols = [72, 152, 232, 312, 392, 472, 552]
    const rows = [52, 98, 144, 190, 236, 282, 328, 374, 414]
    return (
      <svg
        className="absolute inset-0 w-full h-full anim-grid"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 640 440"
        aria-hidden="true"
      >
        {cols.map((x, i) => (
          <line key={`v${i}`} x1={x} y1={36} x2={x} y2={420}
            stroke={dimLine} strokeWidth="0.6" />
        ))}
        {rows.map((y, i) => (
          <line key={`h${i}`} x1={50} y1={y} x2={590} y2={y}
            stroke={dimLine} strokeWidth="0.6" />
        ))}
        {/* Header highlight */}
        <rect x={50} y={36} width={540} height={36} rx="2"
          fill="rgba(80,160,220,0.10)" />
        {/* Cell fills — random data look */}
        {rows.slice(1, 8).map((y, ri) =>
          cols.slice(0, 6).map((x, ci) => (
            <rect
              key={`c${ri}${ci}`}
              x={x + 4} y={y + 8}
              width={ci === 0 ? 68 : 52} height={8}
              rx="2"
              fill={ri % 2 === 0 ? "rgba(255,255,255,0.045)" : "rgba(255,255,255,0.02)"}
            />
          ))
        )}
        {/* Two chart lines */}
        <polyline points="72,360 152,325 232,340 312,295 392,308 472,258 552,238"
          fill="none" stroke="rgba(100,200,200,0.22)" strokeWidth="1.5" />
        <polyline points="72,395 152,360 232,372 312,330 392,342 472,298 552,278"
          fill="none" stroke={gold} strokeWidth="1" />
      </svg>
    )
  }

  if (type === "wave") {
    // Flowing wave with animated stroke-dashoffset drift
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 640 440"
        aria-hidden="true"
      >
        {/* Fill layers */}
        <path
          d="M0 300 Q90 235 220 272 Q360 310 490 245 Q580 198 640 218 L640 440 L0 440 Z"
          fill="rgba(27,94,60,0.12)"
        />
        <path
          d="M0 345 Q115 278 265 308 Q430 342 580 278 L640 255 L640 440 L0 440 Z"
          fill="rgba(27,94,60,0.06)"
        />
        {/* Animated stroke lines */}
        <path
          className="anim-wave"
          d="M0 300 Q90 235 220 272 Q360 310 490 245 Q580 198 640 218"
          fill="none" stroke="rgba(60,160,100,0.35)" strokeWidth="1.5"
        />
        <path
          className="anim-wave"
          style={{ animationDelay: "-3s" }}
          d="M0 345 Q115 278 265 308 Q430 342 580 278 Q615 255 640 255"
          fill="none" stroke={gold} strokeWidth="1.2"
        />
        {/* Subtle dotted horizontal guides */}
        {[180, 260, 340].map((y) => (
          <line key={y} x1={0} y1={y} x2={640} y2={y}
            stroke="rgba(255,255,255,0.035)" strokeWidth="0.8" strokeDasharray="4 8" />
        ))}
      </svg>
    )
  }

  if (type === "table") {
    // NISM syllabus table look
    const tcols = [44, 168, 276, 384, 490, 570]
    const trows = [52, 104, 156, 208, 260, 312, 364, 410]
    return (
      <svg
        className="absolute inset-0 w-full h-full anim-grid"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 640 440"
        aria-hidden="true"
      >
        {/* Header row */}
        <rect x={36} y={40} width={540} height={38} rx="3"
          fill="rgba(40,100,160,0.16)" />
        {/* Row alternating backgrounds */}
        {trows.slice(1).map((y, ri) => (
          <rect key={`row${ri}`} x={36} y={y} width={540} height={36} rx="1"
            fill={ri % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent"} />
        ))}
        {/* Column dividers */}
        {tcols.map((x) => (
          <line key={`cv${x}`} x1={x} y1={36} x2={x} y2={420}
            stroke="rgba(255,255,255,0.048)" strokeWidth="0.6" />
        ))}
        {/* Cell data bars */}
        {trows.map((y, ri) =>
          tcols.slice(0, 5).map((x, ci) => (
            <rect
              key={`td${ri}${ci}`}
              x={x + 8} y={y + 12}
              width={ci === 0 ? 100 : 62} height={10}
              rx="2"
              fill={ri === 0 ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.048)"}
            />
          ))
        )}
        <line x1={36} y1={78} x2={576} y2={78}
          stroke={gold} strokeWidth="0.8" />
      </svg>
    )
  }

  // consultancy — gold diagonal waves with glow
  return (
    <svg
      className="absolute inset-0 w-full h-full anim-gold"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 640 440"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldRadial" cx="65%" cy="55%" r="45%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.18)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={640} height={440} fill="url(#goldRadial)" />
      <path
        d="M-60 255 Q120 142 340 218 Q555 292 700 162 L700 440 L-60 440 Z"
        fill="rgba(212,175,55,0.08)"
      />
      <path
        d="M-60 310 Q140 212 375 272 Q600 330 700 220 L700 440 L-60 440 Z"
        fill="rgba(212,175,55,0.04)"
      />
      <path
        className="anim-wave"
        d="M-60 255 Q120 142 340 218 Q555 292 700 162"
        fill="none" stroke="rgba(212,175,55,0.32)" strokeWidth="1.8"
      />
      <path
        className="anim-wave"
        style={{ animationDelay: "-2.5s" }}
        d="M-60 340 Q165 248 400 302 Q618 352 700 262"
        fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="1.2"
      />
      {/* Decorative dots */}
      {[1,2,3,4,5,6].map((n) => (
        <circle
          key={n}
          cx={n * 95 + 40}
          cy={180 + Math.sin(n * 1.4) * 50}
          r="2"
          fill="rgba(212,175,55,0.25)"
        />
      ))}
    </svg>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function BsrraBundleSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused]       = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const intervalRef                   = useRef<ReturnType<typeof setInterval> | null>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % components.length)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(advance, 4200)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, advance])

  const handleTabClick = (i: number) => {
    // Desktop only — jump to card and pause auto-advance
    setActiveIndex(i)
    setIsPaused(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleMobileCardClick = (i: number) => {
    // Mobile — resume auto-cycle from next card after the tapped one, never pause
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActiveIndex(i)
    intervalRef.current = setInterval(advance, 4200)
  }

  const activeComp = components[activeIndex]

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)",
        paddingTop:    "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(3rem, 6vw, 5.5rem)",
      }}
    >
      {/* Animated diagonal grid - contained in its own stacking context */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
        <div className="bsrra-grid-bg" />
      </div>

      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "42%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%", height: "70%",
          background: "radial-gradient(ellipse at center, rgba(27,94,94,0.28) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Money bird — left, flipped */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden sm:block animate-[floatNote1_6s_ease-in-out_infinite]"
        style={{ top: "22%", left: "2%", transform: "rotate(-12deg) scaleX(-1)", zIndex: 2 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/little-removebg-preview-CH8PrOhbVo9nVelmWV3Zp5TVgT0bSf.png"
          alt=""
          width={280}
          height={220}
          className="w-[80px] md:w-[100px] lg:w-[130px]"
          style={{ opacity: 0.55, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.25))" }}
        />
      </div>

      {/* Money bird — top right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hidden sm:block animate-[floatNote2_8s_ease-in-out_infinite]"
        style={{ top: "8%", right: "2%", transform: "rotate(8deg)", zIndex: 2 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_631jl8631jl8631j-removebg-preview-oRpt1JISoTJIIJkkdlscU7RamsjI0R.png"
          alt=""
          width={280}
          height={220}
          className="w-[100px] md:w-[150px] lg:w-[190px]"
          style={{ opacity: 0.60, filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))" }}
        />
      </div>

      {/* Scale-down wrapper to simulate 110% zoom reduction */}
      <div
        style={{
          transform: "scale(0.91)",
          transformOrigin: "top center",
        }}
      >
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-14">

        {/* ─�� Heading ─────────────────────────────────────────────────── */}
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="BSRRA Programme"
            heading={<>One Programme with{" "}<VariableProximity
              label="Five Powerful"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#D4AF37",
              }}
            /><br />Components</>}
            subheading="Four market mastery courses and end-to-end SEBI RA registration consultancy — everything bundled into one complete programme."
            light
          />
        </div>

        {/* ── Accordion row ───────────────────────────────────────────── */}
        {/* Mobile: vertical stacked cards. md+: horizontal interactive accordion */}

        {/* MOBILE stacked list */}
        <div className="flex flex-col gap-3 md:hidden">
          {components.map((comp, i) => {
            const isActive = i === activeIndex
            return (
              <div
                key={comp.slug}
                onClick={() => handleMobileCardClick(i)}
                className="relative overflow-hidden rounded-xl cursor-pointer isolate"
                style={{
                  background: isActive ? comp.activeBg : comp.collapsedBg,
                  border: `1px solid ${isActive ? (comp.isConsultancy ? "rgba(212,175,55,0.85)" : "rgba(212,175,55,0.65)") : (comp.isConsultancy ? "rgba(212,175,55,0.55)" : "rgba(212,175,55,0.32)")}`,
                  boxShadow: isActive ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {/* BG pattern — only when expanded */}
                {isActive && (
                  <div className="absolute inset-0 z-[1] opacity-60" aria-hidden="true">
                    <BgPattern type={comp.bgType} isConsultancy={comp.isConsultancy} />
                  </div>
                )}
                <div className="relative z-10 p-5">
                  {/* Course label */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-sans font-semibold uppercase"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        color: comp.isConsultancy ? "#D4AF37" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {comp.courseLabel}
                    </span>
                    <span
                      className="font-sans font-bold"
                      style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}
                    >
                      {comp.number}
                    </span>
                  </div>
                  {/* Title */}
                  <h3
                    className="font-bold leading-snug"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "#D4AF37",
                      fontSize: "clamp(1rem, 4.5vw, 1.2rem)",
                      fontStyle: "italic",
                    }}
                  >
                    {comp.title.split("\n").join(" ")}
                  </h3>
                  {/* Description — only when active */}
                  {isActive && (
                    <>
                      <p
                        className="font-sans text-sm leading-relaxed mt-2.5"
                        style={{ color: "rgba(255,255,255,0.58)", fontSize: "13px" }}
                      >
                        {comp.description}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <span
                          className="font-sans font-bold uppercase px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "9px",
                            letterSpacing: "0.12em",
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.5)",
                            border: "1px solid rgba(255,255,255,0.12)",
                          }}
                        >
                          {comp.duration}
                        </span>
                        <Link
                          href={`/courses/${comp.slug}`}
                          className="inline-flex items-center gap-1 font-sans font-semibold uppercase tracking-wider transition-opacity hover:opacity-80"
                          style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          VISIT COURSE <ArrowRight size={9} />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* DESKTOP horizontal accordion */}
        <div className="relative overflow-x-auto md:overflow-visible hidden md:block" style={{ zIndex: 5 }}>
        <div
          className="flex items-stretch gap-2.5"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          {components.map((comp, i) => {
            const isActive = i === activeIndex
            const borderColor        = isActive ? comp.borderActiveColor : comp.borderColor
            const shadowActive       = `0 0 0 1px ${comp.borderActiveColor}, 0 8px 40px rgba(0,0,0,0.12), 0 0 30px ${comp.pillBg}`
            const shadowCollapsed    = `0 0 10px rgba(0,0,0,0.08)`

            return (
              <div
                key={comp.slug}
                onClick={() => handleTabClick(i)}
                className="relative overflow-hidden cursor-pointer flex-shrink-0 isolate"
                style={{
                  flex:       isActive ? "1 1 auto" : `0 0 clamp(54px, 5.8vw, 68px)`,
                  background: isActive ? comp.activeBg : comp.collapsedBg,
                  border:     `1.5px solid ${borderColor}`,
                  boxShadow:  isActive ? shadowActive : shadowCollapsed,
                  transition: "flex 0.52s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, box-shadow 0.3s, background 0.3s, border-radius 0.3s, clip-path 0.3s",
                  zIndex: 2,
                  borderRadius: isActive ? "0px" : "12px",
                  clipPath: isActive
                    ? "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)"
                    : "none",
                }}
              >
                {/* Solid background layer to block section grid from showing through */}
                <div 
                  className="absolute inset-0 z-0" 
                  style={{ background: isActive ? comp.activeBg : comp.collapsedBg }}
                  aria-hidden="true"
                />
                {/* ── Collapsed state ─────────────────────────────── */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-6 select-none">
                    <span
                      className="font-sans font-semibold"
                      style={{
                        fontSize: "9px",
                        color: comp.labelColor,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {comp.number}
                    </span>
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        color: comp.textDark,
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      {comp.label}
                    </span>
                    <div />
                  </div>
                )}

                {/* ── Expanded (active) state ──────────────────────── */}
                {isActive && (
                  <>
                    {/* Gold chamfer corner accent */}
                    <svg
                      aria-hidden="true"
                      className="absolute top-0 right-0 z-[20] pointer-events-none"
                      width="48" height="48" viewBox="0 0 48 48"
                    >
                      <polyline
                        points="12,0 48,0 48,36"
                        fill="none"
                        stroke={comp.borderActiveColor}
                        strokeWidth="1.5"
                      />
                      <circle cx="42" cy="6" r="2" fill={comp.borderActiveColor} />
                    </svg>
                    {/* Background SVG pattern */}
                    <div className="absolute inset-0 z-[1] opacity-60" aria-hidden="true">
                      <BgPattern
                        type={comp.bgType}
                        accentColor={comp.borderColor}
                        dimColor={comp.pillBorder}
                      />
                    </div>

                    {/* Left-to-right fade so content stays readable */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 pointer-events-none z-10"
                      style={{
                        width: "60%",
                        background: `linear-gradient(to right, ${comp.activeBg} 28%, rgba(0,0,0,0) 100%)`,
                      }}
                    />

                    {/* Person image — fills full height, right side */}
                    <div
                      aria-hidden="true"
                      className="absolute right-0 bottom-0 z-10 hidden sm:block"
                      style={{ width: "52%", height: "100%" }}
                    >
                      <Image
                        src={HRIDYESH}
                        alt="Hridyesh Mishra"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 640px) 0px, 320px"
                        priority={i === 0}
                      />
                      {/* Name label at bottom-center of image area */}
                      <span
                        className="absolute bottom-3 left-0 right-0 text-center font-sans font-semibold uppercase pointer-events-none"
                        style={{
                          fontSize: "8.5px",
                          letterSpacing: "0.22em",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        HRIDYESH MISHRA
                      </span>
                    </div>

                    {/* Large dim watermark number */}
                    {!comp.isConsultancy && (
                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 right-4 font-sans font-black select-none pointer-events-none hidden md:block z-[5]"
                        style={{
                          fontSize: "clamp(7rem, 17vw, 13rem)",
                          color: comp.borderColor,
                          lineHeight: 0.82,
                          letterSpacing: "-0.05em",
                          opacity: 0.28,
                        }}
                      >
                        {comp.number}
                      </div>
                    )}

                    {/* alfabet finance logo — top right */}
                    <div
                      className="absolute top-4 right-5 z-20 hidden md:block"
                      style={{ width: 88, height: 44, opacity: 0.65 }}
                    >
                      <Image
                        src={LOGO}
                        alt="alfabet finance"
                        fill
                        className="object-contain object-right-top"
                        sizes="88px"
                        unoptimized
                      />
                    </div>

                    {/* Content — left side, bottom-aligned */}
                    <div
                      className="relative z-20 flex flex-col justify-end h-full p-6 md:p-8 lg:p-9"
                      style={{ maxWidth: "54%" }}
                    >
                      {/* Course label */}
                      {comp.isConsultancy ? (
                        <span
                          className="inline-flex items-center gap-1.5 font-sans font-bold uppercase mb-3.5 self-start px-2.5 py-1 rounded"
                          style={{
                            fontSize: "9px",
                            letterSpacing: "0.20em",
                            background: comp.pillBg,
                            color: comp.textMid,
                            border: `1px solid ${comp.pillBorder}`,
                          }}
                        >
                          &#9733; {comp.courseLabel}
                        </span>
                      ) : (
                        <span
                          className="font-sans font-semibold uppercase mb-3.5"
                          style={{
                            fontSize: "10px",
                            letterSpacing: "0.22em",
                            color: comp.labelColor,
                          }}
                        >
                          {comp.courseLabel}
                        </span>
                      )}

                      {/* Title */}
                      <h3
                        className="italic font-bold leading-snug mb-3"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          color: comp.textDark,
                          fontSize: "clamp(1.1rem, 2.5vw, 1.65rem)",
                        }}
                      >
                        {comp.title.split("\n").map((line, li, arr) => (
                          <span key={li}>
                            {line}
                            {li < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </h3>

                      {/* Description */}
                      <p
                        className="font-sans text-sm leading-relaxed mb-5"
                        style={{ color: comp.textLight }}
                      >
                        {comp.description}
                      </p>

                      {/* Pills row */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="font-sans font-bold uppercase px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "9.5px",
                            letterSpacing: "0.12em",
                            background: comp.pillBg,
                            color: comp.textMid,
                            border: `1px solid ${comp.pillBorder}`,
                          }}
                        >
                          {comp.duration}
                        </span>
                        <Link
                          href={`/courses/${comp.slug}`}
                          className="inline-flex items-center gap-1.5 font-sans font-semibold uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{ fontSize: "9.5px", color: comp.textLight }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          VISIT COURSE <ArrowRight size={9} />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
        </div>{/* end desktop accordion */}

        {/* ── Bottom strip — "Everything Included" ───────────────────── */}
        <div
          className="mt-2.5 rounded-xl overflow-hidden"
          style={{
            background: "#0A2E2E",
            border: "1px solid rgba(212,175,55,0.22)",
            borderTop: "2px solid rgba(212,175,55,0.55)",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,0.06), 0 8px 40px rgba(0,0,0,0.50), 0 0 60px rgba(212,175,55,0.07) inset",
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch min-h-0">

            {/* ── Left: list ───────────────────────────────────────────── */}
            <div className="flex-1 px-7 py-5">

              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {/* sparkle / gear icon */}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="2" fill="#D4AF37" />
                    <circle cx="6.5" cy="1.5" r="1" fill="#D4AF37" opacity="0.7" />
                    <circle cx="6.5" cy="11.5" r="1" fill="#D4AF37" opacity="0.7" />
                    <circle cx="1.5" cy="6.5" r="1" fill="#D4AF37" opacity="0.7" />
                    <circle cx="11.5" cy="6.5" r="1" fill="#D4AF37" opacity="0.7" />
                    <circle cx="3" cy="3" r="0.85" fill="#D4AF37" opacity="0.45" />
                    <circle cx="10" cy="3" r="0.85" fill="#D4AF37" opacity="0.45" />
                    <circle cx="3" cy="10" r="0.85" fill="#D4AF37" opacity="0.45" />
                    <circle cx="10" cy="10" r="0.85" fill="#D4AF37" opacity="0.45" />
                  </svg>
                  <span
                    className="font-sans font-black uppercase tracking-widest"
                    style={{ fontSize: "9px", letterSpacing: "0.30em", color: "rgba(255,255,255,0.45)" }}
                  >
                    Everything included in one programme
                  </span>
                </div>
                <span
                  className="font-sans font-black uppercase hidden sm:inline"
                  style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(212,175,55,0.55)" }}
                >
                  BSRRA BUNDLE
                </span>
              </div>

              {/* Items grid — 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5">
                {[
                  { label: "Technical Analysis Course",        gold: false },
                  { label: "Options Pro Course",               gold: false },
                  { label: "Fundamental Analysis Course",      gold: false },
                  { label: "NISM Series XV Course",            gold: false },
                  { label: "SEBI RA Registration Consultancy", gold: true,  badge: "₹17K VALUE" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    {/* Circle check */}
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: 16, height: 16,
                        border: `1.5px solid ${item.gold ? "#D4AF37" : "rgba(255,255,255,0.22)"}`,
                        background: item.gold ? "rgba(212,175,55,0.12)" : "transparent",
                        boxShadow: item.gold ? "0 0 6px rgba(212,175,55,0.28)" : "none",
                      }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                        <polyline
                          points="1,3 3,5 7,1"
                          stroke={item.gold ? "#D4AF37" : "rgba(255,255,255,0.45)"}
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="font-sans text-xs"
                      style={{
                        color: item.gold ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.52)",
                        fontWeight: item.gold ? 600 : 400,
                      }}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className="font-sans font-black uppercase px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{
                          fontSize: "7px",
                          letterSpacing: "0.10em",
                          background: "rgba(212,175,55,0.14)",
                          color: "#D4AF37",
                          border: "1px solid rgba(212,175,55,0.38)",
                          boxShadow: "0 0 8px rgba(212,175,55,0.18)",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className="hidden md:block w-px self-stretch my-0"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.18) 30%, rgba(212,175,55,0.18) 70%, transparent)" }}
            />

            {/* ── Right: One Price CTA ───────────────────────────────��─── */}
            <div
              className="flex flex-col items-start md:items-end justify-center gap-3 px-7 py-5 md:min-w-[230px]"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)",
              }}
            >
              <div className="text-left md:text-right">
                <p
                  className="font-sans font-black leading-none tracking-tight"
                  style={{
                    color: "#D4AF37",
                    fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                    textShadow: "0 0 30px rgba(212,175,55,0.35)",
                  }}
                >
                  One Price.
                </p>
                <p
                  className="font-sans mt-1.5"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.32)" }}
                >
                  4 courses + SEBI registration support
                </p>
              </div>
              <Link
                href="/courses/sebi-research-analyst"
                className="inline-flex items-center gap-2 font-sans font-black uppercase tracking-widest px-5 py-2.5 rounded-lg whitespace-nowrap transition-all hover:brightness-115 hover:shadow-lg"
                style={{
                  fontSize: "9px",
                  background: "#D4AF37",
                  color: "#040E0A",
                  letterSpacing: "0.14em",
                  boxShadow: "0 0 22px rgba(212,175,55,0.32)",
                }}
              >
                SEE THE PROGRAMME <ArrowRight size={10} />
              </Link>
            </div>

          </div>
        </div>

        {/* Pause / Resume */}
        <div className="flex justify-end mt-3">
          <button
            onClick={() => {
              setIsPaused((p) => {
                const next = !p
                if (!next) {
                  intervalRef.current = setInterval(advance, 4200)
                } else {
                  if (intervalRef.current) clearInterval(intervalRef.current)
                }
                return next
              })
            }}
            className="inline-flex items-center gap-1.5 font-sans font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all hover:brightness-125"
            style={{
              fontSize: "9.5px",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {isPaused ? <Play size={8} /> : <Pause size={8} />}
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>

      </div>
      </div>{/* end scale wrapper */}
    </section>
  )
}
