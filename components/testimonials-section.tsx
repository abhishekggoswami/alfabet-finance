"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    name: "Astha Singh",
    role: "Business Analyst, Tenon Group",
    quote:
      "ATTENDED THE 15-DAY WORKSHOP AT LNCT UNIVERSITY. LEARNED TECHNICAL AND FUNDAMENTAL ANALYSIS IN THE SIMPLEST WAY. THE SESSION ON PREDICTING STOCK MOVEMENT WAS EXCEPTIONAL.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_az1asuaz1asuaz1a-0gE5YZU5RPc9ISOFt0r8mS74wumWHp.png",
  },
  {
    name: "Govind Patidar",
    role: "Assistant Manager, MPGB",
    quote:
      "THANK YOU GURUJI FOR TEACHING THE TRUE ART OF INVESTING. BOTH THE FUNDAMENTAL AND TECHNICAL ANALYSIS COURSES ARE AN ABSOLUTE MUST FOR ANYONE SERIOUS ABOUT WEALTH CREATION.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_psw4h5psw4h5psw4-yrgUuSPRfF80MSgvya8C0pQcdbCF64.png",
  },
  {
    name: "Harsh Gupta",
    role: "Student, B.Com",
    quote:
      "FROM KNOWING NOTHING TO UNDERSTANDING TECHNICAL ANALYSIS AND OPTIONS TRADING — ALL CREDIT GOES TO HRIDYESH SIR. HE MADE ME FALL IN LOVE WITH THE STOCK MARKET.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_jhi9zjhi9zjhi9zj-oCpxLHwa1mqbzphiQxLRjYeIO08Muj.png",
  },
  {
    name: "Nayan Namdev",
    role: "ALP, Indian Railways",
    quote:
      "HRIDYESH SIR INTRODUCED ME TO THE STOCK MARKET IN COLLEGE. I STARTED INVESTING THEN AND NOW THAT I AM WORKING, MY PORTFOLIO IS GROWING FASTER THAN EVER. HIGHLY RECOMMENDED.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_1dq0n71dq0n71dq0-6cs5AxNYT7KTHvy2aDcG9jIayugBGU.png",
  },
  {
    name: "Rudra Pratap",
    role: "Finance Enthusiast",
    quote:
      "IN JUST 3 MONTHS I LEARNED HOW TO PICK STOCKS FOR LONG-TERM WEALTH CREATION. THE FUNDAMENTAL ANALYSIS COURSE WAS A COMPLETE GAME CHANGER FOR MY INVESTING JOURNEY.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_bcn049bcn049bcn0-KGZw3raMIRjLh27eysny8d4jTCZrre.png",
  },
  {
    name: "Arpit Porwal",
    role: "Banker, SBI",
    quote:
      "HRIDYESH SIR SHOWED ME HOW TO PICK STOCKS AND INVEST FOR THE LONG TERM. THE FUNDAMENTAL ANALYSIS COURSE IS A GAME CHANGER. GRATEFUL FOR HIS CONTINUED GUIDANCE EVEN AFTER THE COURSE.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_1iyma71iyma71iym-qOBVoajbJpagxZ0POQ1uvK9FBRnRJg.png",
  },
  {
    name: "Abhishek Goswami",
    role: "Stock Market Trader",
    quote:
      "THE TECHNICAL ANALYSIS COURSE COMPLETELY CHANGED HOW I APPROACH THE STOCK MARKET. HRIDYESH HAS HELPED ME TREMENDOUSLY OVER THE YEARS.",
    image: "/testimonial-kshitiz.jpeg",
  },
  {
    name: "Amishi Chodhary",
    role: "Finance Professional",
    quote:
      "I ENROLLED IN THE NISM CERTIFICATION PROGRAM AND CLEARED MY EXAM ON THE FIRST ATTEMPT. THE STRUCTURED APPROACH AND MENTORSHIP WERE INVALUABLE.",
    image: "/testimonial-amishi.jpg",
  },
  {
    name: "Akshat Dhar",
    role: "Options Trader",
    quote:
      "AFTER THE OPTIONS TRADING COURSE, MY PORTFOLIO RETURNS IMPROVED SIGNIFICANTLY. THE REAL-WORLD EXAMPLES AND RISK MANAGEMENT STRATEGIES MADE ALL THE DIFFERENCE.",
    image: "/testimonial-akash.jpeg",
  },
  {
    name: "Kshitiz Singh",
    role: "Long-term Investor",
    quote:
      "I HAVE ATTENDED MULTIPLE LIVE SESSIONS AND EACH ONE HAS BEEN A GOLDMINE OF KNOWLEDGE. THE INTERACTIVE FORMAT MAKES LEARNING FINANCE GENUINELY ENJOYABLE.",
    image: "/testimonial-akshat.jpeg",
  },
]

