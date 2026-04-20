"use client"

import { useState, useRef } from "react"
import { Upload, CheckCircle2, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "919999999999" // Replace with actual Alfabet Finance WhatsApp

interface PaymentFormProps {
  courseTitle: string
  amount: number
  onSubmit: () => void
  submitted: boolean
}

export default function PaymentForm({ courseTitle, amount, onSubmit, submitted }: PaymentFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const msg = [
      `*Payment Proof – Alfabet Finance*`,
      ``,
      `*Course:* ${courseTitle}`,
      `*Amount Paid:* ₹${amount.toLocaleString("en-IN")}`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Screenshot:* ${fileName ?? "Will attach separately"}`,
      ``,
      `Please verify and confirm my enrollment. Thank you!`,
    ].join("\n")

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
    onSubmit()
  }

  const inputClass =
    "w-full font-sans text-sm px-4 py-3 rounded-xl border outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1B5E5E]/20 focus:border-[#1B5E5E]"
  const inputStyle = { borderColor: "#e0e0e0", color: "#1a1a1a", background: "#fafafa" }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 size={52} strokeWidth={1.5} style={{ color: "#1B5E5E" }} />
        <p className="font-sans font-black text-xl" style={{ color: "#1a1a1a" }}>
          Proof Sent on WhatsApp!
        </p>
        <p className="font-sans text-sm leading-relaxed max-w-sm" style={{ color: "#555555" }}>
          Your payment details have been sent to the Alfabet Finance team on WhatsApp. Our team will manually verify your payment and send you course access confirmation <strong>to your email within 12 hours.</strong>
        </p>
        <div
          className="mt-2 px-5 py-4 rounded-xl text-left w-full"
          style={{ background: "rgba(27,94,94,0.06)", border: "1px solid rgba(27,94,94,0.14)" }}
        >
          <p className="font-sans text-xs leading-relaxed" style={{ color: "#1B5E5E" }}>
            If you don&apos;t receive a confirmation email within 12 hours, please reach out to us directly on WhatsApp and we&apos;ll sort it out immediately.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div
        className="rounded-xl px-4 py-3 mb-1"
        style={{ background: "rgba(27,94,94,0.06)", border: "1px solid rgba(27,94,94,0.12)" }}
      >
        <p className="font-sans text-xs leading-relaxed" style={{ color: "#1B5E5E" }}>
          Fill in your details below. Clicking <strong>"Send on WhatsApp"</strong> will open WhatsApp with your payment proof pre-filled and send it to the Alfabet Finance team for verification.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#555555" }}>Full Name *</label>
          <input name="name" required placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} className={inputClass} style={inputStyle} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#555555" }}>Email *</label>
          <input name="email" type="email" required placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#555555" }}>Phone *</label>
        <input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} style={inputStyle} />
      </div>

      {/* File upload */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "#555555" }}>
          Payment Screenshot <span className="normal-case font-normal">(optional – attach in WhatsApp)</span>
        </label>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed transition-all duration-200 hover:border-[#1B5E5E] hover:bg-[rgba(27,94,94,0.04)] hover:scale-[1.01]"
          style={{ borderColor: fileName ? "#1B5E5E" : "#d0d0d0", background: fileName ? "rgba(27,94,94,0.04)" : "#fafafa" }}
        >
          <Upload size={18} strokeWidth={2} style={{ color: fileName ? "#1B5E5E" : "#aaaaaa", flexShrink: 0 }} />
          <span className="font-sans text-sm" style={{ color: fileName ? "#1B5E5E" : "#aaaaaa" }}>
            {fileName ?? "Click to select screenshot (optional)"}
          </span>
        </button>
        <input
          ref={fileRef} name="screenshot" type="file" accept="image/*,.pdf"
          className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.12em] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 mt-1"
        style={{ background: "#25D366", color: "#ffffff" }}
      >
        <MessageCircle size={18} strokeWidth={2} />
        Send on WhatsApp
      </button>
    </form>
  )
}
