"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import StickyNav from "@/components/sticky-nav"
import CompactCTA from "@/components/compact-cta"
import { useEffect, useRef, useState, useCallback } from "react"
import { Bell, ArrowRight, Calendar, Users, Video } from "lucide-react"

// Scroll-triggered reveal hook
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

// Animated card wrapper
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

const upcomingFeatures = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description: "Real-time workshops with Q&A, live charts, and hands-on practice with expert guidance.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Weekend and evening sessions designed to fit around your work schedule.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Limited participants per workshop to ensure personalized attention and interaction.",
  },
]

export default function WorkshopsPage() {
  return (
    <main style={{ background: "#f5f5f0", minHeight: "100vh" }}>
      <StickyNav activeHref="/workshops" />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "#1B5E5E" }}
      >
        {/* Animated marquee watermark */}
        <div
          className="marquee-depth-container absolute inset-0 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {([
            { dir: "Fwd", speed: 32, depthClass: "marquee-row-back", opacity: 0.028, stroke: "1.5px" },
            { dir: "Rev", speed: 24, depthClass: "marquee-row-front", opacity: 0.065, stroke: "2.5px" },
            { dir: "Fwd", speed: 40, depthClass: "marquee-row-mid", opacity: 0.040, stroke: "2px" },
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
                  WORKSHOPS
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
              Live learning
            </span>
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight"
            style={{ color: "#ffffff" }}
          >
            Workshops
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Interactive live sessions designed to give you hands-on experience in stock market
            analysis, personal finance, and wealth building strategies.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedHeader>
            {/* Coming Soon Badge */}
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
                style={{ 
                  background: "rgba(212,175,55,0.12)", 
                  border: "1px solid rgba(212,175,55,0.3)" 
                }}
              >
                <Bell size={16} style={{ color: "#D4AF37" }} />
                <span
                  className="font-sans text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#D4AF37" }}
                >
                  Coming Soon
                </span>
              </div>

              <h2
                className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight mb-4"
                style={{ color: "#1a1a1a" }}
              >
                No Workshops Available Yet
              </h2>
              <p
                className="font-sans text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                style={{ color: "#666666" }}
              >
                We're working on exciting new live workshops that will help you master the
                markets. Stay tuned for announcements!
              </p>
            </div>
          </AnimatedHeader>

          {/* What to expect cards */}
          <AnimatedHeader delay={150}>
            <div className="mt-12 mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg, #1B5E5E, transparent)" }}
                />
                <p
                  className="font-sans text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#1B5E5E" }}
                >
                  What to Expect
                </p>
                <div
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(270deg, #1B5E5E, transparent)" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingFeatures.map((feature, idx) => (
                  <AnimatedCard key={feature.title} delay={idx * 100}>
                    <div
                      className="p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group cursor-default"
                      style={{
                        background: "#ffffff",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(27,94,94,0.1)" }}
                      >
                        <feature.icon size={24} style={{ color: "#1B5E5E" }} />
                      </div>
                      <h3
                        className="font-sans font-bold text-base mb-2"
                        style={{ color: "#1a1a1a" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "#666666" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedHeader>

          {/* CTA */}
          <AnimatedHeader delay={300}>
            <div
              className="text-center p-8 md:p-12 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(27,94,94,0.06) 0%, rgba(212,175,55,0.06) 100%)",
                border: "1px solid rgba(27,94,94,0.1)",
              }}
            >
              <p
                className="font-serif text-xl md:text-2xl mb-2"
                style={{ color: "#1B5E5E" }}
              >
                In the meantime
              </p>
              <h3
                className="font-sans font-bold text-xl md:text-2xl mb-4"
                style={{ color: "#1a1a1a" }}
              >
                Check Out Our Self-Paced Courses
              </h3>
              <p
                className="font-sans text-sm md:text-base leading-relaxed mb-6 max-w-md mx-auto"
                style={{ color: "#666666" }}
              >
                Learn at your own pace with our comprehensive courses covering everything
                from basics to advanced trading strategies.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 font-sans font-bold text-sm px-8 py-3.5 rounded-lg transition-all duration-200 uppercase tracking-[0.15em] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                style={{ background: "#1B5E5E", color: "#ffffff" }}
              >
                Browse Courses
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </AnimatedHeader>
        </div>
      </section>

      {/* Compact CTA before footer */}
      <CompactCTA
        title="Unlock Your"
        subtitle="Trading Potential"
        description="Our workshops are designed to elevate your skills, deepen your market understanding, and equip you with proven strategies taught by industry experts."
        buttonText="Explore Courses"
        buttonHref="/courses"
        whatsappText="Ask Questions"
      />

      <Footer />
    </main>
  )
}