/* ---- Single testimonial card ---- */
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) {
  return (
    <div
      className="relative w-full overflow-hidden flex-shrink-0"
      style={{
        aspectRatio: "5 / 5.5",
        transform: "translateZ(0)",
      }}
    >
      {/* Darkened background photo */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.image}
          alt=""
          fill
          className="object-cover"
          style={{ filter: "brightness(0.12) grayscale(0.7)" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* White rectangular border frame */}
      <div
        className="absolute z-[1] pointer-events-none"
        style={{
          top: "10%",
          left: "28%",
          right: "6%",
          bottom: "6%",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      />

      {/* Person photo */}
      <div
        className="absolute z-[3] overflow-hidden shadow-2xl"
        style={{
          top: "50%",
          left: "3%",
          transform: "translateY(-50%)",
          width: "40%",
          aspectRatio: "3 / 4",
        }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 12vw"
        />
      </div>

      {/* Quotation marks */}
      <div
        className="absolute z-[5] select-none font-serif"
        style={{
          top: "4%",
          left: "4%",
          fontSize: "clamp(50px, 6vw, 72px)",
          fontWeight: 900,
          lineHeight: 0.75,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "-3px",
        }}
      >
        {"\u201C\u201C"}
      </div>

      {/* Quote text */}
      <div
        className="absolute z-[2] flex items-center"
        style={{
          top: "14%",
          left: "48%",
          right: "10%",
          bottom: "22%",
        }}
      >
        <p
          className="font-sans font-medium uppercase leading-snug"
          style={{
            color: "#ffffff",
            fontSize: "clamp(9px, 0.88vw, 12px)",
            lineHeight: 1.6,
            letterSpacing: "0.03em",
          }}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Name + role */}
      <div
        className="absolute z-[4] flex flex-col gap-0.5"
        style={{ bottom: "7%", right: "9%" }}
      >
        <span
          className="font-sans font-semibold tracking-widest uppercase text-right"
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(7px, 0.6vw, 9px)",
          }}
        >
          — {testimonial.name.toUpperCase()}
        </span>
        <span
          className="font-sans tracking-wider uppercase text-right"
          style={{
            color: "#D4AF37",
            fontSize: "clamp(6px, 0.52vw, 8px)",
          }}
        >
          {testimonial.role.toUpperCase()}
        </span>
      </div>
    </div>
  )
}

/* ---- Mobile swipe card ---- */
function MobileTestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0]
  isActive: boolean
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0.35,
        transform: isActive ? "scale(1) translateY(-6px)" : "scale(0.92) translateY(0px)",
        pointerEvents: isActive ? "auto" : "none",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {/* Photo strip at top */}
      <div className="relative w-full" style={{ height: "320px" }}>
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(10,40,35,0.92) 100%)",
          }}
        />
        {/* Name over photo bottom */}
        <div className="absolute bottom-3 left-4">
          <p
            className="font-sans font-bold uppercase tracking-wider"
            style={{ color: "#ffffff", fontSize: "13px" }}
          >
            {testimonial.name}
          </p>
          <p
            className="font-sans uppercase tracking-widest"
            style={{ color: "#D4AF37", fontSize: "9px" }}
          >
            {testimonial.role}
          </p>
        </div>
        {/* Big quote mark */}
        <div
          className="absolute top-3 right-4 font-serif select-none"
          style={{
            fontSize: "52px",
            fontWeight: 900,
            lineHeight: 0.8,
            color: "rgba(212,175,55,0.45)",
          }}
        >
          {"\u201C"}
        </div>
      </div>

      {/* Quote text */}
      <div className="px-5 py-4">
        <p
          className="font-sans font-normal uppercase leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "11px",
            letterSpacing: "0.04em",
            lineHeight: 1.75,
          }}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Gold bottom bar */}
      <div
        className="h-0.5 mx-5 mb-4 rounded-full"
        style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
      />
    </div>
  )
}

