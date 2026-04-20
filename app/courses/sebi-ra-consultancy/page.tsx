import Link from "next/link"
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Package,
  Briefcase,
  BadgeCheck,
  FileText,
  Send,
  RefreshCw,
  ShieldCheck,
  Users,
  Star,
  BarChart2,
} from "lucide-react"
import StickyNav from "@/components/sticky-nav"
import Footer from "@/components/footer"
import { FadeUp, FadeLeft, FadeRight } from "@/components/course-animations"
import { consultancyService } from "@/lib/courses-data"
import EnrollButton from "@/components/payment/EnrollButton"
import SectionHeading from "@/components/section-heading"
import GlassDifferentiatorCards from "@/components/glass-differentiator-cards"

export const metadata = {
  title: "SEBI RA Registration Consultancy | Alfabet Finance",
  description:
    "End-to-End SEBI Research Analyst Registration Consultancy — from eligibility check to final approval. We handle documentation, filing, queries, and follow-ups on your behalf.",
}

const stepIcons = [ShieldCheck, FileText, Send, RefreshCw]
const differentiatorIcons = [ShieldCheck, MessageCircle, Users, BarChart2, BadgeCheck, Star]

export default function ConsultancyPage() {
  const svc = consultancyService

  return (
    <main style={{ background: "#f5f5f0", minHeight: "100vh" }}>
      <StickyNav activeHref="/courses" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)" }}>

        {/* Watermark — drifting outline text */}
        <div
          className="absolute inset-0 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
          style={{ zIndex: 1 }}
        >
          {(["BSRRA", "SEBI RA", "REGISTER"] as const).map((word, i) => (
            <div
              key={word}
              className="absolute whitespace-nowrap font-sans font-black uppercase"
              style={{
                fontSize: "clamp(80px, 16vw, 180px)",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.04)",
                color: "transparent",
                top: `${i * 33}%`,
                left: i % 2 === 0 ? "-5%" : "10%",
                letterSpacing: "0.08em",
                lineHeight: 1,
                animation: `marqueeLeft ${18 + i * 4}s linear infinite`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {word}&nbsp;&nbsp;&nbsp;{word}&nbsp;&nbsp;&nbsp;{word}
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/courses/sebi-research-analyst"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium mb-8 transition-all duration-200 hover:gap-3"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Back to BSRRA Programme
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <FadeLeft className="lg:col-span-3">
              <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full leading-none"
                  style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}
                >
                  <Briefcase size={11} strokeWidth={2.5} />
                  Professional Service
                </span>
                <span
                  className="inline-flex items-center font-sans text-[11px] font-medium px-3 py-1.5 rounded-full leading-none"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  End-to-End Support
                </span>
              </div>

              <h1
                className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-balance leading-tight mb-3"
                style={{ color: "#ffffff" }}
              >
                SEBI Research Analyst
              </h1>
              <p className="font-sans font-black text-2xl md:text-3xl mb-5" style={{ color: "#D4AF37" }}>
                Registration Consultancy
              </p>

              <p
                className="font-sans text-sm md:text-base leading-relaxed mb-8 max-w-xl"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                From Eligibility to Approval — we handle documentation, portal filing, query responses, and follow-ups on your behalf. No stress, no confusion, no chasing SEBI alone.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "100%", label: "Success Process" },
                  { value: "4", label: "Stages Covered" },
                  { value: "90+", label: "Clients Served" },
                  { value: "₹17K", label: "Standalone Value" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans font-black text-2xl md:text-3xl" style={{ color: "#D4AF37" }}>
                      {value}
                    </p>
                    <p className="font-sans text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-2">
                {[
                  "Eligibility check & strategy call",
                  "Full documentation planning",
                  "SEBI application filing",
                  "Query handling till approval",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 size={13} strokeWidth={2} style={{ color: "#D4AF37", flexShrink: 0 }} />
                    <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </FadeLeft>

            {/* Right — Purchase card */}
            <FadeRight className="lg:col-span-2" delay={150}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-5" style={{ background: "#1B5E5E" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.65)" }}>
                      Standalone Consultancy
                    </p>
                  </div>
                  <p className="font-sans font-black text-4xl" style={{ color: "#ffffff" }}>
                    Rs. 17,000
                  </p>
                  <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    BSRRA Bundle — Rs. 22,999 (all 5 components)
                  </p>

                  {/* Rating row */}
                  <div className="flex items-center gap-1.5 mt-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={13} fill="#D4AF37" stroke="#D4AF37" strokeWidth={1.5} />
                    ))}
                    <span className="font-sans text-xs font-semibold ml-1" style={{ color: "#D4AF37" }}>4.9</span>
                    <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>(90+ clients)</span>
                  </div>
                </div>

                <div className="p-6">
                  <a
                    href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20the%20SEBI%20RA%20Registration%20Consultancy.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.12em] transition-all duration-200 hover:brightness-110 mb-4"
                    style={{ background: "#1B5E5E", color: "#ffffff" }}
                  >
                    <MessageCircle size={18} strokeWidth={2} />
                    Enquire on WhatsApp
                  </a>

                  <div className="pt-4 border-t" style={{ borderColor: "#f0f0f0" }}>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#888888" }}>
                      This service includes
                    </p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Eligibility check & strategy call",
                        "Complete document checklist & drafting",
                        "SEBI portal filing (zero errors guaranteed)",
                        "Query handling & replies on your behalf",
                        "Continuous follow-up till approval",
                        "Post-registration compliance guidance",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: "#1B5E5E" }} />
                          <span className="font-sans text-xs" style={{ color: "#555555" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Better value nudge */}
                  <div
                    className="mt-5 px-4 py-3 rounded-xl flex items-start gap-3"
                    style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}
                  >
                    <Package size={16} strokeWidth={2} style={{ color: "#D4AF37", flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <p className="font-sans text-xs font-semibold" style={{ color: "#9A7A00" }}>
                        Better value: Get this free inside the BSRRA Bundle
                      </p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: "#888888" }}>
                        The bundle includes all 4 courses + this consultancy for Rs. 34,999.
                      </p>
                      <Link
                        href="/courses/sebi-research-analyst"
                        className="inline-flex items-center gap-1 font-sans text-xs font-bold mt-1.5 transition-colors hover:underline"
                        style={{ color: "#1B5E5E" }}
                      >
                        View BSRRA Bundle
                        <ArrowRight size={11} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── HOW WE GET YOU REGISTERED ── */}
      <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12">
              <SectionHeading
                align="left"
                eyebrow="Our Process"
                heading={<>How We Get You <span className="italic" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Registered</span></>}
                subheading="Four structured stages — designed to give SEBI exactly what it needs, the first time."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {svc.steps.map((step, idx) => {
              const Icon = stepIcons[idx]
              const isLeft = idx % 2 === 0
              return (
                <FadeUp key={step.number} delay={idx * 100}>
                  <div
                    className="relative rounded-2xl p-7 h-full flex flex-col gap-4 overflow-hidden"
                    style={{
                      background: idx < 2 ? "#0A2E2E" : "#f8f8f4",
                      border: idx < 2 ? "none" : "1.5px solid #e8e8e0",
                      boxShadow: idx < 2 ? "0 4px 24px rgba(10,46,46,0.2)" : "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Step number watermark */}
                    <span
                      className="absolute top-4 right-5 font-sans font-black"
                      style={{
                        fontSize: "clamp(60px, 10vw, 100px)",
                        color: idx < 2 ? "rgba(255,255,255,0.04)" : "rgba(27,94,94,0.05)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {step.number}
                    </span>

                    <div className="flex items-center gap-3 relative z-10">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: idx < 2 ? "rgba(212,175,55,0.15)" : "rgba(27,94,94,0.1)",
                        }}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          style={{ color: idx < 2 ? "#D4AF37" : "#1B5E5E" }}
                        />
                      </div>
                      <p
                        className="font-sans text-xs font-semibold uppercase tracking-wider"
                        style={{ color: idx < 2 ? "#D4AF37" : "#1B5E5E" }}
                      >
                        Step {step.number}
                      </p>
                    </div>

                    <h3
                      className="font-sans font-black text-xl md:text-2xl text-balance relative z-10"
                      style={{ color: idx < 2 ? "#ffffff" : "#1a1a1a" }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="font-sans text-sm leading-relaxed relative z-10"
                      style={{ color: idx < 2 ? "rgba(255,255,255,0.65)" : "#666666" }}
                    >
                      {step.description}
                    </p>

                    <ul className="flex flex-col gap-2 mt-auto relative z-10">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={14}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0"
                            style={{ color: idx < 2 ? "#D4AF37" : "#1B5E5E" }}
                          />
                          <span
                            className="font-sans text-xs leading-relaxed"
                            style={{ color: idx < 2 ? "rgba(255,255,255,0.7)" : "#555555" }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)" }}
      >
        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
          <div className="bsrra-grid-bg" />
        </div>
        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "75%", height: "65%",
            background: "radial-gradient(ellipse at center, rgba(27,94,94,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12">
              <SectionHeading
                align="left"
                eyebrow="Why Choose Us"
                heading={<>What Sets Our <span className="italic" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Consultancy</span> Apart</>}
                subheading="Every decision we make is designed to get your registration approved — faster, cleaner, and with less stress on your part."
                light
              />
            </div>
          </FadeUp>

          <GlassDifferentiatorCards differentiators={svc.differentiators} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="mb-12">
              <SectionHeading
                align="left"
                eyebrow="Common Questions"
                heading={<>Frequently Asked <span className="italic" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Questions</span></>}
              />
            </div>
          </FadeUp>

          <div className="flex flex-col gap-3">
            {svc.faqs.map((faq, idx) => (
              <FadeUp key={faq.question} delay={idx * 60}>
                <details
                  className="group rounded-xl overflow-hidden"
                  style={{ background: "#f8f8f4", border: "1.5px solid #e8e8e0" }}
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none gap-4">
                    <p className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                      {faq.question}
                    </p>
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                      style={{ color: "#888888" }}
                    />
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="pt-3 border-t" style={{ borderColor: "#e8e8e0" }}>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#555555" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)" }}
      >
        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="bsrra-grid-bg" />
        </div>

        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Gold decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #D4AF37 40%, #D4AF37 60%, transparent 100%)", opacity: 0.35 }} />
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #D4AF37 40%, #D4AF37 60%, transparent 100%)", opacity: 0.35 }} />

        <FadeUp>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "rgba(212,175,55,0.5)" }} />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
                Better Value
              </span>
              <div className="h-px w-10" style={{ background: "rgba(212,175,55,0.5)" }} />
            </div>

            {/* Heading */}
            <h2
              className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight mb-5"
              style={{ color: "#ffffff" }}
            >
              Get this consultancy{" "}
              <span
                className="italic"
                style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
              >
                free
              </span>
              {" "}inside the{" "}
              <span
                className="italic"
                style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
              >
                BSRRA Bundle
              </span>
            </h2>

            {/* Sub */}
            <p
              className="font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              The bundle includes Technical Analysis, Options Pro, Fundamental Analysis, and NISM Series XV — plus the full consultancy — all for{" "}
              <span style={{ color: "#ffffff", fontWeight: 600 }}>Rs. 34,999</span>
              {" "}instead of{" "}
              <span style={{ color: "rgba(255,255,255,0.45)", textDecoration: "line-through" }}>Rs. 51,999</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses/sebi-research-analyst"
                className="inline-flex items-center justify-center gap-2.5 font-sans font-bold text-sm uppercase tracking-[0.12em] px-8 py-4 rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#D4AF37", color: "#0A2E2E", boxShadow: "0 4px 24px rgba(212,175,55,0.35)" }}
              >
                <Package size={17} strokeWidth={2.5} />
                View BSRRA Bundle
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20the%20standalone%20SEBI%20RA%20Registration%20Consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 font-sans font-bold text-sm uppercase tracking-[0.12em] px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                <MessageCircle size={17} strokeWidth={2} />
                Enquire Standalone
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </main>
  )
}
