"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Clock, BookOpen, Users, ArrowRight } from "lucide-react"
import { courses } from "@/lib/courses-data"
import Footer from "@/components/footer"
import StickyNav from "@/components/sticky-nav"
import { useEffect, useRef, useState, useCallback } from "react"

const levelColors: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "rgba(27,94,94,0.12)", text: "#1B5E5E" },
  Intermediate: { bg: "rgba(212,175,55,0.15)", text: "#9A7A00" },
  Advanced: { bg: "rgba(180,50,50,0.10)", text: "#B43232" },
  Professional: { bg: "rgba(27,94,94,0.18)", text: "#0F3F3F" },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          fill={star <= Math.floor(rating) ? "#D4AF37" : "none"}
          stroke={star <= Math.floor(rating) ? "#D4AF37" : "#ccc"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

// Animated counter hook — re-triggers every time element enters viewport
function useCounterAnimation(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animRef = useRef<number | null>(null)

  const startAnimation = useCallback(() => {
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }, [target, duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animRef.current) cancelAnimationFrame(animRef.current)
            setCount(0)
            startAnimation()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [startAnimation])

  return { count, ref }
}

// Scroll-triggered reveal hook — re-triggers every time element enters viewport
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// Individual stat counter
function StatCounter({ value, label }: { value: string; label: string }) {
  // Parse the numeric part
  const numericMatch = value.match(/^(\d+(?:\.\d+)?)/)
  const numericPart = numericMatch ? parseFloat(numericMatch[1]) : 0
  const suffix = value.replace(numericMatch?.[0] ?? "", "")

  const { count, ref } = useCounterAnimation(numericPart, 1400)

  const displayValue = numericPart > 0
    ? (Number.isInteger(numericPart) ? count.toString() : count.toFixed(1)) + suffix
    : value

  return (
    <div className="text-center">
      <p
        ref={ref}
        className="font-sans font-black text-2xl md:text-3xl"
        style={{ color: "#D4AF37" }}
      >
        {displayValue}
      </p>
      <p
        className="font-sans text-xs uppercase tracking-widest mt-0.5"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </p>
    </div>
  )
}

// Animated course card wrapper
function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Animated section header
function AnimatedHeader({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Total students across all courses (realistic sum)
const totalStudents = courses.reduce((sum, c) => {
  const n = parseInt(c.members.replace(/[^0-9]/g, ""), 10) || 0
  return sum + n
}, 0)

export default function CoursesPage() {
  return (
    <main style={{ background: "#f5f5f0", minHeight: "100vh" }}>
      <StickyNav activeHref="/courses" />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "#1B5E5E" }}
      >
        {/* Animated marquee watermark — 3D depth layers */}
        <div
          className="marquee-depth-container absolute inset-0 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {([
            { dir: "Fwd", speed: 32, depthClass: "marquee-row-back",  opacity: 0.028, stroke: "1.5px" },
            { dir: "Rev", speed: 24, depthClass: "marquee-row-front", opacity: 0.065, stroke: "2.5px" },
            { dir: "Fwd", speed: 40, depthClass: "marquee-row-mid",   opacity: 0.040, stroke: "2px"   },
          ] as const).map((row, i) => (
            <div
              key={i}
              className={`flex whitespace-nowrap ${row.depthClass}`}
              style={{
                animation: `marquee${row.dir} ${row.speed}s linear infinite`,
                willChange: "transform",
                opacity: row.opacity,
              }}
            >
              {Array.from({ length: 14 }).map((_, j) => (
                <span
                  key={j}
                  className="font-sans font-black uppercase leading-none"
                  style={{
                    fontSize: "clamp(72px, 14vw, 160px)",
                    WebkitTextStroke: `${row.stroke} #ffffff`,
                    color: "transparent",
                    paddingRight: "clamp(32px, 5vw, 80px)",
                    letterSpacing: "0.1em",
                  }}
                >
                  LEARN
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10,40,40,0.4) 100%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
              Curated for you
            </span>
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight"
            style={{ color: "#ffffff" }}
          >
            All Courses
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            From stock market fundamentals to professional SEBI registration — choose the
            learning path that matches your goals and experience level.
          </p>

          {/* Stats row with counters */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <StatCounter value={`${courses.length}`} label="Courses" />
            <StatCounter value={`${totalStudents}+`} label="Students Enrolled" />
            <StatCounter value="4.8★" label="Avg. Rating" />
            <StatCounter value="6+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section label */}
          <AnimatedHeader>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, #1B5E5E, transparent)" }}
              />
              <p
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#1B5E5E" }}
              >
                {courses.length} Courses Available
              </p>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(270deg, #1B5E5E, transparent)" }}
              />
            </div>
          </AnimatedHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {courses.map((course, idx) => {
              const lvl = levelColors[course.level] ?? levelColors.Beginner
              return (
                <AnimatedCard key={course.id} delay={idx * 80}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E5E]"
                    style={{
                      background: "#ffffff",
                      boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                      textDecoration: "none",
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      {/* GIF layer — lazy loaded, plays beneath the JPG */}
                      {course.gifImage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={course.gifImage}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      {/* JPG layer — fades out on hover, revealing the GIF */}
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className={`object-cover transition-[opacity,transform] duration-700 ease-in-out group-hover:scale-105 ${course.gifImage ? "group-hover:opacity-0" : ""}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Level badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="font-sans text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(0,0,0,0.50)", color: "#ffffff", backdropFilter: "blur(8px)" }}
                        >
                          {course.comingSoon ? "Coming Soon" : course.level}
                        </span>
                      </div>
                      {/* Format badge */}
                      {!course.comingSoon && (
                        <div className="absolute top-3 right-3">
                          <span
                            className="font-sans text-[11px] font-medium px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(0,0,0,0.45)", color: "#ffffff", backdropFilter: "blur(8px)" }}
                          >
                            {course.format}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 px-5 pt-5 pb-5">
                      <h2
                        className="font-sans font-bold text-base leading-snug mb-2 line-clamp-2 min-h-[2.75rem]"
                        style={{ color: "#1a1a1a" }}
                      >
                        {course.title}
                      </h2>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <StarRating rating={course.rating} />
                        <span className="font-sans font-semibold text-xs" style={{ color: "#1a1a1a" }}>
                          {course.rating}
                        </span>
                        <span className="font-sans text-xs" style={{ color: "#999999" }}>
                          ({course.reviews.toLocaleString()})
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} strokeWidth={2} style={{ color: "#888888" }} />
                          <span className="font-sans text-xs" style={{ color: "#777777" }}>
                            {course.durationHours}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <BookOpen size={13} strokeWidth={2} style={{ color: "#888888" }} />
                          <span className="font-sans text-xs" style={{ color: "#777777" }}>
                            {course.modules.length} Modules
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={13} strokeWidth={2} style={{ color: "#888888" }} />
                          <span className="font-sans text-xs" style={{ color: "#777777" }}>
                            {course.members}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1" />

                      {/* CTA only — no price */}
                      <div className="flex items-center justify-end pt-4 border-t" style={{ borderColor: "#f0f0f0" }}>
                        <div
                          className="flex items-center gap-1.5 font-sans font-semibold text-sm transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#0F4040]"
                          style={{ color: "#1B5E5E" }}
                        >
                          View Course
                          <ArrowRight size={15} strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separator line between CTA and footer */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }}
          />
        </div>
      </div>

      {/* CTA Banner */}
      <section
        className="py-16 md:py-20"
        style={{ background: "#0A2E2E" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedHeader>
            <p
              className="font-serif text-3xl md:text-4xl mb-3"
              style={{ color: "#D4AF37" }}
            >
              Not sure where to start?
            </p>
            <h2
              className="font-sans font-bold text-3xl md:text-4xl text-balance leading-tight"
              style={{ color: "#ffffff" }}
            >
              Book a Free Consultation
            </h2>
            <p
              className="mt-4 font-sans text-sm md:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Talk to Hridyesh directly and get personalized guidance on which course is
              right for your goals.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%20Hridyesh%2C%20I%27m%20interested%20in%20your%20finance%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-sans font-bold text-sm px-10 py-3.5 rounded transition-all duration-200 uppercase tracking-[0.15em] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{ background: "#D4AF37", color: "#0A2E2E" }}
            >
              WhatsApp Now
            </a>
          </AnimatedHeader>
        </div>
      </section>

      {/* Separator line between CTA and footer */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
