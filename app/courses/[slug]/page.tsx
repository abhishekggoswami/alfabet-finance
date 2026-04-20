import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Star,
  Clock,
  BookOpen,
  Users,
  CheckCircle2,
  ChevronDown,
  ArrowLeft,
  Award,
  Target,
  MessageCircle,
  PlayCircle,
  Package,
  Briefcase,
  ArrowRight,
  BadgeCheck,
  TrendingUp,
} from "lucide-react"
import { courses, getCourseBySlug, consultancyService } from "@/lib/courses-data"
import Footer from "@/components/footer"
import EnrollButton from "@/components/payment/EnrollButton"
import StickyNav from "@/components/sticky-nav"
import CompactCTA from "@/components/compact-cta"
import { FadeUp, FadeLeft, FadeRight, StaggerChildren, AnimatedCounter } from "@/components/course-animations"
import ExploreCourseCard from "@/components/explore-course-card"
import SectionHeading from "@/components/section-heading"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: `${course.title} | Alfabet Finance`,
    description: course.objective,
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= Math.floor(rating) ? "#D4AF37" : "none"}
          stroke={star <= Math.floor(rating) ? "#D4AF37" : "#ccc"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

const levelColors: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "rgba(27,94,94,0.12)", text: "#1B5E5E" },
  Intermediate: { bg: "rgba(212,175,55,0.15)", text: "#9A7A00" },
  Advanced: { bg: "rgba(180,50,50,0.10)", text: "#B43232" },
  Professional: { bg: "rgba(27,94,94,0.18)", text: "#0F3F3F" },
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  const lvl = levelColors[course.level] ?? levelColors.Beginner
  const otherCourses = courses.filter((c) => c.slug !== course.slug).slice(0, 3)
  const memberCount = parseInt(course.members.replace(/[^0-9]/g, ""), 10) || 0
  const isBundle = course.isBundle === true

  // Bundle includes list
  const bundleIncludes = isBundle
    ? [
        `${(course.bundleCourses?.length ?? 4)} full modules included`,
        "SEBI RA Registration Consultancy (₹17,000 value)",
        "NISM Series XV certification preparation",
        "Live Classes with Expert Guidance",
        "Certificate of completion",
      ]
    : [
        `${course.durationHours} of on-demand content`,
        `${course.modules.length} detailed modules`,
        ...(course.pdfPrice ? ["Downloadable PDF study material"] : []),
        "Certificate of completion",
      ]

  return (
    <main style={{ background: "#f5f5f0", minHeight: "100vh" }}>
      <StickyNav activeHref="/courses" />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "#1B5E5E" }}>
        {/* Animated marquee watermark */}
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
              {Array.from({ length: 12 }).map((_, j) => (
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
                  {isBundle ? "BSRRA" : "COURSE"}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10,40,40,0.45) 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium mb-8 transition-all duration-200 hover:gap-3 hover:text-white"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            All Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left – course info */}
            <FadeLeft className="lg:col-span-3">
              <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                <span
                  className="inline-flex items-center font-sans text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full leading-none"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.30)" }}
                >
                  {course.level}
                </span>
                <span
                  className="inline-flex items-center font-sans text-[11px] font-medium px-3 py-1.5 rounded-full leading-none"
                  style={{ background: "rgba(212,175,55,0.25)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.35)" }}
                >
                  {course.format}
                </span>
                {isBundle && (
                  <span
                    className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full leading-none"
                    style={{ background: "rgba(212,175,55,0.35)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.5)" }}
                  >
                    <Package size={11} strokeWidth={2.5} />
                    Bundle of 4 Modules + Consultancy
                  </span>
                )}
              </div>

              <h1
                className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-balance leading-tight mb-4"
                style={{ color: "#ffffff" }}
              >
                {isBundle ? "Be a SEBI Registered Research Analyst" : course.title}
              </h1>
              {isBundle && (
                <p className="font-sans font-semibold text-base md:text-lg mb-3" style={{ color: "#D4AF37" }}>
                  BSRRA Program<br />The Complete Pathway
                </p>
              )}

              <p
                className="font-sans text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {course.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <StarRating rating={course.rating} />
                  <span className="font-sans font-bold text-sm" style={{ color: "#D4AF37" }}>
                    {course.rating}
                  </span>
                  <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    (<AnimatedCounter value={course.reviews} className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }} /> reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} strokeWidth={2} style={{ color: "rgba(255,255,255,0.5)" }} />
                  <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {course.duration}
                  </span>
                </div>
                {!isBundle && (
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} strokeWidth={2} style={{ color: "rgba(255,255,255,0.5)" }} />
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                      {course.modules.length} Modules
                    </span>
                  </div>
                )}
                {isBundle && (
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} strokeWidth={2} style={{ color: "rgba(255,255,255,0.5)" }} />
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                      9 Components
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Users size={14} strokeWidth={2} style={{ color: "rgba(255,255,255,0.5)" }} />
                  <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    <AnimatedCounter value={memberCount} suffix="+" className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.72)" }} /> Students
                  </span>
                </div>
              </div>

              {/* PDF Only Card - Compact Premium */}
              {!isBundle && course.pdfPrice && !course.comingSoon && (
                <div
                  className="rounded-xl mt-6"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e8e0",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    maxWidth: "260px",
                    overflow: "hidden",
                  }}
                >
                  {/* Thin accent bar */}
                  <div style={{ height: "2px", background: "linear-gradient(90deg, #D4AF37 0%, #1B5E5E 100%)" }} />
                  
                  <div className="p-3.5">
                    {/* Header: Icon + Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(212,175,55,0.12)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <p className="font-sans text-[8px] font-bold uppercase tracking-wider" style={{ color: "#D4AF37" }}>
                        PDF Material
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-2.5">
                      <p className="font-sans font-black text-xl" style={{ color: "#1B5E5E", lineHeight: "1.1" }}>
                        Rs. {course.pdfPrice.toLocaleString()}
                      </p>
                      <p className="font-sans text-[9px]" style={{ color: "#999999", marginTop: "2px" }}>
                        One-time
                      </p>
                    </div>

                    {/* Button */}
                    <EnrollButton
                      courseTitle={`${course.title} - Study Material`}
                      basePrice={course.pdfPrice}
                      pdfPrice={null}
                      includes={["Complete course notes", "Downloadable PDF"]}
                    />
                  </div>
                </div>
              )}
            </FadeLeft>

            {/* Right – purchase card */}
            <FadeRight className="lg:col-span-2" delay={150}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                }}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="p-6">
                  {!course.comingSoon && (
                    <div className="flex items-end gap-2 mb-1">
                      <p className="font-sans font-black text-3xl" style={{ color: "#1a1a1a" }}>
                        Rs. {course.price.toLocaleString()}
                      </p>
                      {isBundle && course.originalBundlePrice && (
                        <p className="font-sans text-sm line-through mb-1" style={{ color: "#aaaaaa" }}>
                          Rs. {course.originalBundlePrice.toLocaleString()}
                        </p>
                      )}
                    </div>
                  )}
                  {!course.comingSoon && (
                    <>
                      {isBundle ? (
                        <p className="font-sans text-xs mb-5" style={{ color: "#888888" }}>
                          Includes all 4 courses + Rs. 17,000 consultancy
                        </p>
                      ) : course.pdfPrice ? (
                        <p className="font-sans text-xs mb-5" style={{ color: "#888888" }}>
                          + PDF Study Material at Rs. {course.pdfPrice} (optional)
                        </p>
                      ) : null}
                    </>
                  )}

                  <EnrollButton
                    courseTitle={course.title}
                    basePrice={course.price}
                    pdfPrice={isBundle ? null : (course.pdfPrice ?? null)}
                    includes={bundleIncludes}
                    comingSoon={course.comingSoon}
                  />

                  {/* Bundle includes checklist in card */}
                  {isBundle && course.bundleCourses && (
                    <div className="mt-5 pt-5 border-t" style={{ borderColor: "#f0f0f0" }}>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#888888" }}>
                        This course includes
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                          ...course.bundleCourses.map((bc) => `${bc.shortTitle} (${bc.durationHours})`),
                          "End-to-End SEBI RA Registration Consultancy",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <CheckCircle2 size={14} strokeWidth={2} style={{ color: "#1B5E5E", flexShrink: 0 }} />
                            <span className="font-sans text-xs" style={{ color: "#555555" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {isBundle && course.bundleCourses && (
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <div className="text-center mb-12">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#D4AF37" }}>
                  Everything Included
                </p>
                <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-balance mb-4" style={{ color: "#1a1a1a" }}>
                  One Programme{" "}
                  <span className="font-serif font-normal italic" style={{ color: "#1B5E5E" }}>
                    Four Powerful
                  </span>{" "}
                  Components
                </h2>
                <p className="font-sans text-sm md:text-base max-w-xl mx-auto" style={{ color: "#777777" }}>
                  Most people pay Rs. 47,996 buying these separately. The BSRRA bundle gives you everything at Rs. 43,996.
                </p>
              </div>
            </FadeUp>

            {/* 4 course cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {course.bundleCourses.map((bc, idx) => (
                <FadeUp key={bc.slug} delay={idx * 80}>
                  <Link href={`/courses/${bc.slug}`}>
                    <div
                      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer h-full flex flex-col"
                      style={{ background: "#f8f8f4", border: "1.5px solid #e8e8e0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={bc.image}
                          alt={bc.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute top-2.5 right-2.5">
                          <span
                            className="font-sans text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                            style={{ background: "#D4AF37", color: "#0A2E2E" }}
                          >
                            Included
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <p className="font-sans text-xs font-medium" style={{ color: "#888888" }}>
                          Individual price:{" "}
                          <span className="line-through">Rs. {bc.price.toLocaleString()}</span>
                        </p>
                        <h3 className="font-sans font-bold text-sm leading-snug text-balance" style={{ color: "#1a1a1a" }}>
                          {bc.title}
                        </h3>
                        <p className="font-sans text-xs leading-relaxed" style={{ color: "#666666" }}>
                          {bc.description}
                        </p>
                        <div className="mt-auto pt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock size={11} strokeWidth={2} style={{ color: "#999999" }} />
                            <span className="font-sans text-[11px]" style={{ color: "#999999" }}>{bc.durationHours}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={11} fill="#D4AF37" stroke="#D4AF37" strokeWidth={1.5} />
                            <span className="font-sans text-[11px] font-semibold" style={{ color: "#555555" }}>{bc.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

            {/* Consultancy card — 5th component */}
            <FadeUp delay={360}>
              <div
                className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
                style={{
                  background: "linear-gradient(135deg, #0A2E2E 0%, #1B5E5E 100%)",
                  border: "1.5px solid rgba(212,175,55,0.3)",
                  boxShadow: "0 8px 40px rgba(10,46,46,0.25)",
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#D4AF37" }}>
                      5th Component — Exclusive Service
                    </span>
                  </div>
                  <h3 className="font-sans font-black text-xl md:text-2xl mb-2" style={{ color: "#ffffff" }}>
                    End-to-End SEBI RA Registration Consultancy
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                    From eligibility check to final approval — we handle documentation, filing, query responses, and follow-ups on your behalf. This consultancy costs ₹17,000 when purchased independently — it is fully included in the BSRRA bundle.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      "Eligibility check & strategy call",
                      "SEBI application filing",
                      "Documentation planning & setup",
                      "Query handling & follow-ups",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <CheckCircle2 size={13} strokeWidth={2} style={{ color: "#D4AF37", flexShrink: 0 }} />
                        <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/courses/sebi-ra-consultancy"
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                    style={{ background: "rgba(212,175,55,0.2)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)" }}
                  >
                    View Full Consultancy Details
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </Link>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Standalone price
                  </p>
                  <p className="font-sans font-black text-3xl line-through" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Rs. 17,000
                  </p>
                  <div
                    className="mt-2 px-4 py-2 rounded-lg"
                    style={{ background: "rgba(212,175,55,0.2)", border: "1px solid rgba(212,175,55,0.4)" }}
                  >
                    <p className="font-sans font-black text-base" style={{ color: "#D4AF37" }}>Included in bundle</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Savings strip */}
            <FadeUp delay={420}>
              <div
                className="mt-6 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: "#0A2E2E" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                      If bought separately
                    </p>
                    <p className="font-sans font-black text-xl line-through" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Rs. {(course.originalBundlePrice ?? 38996).toLocaleString()}
                    </p>
                  </div>
                  <div className="hidden sm:block w-px h-10 self-center" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#D4AF37" }}>
                      BSRRA Bundle Price
                    </p>
                    <p className="font-sans font-black text-3xl" style={{ color: "#ffffff" }}>
                      Rs. {course.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div
                  className="px-5 py-3 rounded-xl"
                  style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.35)" }}
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                    You save
                  </p>
                  <p className="font-sans font-black text-2xl" style={{ color: "#D4AF37" }}>
                    Rs. {((course.originalBundlePrice ?? 38996) - course.price).toLocaleString()}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left main column */}
          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* Course Objective */}
            <FadeUp>
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <Target size={20} strokeWidth={2} style={{ color: "#D4AF37" }} />
                  <h2 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight" style={{ color: "#1a1a1a" }}>
                    {isBundle ? "Programme Objective" : "Course Objective"}
                  </h2>
                </div>
                <p
                  className="font-sans text-sm md:text-base leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  {course.objective}
                </p>
              </section>
            </FadeUp>

            {/* What You'll Learn */}
            <FadeUp delay={60}>
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <Award size={20} strokeWidth={2} style={{ color: "#D4AF37" }} />
                  <h2 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight" style={{ color: "#1a1a1a" }}>
                    What You Will Learn
                  </h2>
                </div>
                <div
                  className="rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                  style={{ background: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
                >
                  {course.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#1B5E5E" }}
                      />
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#333333" }}>
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Course Curriculum */}
            <FadeUp delay={120}>
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen size={20} strokeWidth={2} style={{ color: "#D4AF37" }} />
                  <h2 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight" style={{ color: "#1a1a1a" }}>
                    {isBundle ? "Programme Curriculum" : "Course Curriculum"}
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {course.modules.map((module, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl overflow-hidden"
                      style={{ background: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none list-none">
                        <div className="flex items-center gap-4">
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center font-sans font-bold text-xs shrink-0"
                            style={{ background: "#1B5E5E", color: "#ffffff" }}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <p className="font-sans font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                              Module {idx + 1}: {module.title}
                            </p>
                            {module.purpose && (
                              <p className="font-sans text-xs mt-0.5" style={{ color: "#888888" }}>
                                {module.purpose}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          size={16}
                          strokeWidth={2}
                          className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                          style={{ color: "#888888" }}
                        />
                      </summary>

                      <div className="px-5 pb-5">
                        <div
                          className="pt-4 border-t mb-4"
                          style={{ borderColor: "#f0f0f0" }}
                        >
                          <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#999999" }}>
                            Topics Covered
                          </p>
                          <ul className="flex flex-col gap-2">
                            {module.topics.map((topic) => (
                              <li key={topic} className="flex items-start gap-2.5">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: "#D4AF37" }}
                                />
                                <span className="font-sans text-sm" style={{ color: "#555555" }}>
                                  {topic}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {module.outcome && (
                          <div
                            className="flex items-start gap-2.5 px-4 py-3 rounded-lg"
                            style={{ background: "rgba(27,94,94,0.06)" }}
                          >
                            <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: "#1B5E5E" }} />
                            <p className="font-sans text-xs leading-relaxed" style={{ color: "#1B5E5E" }}>
                              <span className="font-semibold">Learning Outcome: </span>
                              {module.outcome}
                            </p>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Practical Activities */}
            {course.practicalActivities && course.practicalActivities.length > 0 && (
              <FadeUp delay={60}>
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <PlayCircle size={20} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    <h2 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight" style={{ color: "#1a1a1a" }}>
                      Practical Activities
                    </h2>
                  </div>
                  <div
                    className="rounded-xl p-6"
                    style={{ background: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.practicalActivities.map((activity) => (
                        <div key={activity} className="flex items-start gap-3">
                          <span
                            className="mt-1 w-2 h-2 rounded-full shrink-0"
                            style={{ background: "#D4AF37" }}
                          />
                          <p className="font-sans text-sm" style={{ color: "#444444" }}>{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </FadeUp>
            )}
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-8">
            {/* Course quick info */}
            <FadeRight delay={100}>
              <div
                className="rounded-xl p-6"
                style={{ background: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
              >
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-5" style={{ color: "#1B5E5E" }}>
                  {isBundle ? "Programme Details" : "Course Details"}
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    { label: "Duration", value: course.duration },
                    { label: "Level", value: course.level },
                    { label: "Format", value: course.format },
                    ...(isBundle
                      ? [
                          { label: "Modules", value: `${course.bundleCourses?.length} Full Modules` },
                          { label: "Consultancy", value: "Included (₹17,000)" },
                        ]
                      : [{ label: "Modules", value: `${course.modules.length} modules` }]),
                    { label: "Students", value: `${course.members} enrolled` },
                    { label: "Rating", value: `${course.rating} / 5.0` },
                  ].map(({ label, value }) => (
                    <li key={label} className="flex items-center justify-between">
                      <span className="font-sans text-xs font-medium uppercase tracking-wider" style={{ color: "#999999" }}>
                        {label}
                      </span>
                      <span className="font-sans text-sm font-semibold" style={{ color: "#333333" }}>
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>

            {/* Sticky enroll CTA (desktop only) */}
            <FadeRight delay={200}>
              <div
                className="hidden lg:block rounded-xl p-6"
                style={{ background: "#0A2E2E", boxShadow: "0 8px 32px rgba(10,46,46,0.25)" }}
              >
                <p className="font-serif text-2xl mb-1" style={{ color: "#D4AF37" }}>Ready to start?</p>
                {!course.comingSoon && (
                  <>
                    <p className="font-sans font-black text-3xl mb-1" style={{ color: "#ffffff" }}>
                      Rs. {course.price.toLocaleString()}
                    </p>
                    <p className="font-sans text-xs mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {isBundle ? "One price · All 4 courses + consultancy" : "One-time payment · Full course access"}
                    </p>
                  </>
                )}
                <a
                  href={`https://wa.me/919999999999?text=Hi%20I%27m%20interested%20in%20the%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.12em] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                  style={{ background: "#D4AF37", color: "#0A2E2E" }}
                >
                  <MessageCircle size={17} strokeWidth={2} />
                  Enroll Now
                </a>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>

      {/* More Courses */}
      {otherCourses.length > 0 && (
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#f7f7f3" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                <div className="flex-1">
                  <SectionHeading
                    align="left"
                    eyebrow="Keep learning"
                    heading={<>Explore <span className="italic" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>More</span> Courses</>}
                  />
                </div>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95 shrink-0"
                  style={{ background: "#1B5E5E", color: "#ffffff" }}
                >
                  View All Courses
                  <ArrowLeft size={14} strokeWidth={2.5} className="rotate-180" />
                </Link>
              </div>

              <div
                className="mb-12 h-px"
                style={{ background: "linear-gradient(90deg, rgba(27,94,94,0.4), rgba(27,94,94,0.08), transparent)" }}
              />
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCourses.map((c, idx) => (
                <FadeUp key={c.id} delay={idx * 110}>
                  <ExploreCourseCard
                    slug={c.slug}
                    title={c.title}
                    image={c.image}
                    gifImage={c.gifImage}
                    level={c.level}
                    durationHours={c.durationHours}
                    rating={c.rating}
                    reviews={c.reviews}
                    price={c.price}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compact CTA before footer */}
      <CompactCTA
        title="Ready to Master"
        subtitle={`${course?.title || "Trading"}?`}
        description="Join hundreds of traders and investors who have transformed their financial knowledge with our expert-led courses and structured learning paths."
        buttonText="View All Courses"
        buttonHref="/courses"
        whatsappText="Get Support"
      />

      <Footer />
    </main>
  )
}
