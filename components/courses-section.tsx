"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, BookOpen, Users, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import VariableProximity from "@/components/variable-proximity"
import { useScrollReveal, revealCardStyle } from "@/hooks/use-scroll-reveal"

type CourseItem = {
  title: string
  slug: string
  image: string
  gifImage?: string
  rating: number
  reviews: number
  duration: string
  modules: number
  members: string
}

const courses: CourseItem[] = [
  {
    title: "Technical Analysis for Traders and Investors",
    slug: "technical-analysis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-fpSle6BxRJycx6dBI8n3w2q2avSG4s.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-UrTYuIVSS88p05s3F83bd92x2qiifu.gif",
    rating: 4.8,
    reviews: 427,
    duration: "30-40 Hrs",
    modules: 12,
    members: "420+",
  },
  {
    title: "Be a SEBI Registered Research Analyst (BSRRA Program)",
    slug: "sebi-research-analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Green%20and%20White%20Modern%20Savings%20YouTube%20Thumbnail-0OMvGK58bHNPn33scGUn5Ms74Ye7Yu.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Green%20and%20White%20Modern%20Savings%20YouTube%20Thumbnail%20%281%29-f8vdGHJC1dq4oYmNhSN0PVxVCT7qUZ.gif",
    rating: 4.9,
    reviews: 98,
    duration: "5 Months",
    modules: 9,
    members: "90+",
  },
  {
    title: "Options Pro – Mastering Options Trading",
    slug: "options-pro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DvYIG4L277VFgRrtUwW8wHZnhEtbos.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DmJP9v8oX3FxOAAbaDWPUlbS2a0c3r.gif",
    rating: 4.8,
    reviews: 356,
    duration: "30-40 Hrs",
    modules: 14,
    members: "350+",
  },
  {
    title: "Fundamental Analysis for Investors",
    slug: "fundamental-analysis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-pJhTdfPeCKh7TXmoxWIHg32lb7o5GE.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-yt2FEMY0TBDpbTmG6zD0VXOEkRcFkF.gif",
    rating: 4.7,
    reviews: 241,
    duration: "90-100 Hrs",
    modules: 9,
    members: "230+",
  },
  {
    title: "NISM Series XV – Research Analyst Certification",
    slug: "nism-research-analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Yellow%20and%20Red%20Bold%20Success%20YouTube%20Thumbnail-umtHxJ7JAVVAD380oXDz94Q6rzHP8U.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Yellow%20and%20Red%20Bold%20Success%20YouTube%20Thumbnail-umtHxJ7JAVVAD380oXDz94Q6rzHP8U.jpg",
    rating: 4.8,
    reviews: 74,
    duration: "60 Hrs",
    modules: 15,
    members: "70+",
  },
  {
    title: "Pro Mutual Fund Investor",
    slug: "pro-mutual-fund-investor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Yellow%20Modern%20Make%20Money%20YouTube%20Thumbnail-p6ObIWKhHJt6lv4ft1P84kRAd3tZ4V.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Yellow%20Modern%20Make%20Money%20YouTube%20Thumbnail%20%281%29-aCUZNsmHZzN6Pyeb0bXsQQ97hf00GT.gif",
    rating: 4.7,
    reviews: 189,
    duration: "12 Hrs",
    modules: 6,
    members: "180+",
  },
  {
    title: "Basics of Stock Market",
    slug: "basics-of-stock-market",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Creative%20What%20is%20Hustle%20Culture%20YouTube%20Thumbnail-l26PtppJj62kMc2azBw3RLASdYrtrb.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Creative%20What%20is%20Hustle%20Culture%20YouTube%20Thumbnail-YS7pEne1sEbIj6KM7sw1FYjf3e0TwZ.gif",
    rating: 4.8,
    reviews: 312,
    duration: "15 Hrs",
    modules: 8,
    members: "300+",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= Math.floor(rating) ? "#D4AF37" : star <= rating + 0.5 ? "#D4AF37" : "none"}
          stroke={star <= rating + 0.5 ? "#D4AF37" : "#ccc"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export default function CoursesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(courses.length / cardsPerPage)

  const visibleCourses = courses.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  const goNext = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const goPrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 md:py-28" style={{ background: "#f0f7f7" }}>
      <div ref={containerRef} className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Learn From the Best"
            heading={<>Professional Courses with{" "}<VariableProximity
              label="World Class"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
            />{" "}Mentors</>}
            subheading="Unlock your potential with world-class courses led by a renowned mentor. Learn from the best in the industry and gain practical skills for real-world success."
          />
        </div>

        {/* Cards Grid with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 sm:-left-5 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-xl hover:brightness-110 active:scale-95 cursor-pointer"
            style={{
              background: "#1B5E5E",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(27,94,94,0.35)",
            }}
            aria-label="Previous courses"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 sm:-right-5 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-xl hover:brightness-110 active:scale-95 cursor-pointer"
            style={{
              background: "#1B5E5E",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(27,94,94,0.35)",
            }}
            aria-label="Next courses"
          >
            <ChevronRight size={22} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-12 sm:px-0">
            {visibleCourses.map((course, index) => (
              <Link
                key={`${currentPage}-${index}`}
                href={`/courses/${course.slug}`}
                className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 2px 12px rgba(10,46,46,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                  textDecoration: "none",
                  ...revealCardStyle(isVisible, 100 + index * 100),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 48px rgba(10,46,46,0.14), 0 4px 16px rgba(0,0,0,0.08)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(10,46,46,0.06), 0 1px 4px rgba(0,0,0,0.04)"
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
                  {/* JPG layer — sits on top, fades out on hover */}
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className={`object-cover transition-[opacity,transform] duration-700 ease-in-out group-hover:scale-105 ${course.gifImage ? "group-hover:opacity-0" : ""}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-5 pt-5 pb-5">
                  {/* Title */}
                  <h3
                    className="font-sans font-bold text-base leading-snug mb-2 line-clamp-2 min-h-[2.75rem]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {course.title}
                  </h3>

                  {/* Rating Row */}
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={course.rating} />
                    <span
                      className="font-sans font-semibold text-xs"
                      style={{ color: "#1a1a1a" }}
                    >
                      {course.rating}
                    </span>
                    <span className="font-sans text-xs" style={{ color: "#999999" }}>
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} strokeWidth={2} style={{ color: "#888888" }} />
                      <span
                        className="font-sans text-xs"
                        style={{ color: "#777777" }}
                      >
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={13} strokeWidth={2} style={{ color: "#888888" }} />
                      <span
                        className="font-sans text-xs"
                        style={{ color: "#777777" }}
                      >
                        {course.modules} Modules
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={13} strokeWidth={2} style={{ color: "#888888" }} />
                      <span
                        className="font-sans text-xs"
                        style={{ color: "#777777" }}
                      >
                        {course.members} Members
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* View Course Button */}
                  <div
                    className="w-full py-3 rounded-lg font-sans font-medium text-sm tracking-wide text-center transition-all duration-300 border group-hover:bg-[#0F4040] group-hover:border-[#0F4040] group-hover:shadow-md"
                    style={{
                      background: "#1B5E5E",
                      color: "#ffffff",
                      borderColor: "#1B5E5E",
                    }}
                  >
                    View Course
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="transition-all duration-300 rounded-full cursor-pointer hover:opacity-80"
              style={{
                width: currentPage === i ? "32px" : "10px",
                height: "10px",
                background: currentPage === i ? "#1B5E5E" : "#c4c4c4",
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/courses"
            className="inline-block font-sans font-bold text-sm px-10 py-3 rounded transition-all duration-200 uppercase tracking-[0.15em] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            style={{ background: "#1B5E5E", color: "#ffffff" }}
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
