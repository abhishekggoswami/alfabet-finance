"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle } from "lucide-react"
import CheckoutCard from "@/components/payment/CheckoutCard"

interface EnrollButtonProps {
  courseTitle: string
  basePrice: number
  pdfPrice: number | null
  includes: string[]
  comingSoon?: boolean
}

export default function EnrollButton({ courseTitle, basePrice, pdfPrice, includes, comingSoon = false }: EnrollButtonProps) {
  const [open, setOpen] = useState(false)

  if (comingSoon) {
    return (
      <>
        <button
          disabled
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.12em] transition-all duration-200 opacity-60 cursor-not-allowed mb-3"
          style={{ background: "#1B5E5E", color: "#ffffff" }}
        >
          Coming Soon
        </button>

        {/* Includes list */}
        <div className="mt-5 pt-5 border-t" style={{ borderColor: "#f0f0f0" }}>
          <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#888888" }}>
            This course includes
          </p>
          <ul className="flex flex-col gap-2">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} strokeWidth={2} style={{ color: "#1B5E5E", flexShrink: 0 }} />
                <span className="font-sans text-xs" style={{ color: "#555555" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.12em] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 mb-3"
        style={{ background: "#1B5E5E", color: "#ffffff" }}
      >
        <MessageCircle size={18} strokeWidth={2} />
        Enroll Now
      </button>

      {/* Includes list */}
      <div className="mt-5 pt-5 border-t" style={{ borderColor: "#f0f0f0" }}>
        <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#888888" }}>
          This course includes
        </p>
        <ul className="flex flex-col gap-2">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} strokeWidth={2} style={{ color: "#1B5E5E", flexShrink: 0 }} />
              <span className="font-sans text-xs" style={{ color: "#555555" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <CheckoutCard
          courseTitle={courseTitle}
          basePrice={basePrice}
          pdfPrice={pdfPrice}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