/* ---- Main section ---- */
export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [mobileAnimating, setMobileAnimating] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const offsetRef = useRef(0)
  const animRef = useRef<number | null>(null)
  const mobileIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const cardWidthRef = useRef(0)
  const speedPx = 0.45
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 })

  const duplicated = [...testimonials, ...testimonials]

  const measureCards = useCallback(() => {
    if (!trackRef.current) return
    const firstCard = trackRef.current.children[0] as HTMLElement | undefined
    if (firstCard) {
      const gap = 20
      cardWidthRef.current = firstCard.offsetWidth + gap
    }
  }, [])

  useEffect(() => {
    measureCards()
    window.addEventListener("resize", measureCards)
    return () => window.removeEventListener("resize", measureCards)
  }, [measureCards])

  useEffect(() => {
    // Wait until card width is measured before starting the loop
    const startLoop = () => {
      if (cardWidthRef.current === 0) {
        requestAnimationFrame(startLoop)
        return
      }
      const totalWidth = cardWidthRef.current * testimonials.length

      const tick = () => {
        if (!isPaused && cardWidthRef.current > 0 && totalWidth > 0) {
          offsetRef.current += speedPx
          if (offsetRef.current >= totalWidth) {
            offsetRef.current = offsetRef.current % totalWidth
          }
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
          }
          const raw = Math.floor(offsetRef.current / cardWidthRef.current) % testimonials.length
          const newIndex = isNaN(raw) || raw < 0 ? 0 : raw
          setDesktopIndex(newIndex)
        }
        animRef.current = requestAnimationFrame(tick)
      }

      animRef.current = requestAnimationFrame(tick)
    }

    startLoop()
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [isPaused])

  const goTo = (index: number) => {
    if (mobileAnimating) return
    setMobileAnimating(true)
    let target = index
    if (target < 0) target = testimonials.length - 1
    if (target >= testimonials.length) target = 0
    setMobileIndex(target)
    setTimeout(() => setMobileAnimating(false), 700)
    // Reset mobile interval so it doesn't fire immediately after manual tap
    if (mobileIntervalRef.current) clearInterval(mobileIntervalRef.current)
    mobileIntervalRef.current = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  // Mobile auto-advance — 4s interval, completely independent of desktop
  useEffect(() => {
    mobileIntervalRef.current = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => {
      if (mobileIntervalRef.current) clearInterval(mobileIntervalRef.current)
    }
  }, [])

  const goToPrev = () => {
    if (cardWidthRef.current === 0) return
    const totalWidth = cardWidthRef.current * testimonials.length
    offsetRef.current -= cardWidthRef.current
    if (offsetRef.current < 0) offsetRef.current += totalWidth
    if (trackRef.current) {
      trackRef.current.style.transition =
        "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none"
      }, 500)
    }
  }

  const goToNext = () => {
    if (cardWidthRef.current === 0) return
    const totalWidth = cardWidthRef.current * testimonials.length
    offsetRef.current += cardWidthRef.current
    if (offsetRef.current >= totalWidth) offsetRef.current -= totalWidth
    if (trackRef.current) {
      trackRef.current.style.transition =
        "transform 0.5s cubic-bezier(0.4,0,0.2,1)"
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none"
      }, 500)
    }
  }

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)",
      }}
    >
      <div ref={containerRef}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-12">
        <SectionHeading
          eyebrow="Student Stories"
          heading={<>What Our{" "}<VariableProximity
            label="Students"
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 900, 'opsz' 22"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
            className="italic"
            style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
          />{" "}Say</>}
          subheading="Hear from our community of learners who have transformed their financial knowledge and career prospects through our courses."
          light
        />
      </div>

      {/* ===== DESKTOP: infinite auto-scroll ===== */}
      <div
        className="relative hidden md:block max-w-[96vw] mx-auto px-4 md:px-6"
        style={revealStyle(isVisible, 200)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5"
            style={{ willChange: "transform", width: "max-content" }}
          >
            {duplicated.map((t, i) => (
              <div
                key={`card-${i}`}
                className="flex-shrink-0"
                style={{
                  width: "calc((100vw - 120px) / 3.5)",
                  maxWidth: "340px",
                }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1B5E5E"
              e.currentTarget.style.borderColor = "#1B5E5E"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
            }}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: desktopIndex === i ? "24px" : "7px",
                  height: "7px",
                  background:
                    desktopIndex === i
                      ? "#D4AF37"
                      : "rgba(255,255,255,0.22)",
                }}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1B5E5E"
              e.currentTarget.style.borderColor = "#1B5E5E"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
            }}
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ===== MOBILE: tap-to-swipe card stack ===== */}
      <div className="relative md:hidden px-5" style={revealStyle(isVisible, 150)}>
        {/* Stacked cards illusion behind active card */}
        <div className="relative">
          {/* Back card peek */}
          <div
            className="absolute inset-x-4 top-3 rounded-2xl"
            style={{
              height: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              transform: "scale(0.96)",
              zIndex: 0,
            }}
          />
          {/* Active card */}
          <div className="relative" style={{ zIndex: 1 }}>
            <MobileTestimonialCard
              testimonial={testimonials[mobileIndex]}
              isActive={true}
            />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center justify-between mt-6 px-1">
          <button
            onClick={() => goTo(mobileIndex - 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-110"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1B5E5E"
              e.currentTarget.style.borderColor = "#1B5E5E"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Pill dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: mobileIndex === i ? "22px" : "6px",
                  height: "6px",
                  background:
                    mobileIndex === i
                      ? "#D4AF37"
                      : "rgba(255,255,255,0.22)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(mobileIndex + 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-110"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1B5E5E"
              e.currentTarget.style.borderColor = "#1B5E5E"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Counter */}
        <p
          className="text-center mt-3 font-sans"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px" }}
        >
            {mobileIndex + 1} / {testimonials.length}
        </p>
      </div>
      </div>
    </section>
  )
}
