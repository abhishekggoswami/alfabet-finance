"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, Copy, Check, Shield, Zap, Star } from "lucide-react"
import UPIButtons from "./UPIButtons"
import PaymentForm from "./PaymentForm"

const UPI_ID = "68110101@ubin"
const MERCHANT_NAME = "Alfabet%20Finance"
const QR_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j6X3iTJJTV7n4EA9jJhlMOB2oXjcuX.png"

interface CheckoutCardProps {
  courseTitle: string
  basePrice: number
  pdfPrice: number | null
  onClose: () => void
}

const STEPS = ["Payment", "Upload Proof", "Access Course"]

export default function CheckoutCard({
  courseTitle,
  basePrice,
  pdfPrice,
  onClose,
}: CheckoutCardProps) {
  const [addPdf, setAddPdf] = useState(false)
  const [copied, setCopied] = useState(false)
  const [step, setStep] = useState<0 | 1>(0)
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const totalAmount = basePrice + (addPdf && pdfPrice ? pdfPrice : 0)
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=${MERCHANT_NAME}&am=${totalAmount}&cu=INR&tn=${encodeURIComponent(courseTitle)}`

  if (!mounted) return null

  function copyUPI() {
    navigator.clipboard.writeText(UPI_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function handleFormSubmit() {
    setSubmitted(true)
  }

  return createPortal(
    <>
    {/* Backdrop - blocks EVERYTHING including navbar */}
    <div
      className="fixed inset-0"
      style={{ zIndex: 999999, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    />
    {/* Scroll container - sits above backdrop and navbar */}
    <div
      className="fixed inset-0 overflow-y-auto"
      style={{ zIndex: 1000000 }}
    >
      <div
        className="min-h-full flex items-start justify-center py-12 px-4"
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
      {/* Modal — wide horizontal on md+, single column on mobile */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          maxWidth: step === 1 ? "640px" : "900px",
          background: "#ffffff",
          boxShadow: "0 40px 100px rgba(0,0,0,0.32)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-100"
          aria-label="Close"
        >
          <X size={18} strokeWidth={2} style={{ color: "#555555" }} />
        </button>

        {/* Step indicator — spans full width */}
        <div className="px-7 pt-6 pb-5 border-b" style={{ borderColor: "#f0f0f0" }}>
          <div className="flex items-center gap-0 mb-4">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-0 flex-1 min-w-0">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-sans font-bold text-xs transition-all duration-300"
                    style={{
                      background: i === 0 ? "#1B5E5E" : i === 1 && step === 1 ? "#1B5E5E" : i === 2 && submitted ? "#1B5E5E" : "#e5e5e5",
                      color: i === 0 || (i === 1 && step === 1) || (i === 2 && submitted) ? "#ffffff" : "#999999",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    className="font-sans text-[10px] font-medium whitespace-nowrap"
                    style={{ color: i === 0 || (i === 1 && step === 1) ? "#1B5E5E" : "#aaaaaa" }}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-px mx-2 mt-[-10px]" style={{ background: "#e5e5e5" }} />
                )}
              </div>
            ))}
          </div>

          {/* Course title + price + PDF toggle */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="font-sans font-black text-lg leading-snug text-balance pr-8 flex-1 min-w-0" style={{ color: "#1a1a1a" }}>
              {courseTitle}
            </p>
            <div className="flex items-center gap-4 shrink-0 flex-wrap justify-end">
              {pdfPrice && (
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <div
                    className="relative w-9 h-5 rounded-full transition-all duration-200 cursor-pointer shrink-0"
                    style={{ background: addPdf ? "#1B5E5E" : "#d0d0d0" }}
                    onClick={() => setAddPdf((v) => !v)}
                  >
                    <div
                      className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200"
                      style={{ left: addPdf ? "calc(100% - 18px)" : "2px" }}
                    />
                  </div>
                  <span className="font-sans text-xs font-medium" style={{ color: "#555555" }}>
                    Add PDF (+₹{pdfPrice})
                  </span>
                </label>
              )}
              <div className="flex items-end gap-1.5">
                <span className="font-sans font-black text-2xl" style={{ color: "#1B5E5E" }}>
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        {step === 0 ? (
          /* ─── PAYMENT STEP: two-column on desktop ─── */
          <div className="flex flex-col md:flex-row">

            {/* LEFT — QR + UPI ID */}
            <div
              className="md:w-[360px] shrink-0 flex flex-col items-center gap-6 px-8 py-8 border-b md:border-b-0 md:border-r"
              style={{ borderColor: "#f0f0f0", background: "#fafafa" }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#888888" }}>
                Scan QR with any UPI app
              </p>
              <div
                className="rounded-xl overflow-hidden border p-2"
                style={{ borderColor: "#e0e0e0", background: "#ffffff" }}
              >
                <Image
                  src={QR_IMAGE}
                  alt="UPI QR Code"
                  width={260}
                  height={260}
                  className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-contain"
                  unoptimized
                />
              </div>
              <p className="font-sans text-xs text-center" style={{ color: "#aaaaaa" }}>
                Scan using PhonePe, Google Pay, Paytm or BHIM
              </p>

              {/* UPI ID copy */}
              <div
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl border"
                style={{ borderColor: "#e5e5e5", background: "#ffffff" }}
              >
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#aaaaaa" }}>UPI ID</p>
                  <p className="font-mono text-sm font-semibold" style={{ color: "#1a1a1a" }}>{UPI_ID}</p>
                </div>
                <button
                  onClick={copyUPI}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ background: copied ? "rgba(27,94,94,0.1)" : "#f0f0f0", color: copied ? "#1B5E5E" : "#555555" }}
                >
                  {copied ? <Check size={13} strokeWidth={2.5} /> : <Copy size={13} strokeWidth={2} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 flex-wrap pt-1">
                {[
                  { icon: Shield, label: "Secure Payment" },
                  { icon: Zap, label: "Fast Support" },
                  { icon: Star, label: "Trusted" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1">
                    <Icon size={12} strokeWidth={2} style={{ color: "#1B5E5E" }} />
                    <span className="font-sans text-[10px]" style={{ color: "#888888" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — UPI apps + instructions + CTA */}
            <div className="flex-1 flex flex-col gap-6 px-8 py-8">
              {/* UPI app buttons */}
              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "#888888" }}>
                  Pay directly via app
                </p>
                <UPIButtons upiLink={upiLink} />
                <a
                  href={upiLink}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.1em] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                  style={{ background: "#1B5E5E", color: "#ffffff" }}
                >
                  Pay ₹{totalAmount.toLocaleString("en-IN")} with UPI
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ background: "#eeeeee" }} />
                <span className="font-sans text-xs" style={{ color: "#bbbbbb" }}>After paying</span>
                <div className="flex-1 h-px" style={{ background: "#eeeeee" }} />
              </div>

              {/* How it works */}
              <div
                className="rounded-xl px-4 py-4 flex-1"
                style={{ background: "rgba(27,94,94,0.04)", border: "1px solid rgba(27,94,94,0.1)" }}
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#1B5E5E" }}>
                  How it works
                </p>
                <ol className="flex flex-col gap-2.5">
                  {[
                    "Complete the UPI payment using QR or app button above.",
                    "Take a screenshot of the payment success screen.",
                    "Click 'I have paid' and send your proof on WhatsApp.",
                    "Our team verifies manually and emails you access within 12 hours.",
                  ].map((instruction, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold text-[10px] shrink-0 mt-0.5"
                        style={{ background: "#1B5E5E", color: "#ffffff" }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-sans text-xs leading-relaxed" style={{ color: "#444444" }}>
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
                <div
                  className="mt-3 pt-3 border-t flex items-start gap-2"
                  style={{ borderColor: "rgba(27,94,94,0.12)" }}
                >
                  <Shield size={13} strokeWidth={2} style={{ color: "#1B5E5E", flexShrink: 0, marginTop: 1 }} />
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#1B5E5E" }}>
                    <strong>Your enrollment is safe.</strong> Payment confirmation is sent to your email after our team verifies it — within 12 hours.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setStep(1)}
                className="w-full py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.1em] transition-all duration-200 border-2 hover:bg-[#1B5E5E] hover:text-white hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                style={{ borderColor: "#1B5E5E", color: "#1B5E5E", background: "transparent" }}
              >
                I have paid — Upload Proof
              </button>
            </div>
          </div>
        ) : (
          /* ─── UPLOAD PROOF STEP: single column ─── */
          <div className="px-7 py-8 flex flex-col gap-6">
            <button
              onClick={() => setStep(0)}
              className="self-start font-sans text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:text-[#1B5E5E] hover:-translate-x-0.5"
              style={{ color: "#888888" }}
            >
              ← Back to Payment
            </button>
            <PaymentForm courseTitle={courseTitle} amount={totalAmount} onSubmit={handleFormSubmit} submitted={submitted} />
          </div>
        )}
      </div>
      </div>
    </div>
    </>,
    document.body
  )
}
