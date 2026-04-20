"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight, Clock, Users } from "lucide-react"

interface ExploreCourseCardProps {
  slug: string
  title: string
  image: string
  gifImage?: string
  level: string
  durationHours: string
  rating: number
  reviews: number
  price: number | string
}

export default function ExploreCourseCard({
  slug,
  title,
  image,
  gifImage,
  level,
  durationHours,
  rating,
  reviews,
  price,
}: ExploreCourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E5E]"
      style={{
        background: "#ffffff",
        border: "1px solid #e8e8e4",
        textDecoration: "none",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,94,94,0.14), 0 4px 16px rgba(0,0,0,0.06)"
        e.currentTarget.style.borderColor = "rgba(27,94,94,0.25)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"
        e.currentTarget.style.borderColor = "#e8e8e4"
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {/* GIF layer — lazy loaded, plays beneath the JPG */}
        {gifImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={gifImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* JPG layer — fades out on hover, revealing GIF */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-[opacity,transform] duration-700 ease-in-out group-hover:scale-105 ${gifImage ? "group-hover:opacity-0" : ""}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle dark gradient at bottom for readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 50%)" }}
        />
        {/* Level badge */}
        <div className="absolute top-3 left-3">
          <span
            className="font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: "#1B5E5E",
              color: "#ffffff",
            }}
          >
            {level}
          </span>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3">
          <span
            className="inline-flex items-center gap-1 font-sans text-[10px] font-semibold px-2 py-1 rounded"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#1B5E5E",
              backdropFilter: "blur(4px)",
            }}
          >
            <Clock size={9} strokeWidth={2.5} />
            {durationHours}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h3
          className="font-sans font-bold text-sm leading-snug mb-3 line-clamp-2 min-h-[2.5rem]"
          style={{ color: "#1a1a1a" }}
        >
          {title}
        </h3>

        {/* Rating row */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={11}
                fill={s <= Math.floor(rating) ? "#D4AF37" : "none"}
                stroke={s <= Math.floor(rating) ? "#D4AF37" : "#d1d5db"}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="font-sans text-xs font-bold" style={{ color: "#1a1a1a" }}>
            {rating}
          </span>
          <span className="font-sans text-[11px]" style={{ color: "#9ca3af" }}>
            ({reviews} reviews)
          </span>
        </div>

        <div className="flex-1" />

        {/* Footer row */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #f0f0ec" }}
        >
          <div>
            <p className="font-sans text-[11px] uppercase tracking-wider mb-0.5" style={{ color: "#9ca3af" }}>
              Price
            </p>
            <p className="font-sans font-black text-base" style={{ color: "#1B5E5E" }}>
              Rs. {typeof price === "number" ? price.toLocaleString() : price}
            </p>
          </div>
          <div
            className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-2.5"
            style={{ background: "#1B5E5E", color: "#ffffff" }}
          >
            Enroll
            <ArrowRight size={12} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  )
}
