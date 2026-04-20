"use client"

import Image from "next/image"
import { Users, MonitorPlay, TrendingUp, FileText, Phone, Mic, Video, ScreenShare } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealStyle, revealCardStyle } from "@/hooks/use-scroll-reveal"

export default function AboutSection() {
  const sidebarItems = [
    { icon: Users, label: "People" },
    { icon: MonitorPlay, label: "Sessions" },
    { icon: TrendingUp, label: "Stats" },
    { icon: FileText, label: "Resources" },
  ]

  const participants = [
    { id: 1, src: "/about-participant-4.png", alt: "Participant in blue shirt" },
    { id: 2, src: "/about-participant-1.png", alt: "Participant waving hello" },
    { id: 3, src: "/about-participant-3.png", alt: "Participant in library" },
    { id: 4, src: "/about-participant-2.png", alt: "Participant in cafe" },
  ]

  const badges = [
    { id: "sebi", top: "8%", right: "8%", left: undefined, bottom: undefined, title: "Ex SEBI Registered", sub: "Investment Advisor" },
    { id: "years", top: "30%", right: undefined, left: "6%", bottom: undefined, title: "13+ Years", sub: "Industry Experience" },
    { id: "educator", top: "46%", right: "8%", left: undefined, bottom: undefined, title: "Finance Educator", sub: "& Certified Trainer" },
    { id: "literacy", top: undefined, right: "3%", left: undefined, bottom: "22%", title: "Promoting Financial Literacy", sub: "" },
    { id: "director", top: undefined, right: undefined, left: "6%", bottom: "18%", title: "Former Director", sub: "Fintech Edu Pvt. Ltd." },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  const [visibleBadges, setVisibleBadges] = useState<number>(-1)
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBadges(-1)
            badges.forEach((_, i) => {
              setTimeout(() => setVisibleBadges(i), 300 + i * 350)
            })
          }
        })
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={(el) => { sectionRef.current = el as HTMLElement; (revealRef as React.MutableRefObject<HTMLElement | null>).current = el as HTMLElement }} id="about" className="relative w-full py-20 md:py-28 overflow-hidden" style={{ background: "#ffffff" }}>
      <div ref={containerRef} className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Live & Interactive"
            heading={<>Join{" "}<VariableProximity
              label="Interactive"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
            />{" "}Learning Sessions</>}
            subheading="Experience real-time financial education with live Q&A, practical examples, and personalized guidance from an Ex SEBI Registered Investment Advisor with 13+ years of industry experience."
          />
        </div>

        {/* ===== DESKTOP VIDEO CONFERENCE WINDOW ===== */}
        <div className="hidden lg:block mb-12" style={revealCardStyle(isVisible, 200)}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0F1A2E",
              boxShadow: "0 32px 72px rgba(10,46,46,0.18), 0 8px 24px rgba(0,0,0,0.14)",
            }}
          >
            {/* Three-column layout: sidebar | video | participants */}
            <div className="flex" style={{ height: "640px" }}>
              {/* LEFT SIDEBAR */}
              <div
                className="w-[72px] flex flex-col items-center justify-between py-6 shrink-0"
                style={{ background: "#0B1420", borderRight: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex flex-col items-center gap-6">
                  {sidebarItems.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <item.icon
                        size={20}
                        strokeWidth={1.5}
                        style={{ color: "#5A8A9A" }}
                        className="group-hover:text-[#D4AF37] transition-all duration-200 group-hover:scale-110"
                      />
                      <span className="text-[10px] font-medium group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#5A8A9A" }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER VIDEO FEED */}
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_19g5cr19g5cr19g5-xTg3WmdmrmFMrWAf3PlsZrTu0LHBO9.png"
                  alt="Hridyesh Mishra - Finance Coach presenting in a live session"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating Credential Badges — staggered animation on every section enter */}
                {badges.map((badge, i) => (
                  <div
                    key={badge.id}
                    className="absolute px-5 py-3 rounded-2xl backdrop-blur-md transition-all duration-500"
                    style={{
                      background: "rgba(15,26,46,0.65)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      top: badge.top,
                      right: badge.right,
                      left: badge.left,
                      bottom: badge.bottom,
                      opacity: visibleBadges >= i ? 1 : 0,
                      transform: visibleBadges >= i ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
                    }}
                  >
                    <div className="text-sm font-bold" style={{ color: "#D4AF37" }}>{badge.title}</div>
                    <div className="text-xs" style={{ color: "#a0aec0" }}>{badge.sub}</div>
                  </div>
                ))}

                {/* Name Badge - bottom left */}
                <div
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full flex items-center gap-2"
                  style={{ background: "rgba(15,26,46,0.7)" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="text-sm font-semibold" style={{ color: "#ffffff" }}>Hridyesh Mishra</span>
                </div>

                {/* Sparkle icon - bottom right */}
                <div className="absolute bottom-5 right-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#D4AF37" opacity="0.6" />
                  </svg>
                </div>
              </div>

              {/* RIGHT PARTICIPANTS SIDEBAR */}
              <div
                className="w-[160px] shrink-0 flex flex-col"
                style={{ background: "#0B1420", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Header */}
                <div className="px-3 pt-4 pb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase" style={{ color: "#D4AF37" }}>
                    Participants (5)
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="flex-1 px-3 flex flex-col gap-2.5 pb-4 overflow-hidden">
                  {participants.map((p) => (
                    <div
                      key={p.id}
                      className="relative w-full rounded-lg overflow-hidden shrink-0"
                      style={{
                        aspectRatio: "16/10",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Image src={p.src} alt={p.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM CONTROL BAR */}
            <div
              className="flex items-center justify-center gap-8 py-4"
              style={{ background: "#0B1420", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-opacity-100"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                >
                  <Mic size={18} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[10px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Mic</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-opacity-100"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                >
                  <Video size={18} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[10px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Cam</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-opacity-100"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                >
                  <ScreenShare size={18} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[10px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Share</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:brightness-110"
                  style={{ background: "#dc2626" }}
                >
                  <Phone size={18} strokeWidth={1.5} style={{ color: "#ffffff", transform: "rotate(135deg)" }} />
                </div>
                <span className="text-[10px] font-medium group-hover:brightness-150 transition-all duration-200" style={{ color: "#dc2626" }}>End</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TABLET LAYOUT ===== */}
        <div className="hidden md:block lg:hidden mb-12" style={revealCardStyle(isVisible, 200)}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0F1A2E",
              boxShadow: "0 24px 60px rgba(10,46,46,0.16), 0 6px 20px rgba(0,0,0,0.12)",
            }}
          >
            <div className="flex" style={{ height: "520px" }}>
              {/* LEFT SIDEBAR */}
              <div
                className="w-[56px] flex flex-col items-center py-4 gap-5 shrink-0"
                style={{ background: "#0B1420", borderRight: "1px solid rgba(255,255,255,0.06)" }}
              >
                {sidebarItems.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1 cursor-pointer group">
                    <item.icon size={16} strokeWidth={1.5} style={{ color: "#5A8A9A" }} className="group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-200" />
                    <span className="text-[8px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#5A8A9A" }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CENTER VIDEO */}
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_19g5cr19g5cr19g5-xTg3WmdmrmFMrWAf3PlsZrTu0LHBO9.png"
                  alt="Hridyesh Mishra - Finance Coach"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badges */}
                  <div
                  className="absolute top-4 right-4 px-3 py-2 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(15,26,46,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-xs font-bold" style={{ color: "#D4AF37" }}>Ex SEBI Registered</div>
                  <div className="text-[10px]" style={{ color: "#a0aec0" }}>Investment Advisor</div>
                </div>

                <div
                  className="absolute top-[28%] left-3 px-3 py-2 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(15,26,46,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-xs font-bold" style={{ color: "#D4AF37" }}>13+ Years</div>
                  <div className="text-[10px]" style={{ color: "#a0aec0" }}>Experience</div>
                </div>

                <div
                  className="absolute bottom-[20%] right-6 px-3 py-2 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(15,26,46,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-xs font-bold" style={{ color: "#D4AF37" }}>Finance Educator</div>
                </div>

                <div
                  className="absolute bottom-[20%] left-3 px-3 py-2 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(15,26,46,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-xs font-bold" style={{ color: "#D4AF37" }}>Former Director</div>
                </div>

                {/* Name Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full flex items-center gap-2" style={{ background: "rgba(15,26,46,0.7)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="text-xs font-semibold" style={{ color: "#ffffff" }}>Hridyesh Mishra</span>
                </div>
              </div>

              {/* RIGHT PARTICIPANTS */}
              <div
                className="w-[130px] shrink-0 flex flex-col"
                style={{ background: "#0B1420", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="px-2 pt-3 pb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "#D4AF37" }}>
                    Participants (5)
                  </span>
                </div>
                <div className="flex-1 px-2 flex flex-col gap-2 pb-3 overflow-hidden">
                  {participants.map((p) => (
                    <div
                      key={p.id}
                      className="relative w-full rounded-md overflow-hidden shrink-0"
                      style={{ aspectRatio: "16/10", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Image src={p.src} alt={p.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Control Bar */}
            <div
              className="flex items-center justify-center gap-6 py-3"
              style={{ background: "#0B1420", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:bg-opacity-100" style={{ background: "rgba(255,255,255,0.06)" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                  <Mic size={14} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[8px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Mic</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:bg-opacity-100" style={{ background: "rgba(255,255,255,0.06)" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                  <Video size={14} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[8px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Cam</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:bg-opacity-100" style={{ background: "rgba(255,255,255,0.06)" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,175,55,0.2)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                  <ScreenShare size={14} strokeWidth={1.5} style={{ color: "#8899AA" }} className="group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <span className="text-[8px] group-hover:text-[#D4AF37] transition-colors duration-200" style={{ color: "#6B7B8D" }}>Share</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:brightness-110" style={{ background: "#dc2626" }}>
                  <Phone size={14} strokeWidth={1.5} style={{ color: "#ffffff", transform: "rotate(135deg)" }} />
                </div>
                <span className="text-[8px] font-medium group-hover:brightness-150 transition-all duration-200" style={{ color: "#dc2626" }}>End</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE LAYOUT — Phone Mockup ===== */}
        <div className="md:hidden mb-10 flex flex-col items-center">
          {/* Phone frame */}
          <div
            className="relative mx-auto"
            style={{
              width: "min(300px, 80vw)",
            }}
          >
            {/* Outer phone shell */}
            <div
              className="relative w-full rounded-[2.8rem] overflow-hidden"
              style={{
                background: "#0D0F14",
                border: "3px solid #1A1D24",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 30px 70px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
                paddingTop: "48px",
                paddingBottom: "44px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              {/* Top notch / pill camera */}
              <div
                className="absolute top-[14px] left-1/2 -translate-x-1/2 flex items-center gap-2"
                style={{
                  background: "#0D0F14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  padding: "4px 14px",
                  zIndex: 20,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1e2128" }} />
                <div
                  className="rounded-full"
                  style={{ width: "8px", height: "8px", background: "#2a2d35", border: "1px solid rgba(255,255,255,0.12)" }}
                />
              </div>

              {/* Status bar */}
              <div
                className="absolute top-[28px] left-0 right-0 flex items-center justify-between px-6"
                style={{ zIndex: 10 }}
              >
                <span className="text-[9px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>9:41</span>
                <div className="flex items-center gap-1">
                  {/* Signal bars */}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="rgba(255,255,255,0.5)" />
                    <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="rgba(255,255,255,0.65)" />
                    <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="rgba(255,255,255,0.85)" />
                  </svg>
                  {/* Battery */}
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
                    <rect x="0.5" y="0.5" width="15" height="9" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <rect x="15.5" y="3" width="2" height="4" rx="1" fill="rgba(255,255,255,0.5)" />
                    <rect x="2" y="2" width="10" height="6" rx="1" fill="rgba(255,255,255,0.75)" />
                  </svg>
                </div>
              </div>

              {/* Screen content — video conference app */}
              <div
                className="relative overflow-hidden rounded-[1.6rem]"
                style={{ background: "#0F1A2E" }}
              >
                {/* App header bar */}
                <div
                  className="flex items-center justify-between px-3 py-2"
                  style={{ background: "#0B1420", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
                    <span className="text-[8px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                      LIVE SESSION
                    </span>
                  </div>
                  <span className="text-[8px] font-bold" style={{ color: "#D4AF37" }}>
                    alfabet
                  </span>
                </div>

                {/* Main video */}
                <div className="relative w-full" style={{ aspectRatio: "9/12" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_19g5cr19g5cr19g5-aujwfc0eqtMIgwcNnC4Ab4aRmYjGHy.png"
                    alt="Hridyesh Mishra - Finance Coach in office"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Credential badges */}
                  <div
                    className="absolute top-2 right-2 px-2 py-1 rounded-lg backdrop-blur-md"
                    style={{ background: "rgba(15,26,46,0.78)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="text-[8px] font-bold" style={{ color: "#D4AF37" }}>Ex SEBI Registered</div>
                  </div>

                  <div
                    className="absolute top-2 left-2 px-2 py-1 rounded-lg backdrop-blur-md"
                    style={{ background: "rgba(15,26,46,0.78)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="text-[8px] font-bold" style={{ color: "#D4AF37" }}>13+ Years</div>
                  </div>

                  <div
                    className="absolute top-[38%] right-2 px-2 py-1 rounded-lg backdrop-blur-md"
                    style={{ background: "rgba(15,26,46,0.78)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="text-[8px] font-bold" style={{ color: "#D4AF37" }}>Finance Educator</div>
                  </div>

                  {/* Participant thumbnails — bottom row inside video */}
                  <div
                    className="absolute bottom-0 left-0 right-0 flex gap-1 px-2 pb-2"
                    style={{ background: "linear-gradient(to top, rgba(11,20,32,0.85) 0%, transparent 100%)" }}
                  >
                    {participants.map((p) => (
                      <div
                        key={p.id}
                        className="relative rounded overflow-hidden shrink-0"
                        style={{
                          width: "calc(25% - 3px)",
                          aspectRatio: "4/3",
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <Image src={p.src} alt={p.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Name badge */}
                  <div
                    className="absolute bottom-14 left-2 px-2 py-1 rounded-full flex items-center gap-1"
                    style={{ background: "rgba(11,20,32,0.85)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }} />
                    <span className="text-[8px] font-semibold" style={{ color: "#ffffff" }}>Hridyesh Mishra</span>
                  </div>
                </div>

                {/* Control bar */}
                <div
                  className="flex items-center justify-center gap-4 py-2.5"
                  style={{ background: "#0B1420", borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <Mic size={12} strokeWidth={1.5} style={{ color: "#8899AA" }} />
                    </div>
                    <span className="text-[7px]" style={{ color: "#6B7B8D" }}>Mic</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <Video size={12} strokeWidth={1.5} style={{ color: "#8899AA" }} />
                    </div>
                    <span className="text-[7px]" style={{ color: "#6B7B8D" }}>Cam</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <ScreenShare size={12} strokeWidth={1.5} style={{ color: "#8899AA" }} />
                    </div>
                    <span className="text-[7px]" style={{ color: "#6B7B8D" }}>Share</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#dc2626" }}>
                      <Phone size={12} strokeWidth={1.5} style={{ color: "#ffffff", transform: "rotate(135deg)" }} />
                    </div>
                    <span className="text-[7px] font-medium" style={{ color: "#dc2626" }}>End</span>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2">
                <div
                  className="rounded-full"
                  style={{ width: "100px", height: "4px", background: "rgba(255,255,255,0.25)" }}
                />
              </div>
            </div>

            {/* Side buttons (purely decorative) */}
            <div
              className="absolute rounded-r-sm"
              style={{
                right: "-4px",
                top: "100px",
                width: "3px",
                height: "40px",
                background: "#1A1D24",
              }}
            />
            <div
              className="absolute rounded-l-sm"
              style={{
                left: "-4px",
                top: "90px",
                width: "3px",
                height: "28px",
                background: "#1A1D24",
              }}
            />
            <div
              className="absolute rounded-l-sm"
              style={{
                left: "-4px",
                top: "128px",
                width: "3px",
                height: "28px",
                background: "#1A1D24",
              }}
            />
            <div
              className="absolute rounded-l-sm"
              style={{
                left: "-4px",
                top: "168px",
                width: "3px",
                height: "28px",
                background: "#1A1D24",
              }}
            />
          </div>

          {/* Caption below phone */}
          <p
            className="mt-6 text-center font-sans text-sm font-medium"
            style={{ color: "#556060" }}
          >
            Join live sessions from anywhere on any device
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/919876543210?text=Hi%20Hridyesh%2C%20I%27d%20like%20to%20request%20a%20demo%20of%20your%20live%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 text-center"
            style={{
              background: "#1a1a1a",
              color: "#ffffff",
              border: "2px solid #1a1a1a",
            }}
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  )
}
