"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const WHATSAPP_LINK = "https://wa.link/rqq7i1"

export default function QuickConnectPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [interest, setInterest] = useState("")

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("quickConnectDismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem("quickConnectDismissed", "true")
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = "New Inquiry from Alfabet Finance"
    const body = `
Hello,

I'm interested in learning more about Alfabet Finance courses.

*User Details:*
Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Interest: ${interest || "General inquiry"}

Please contact me at your earliest convenience.

Thank you!
    `.trim()

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    handleDismiss()
  }

  const handleWhatsAppSubmit = () => {
    const message = [
      `*Quick Connect - Alfabet Finance*`,
      ``,
      `Hi! I'm interested in learning more about your finance courses.`,
      ``,
      `*Name:* ${name || "Not provided"}`,
      `*Interest:* ${interest || "General inquiry"}`,
      ``,
      `Please help me get started!`,
    ].join("\n")

    window.open(WHATSAPP_LINK, "_blank")
    handleDismiss()
  }

  if (isDismissed || !isVisible) return null

  return (
    <div
      className="fixed bottom-24 right-4 z-[45] w-[75vw] sm:w-[320px] max-w-[calc(100vw-32px)] animate-in slide-in-from-right-full duration-500"
      style={{
        boxShadow: "0 20px 60px rgba(0,0,0,0.2), 0 8px 24px rgba(27,94,94,0.15)",
      }}
    >
      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "#ffffff", border: "1px solid rgba(27,94,94,0.1)", borderRadius: "16px" }}
      >
        {/* Header */}
        <div
          className="relative px-4 py-4 sm:px-5 sm:py-4"
          style={{ background: "linear-gradient(135deg, #1B5E5E 0%, #0F3F3F 100%)" }}
        >
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1 rounded-full transition-all duration-200 hover:bg-white/20 sm:top-3 sm:right-3"
            aria-label="Close popup"
          >
            <X size={16} style={{ color: "rgba(255,255,255,0.8)" }} className="sm:w-4 sm:h-4" />
          </button>
          
          <p
            className="font-serif italic text-xs sm:text-sm mb-0.5"
            style={{ color: "#D4AF37" }}
          >
            Quick Connect
          </p>
          <h3
            className="font-sans font-bold text-sm sm:text-base pr-6"
            style={{ color: "#ffffff" }}
          >
            Free Counselling
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleEmailSubmit} className="p-4 sm:p-5">
          <p
            className="font-sans text-xs sm:text-sm mb-4 leading-snug"
            style={{ color: "#666666" }}
          >
            Share your details and we'll reach out to help you!
          </p>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-4 sm:mb-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full font-sans text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1B5E5E]/20 focus:border-[#1B5E5E]"
              style={{ borderColor: "#e5e5e5", color: "#1a1a1a", background: "#fafafa" }}
            />
            
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full font-sans text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1B5E5E]/20 focus:border-[#1B5E5E]"
              style={{ borderColor: "#e5e5e5", color: "#1a1a1a", background: "#fafafa" }}
            />
            
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full font-sans text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-lg border outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1B5E5E]/20 focus:border-[#1B5E5E] appearance-none cursor-pointer"
              style={{ 
                borderColor: "#e5e5e5", 
                color: interest ? "#1a1a1a" : "#999999", 
                background: "#fafafa url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\") no-repeat right 10px center"
              }}
            >
              <option value="">Select interest</option>
              <option value="Stock Market Courses">Stock Market</option>
              <option value="Options Trading">Options Trading</option>
              <option value="Mutual Funds">Mutual Funds</option>
              <option value="Technical Analysis">Technical Analysis</option>
              <option value="Workshops">Workshops</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-105"
              style={{ background: "#1B5E5E", color: "#ffffff" }}
            >
              Send Inquiry via Email
            </button>
            
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full py-2.5 sm:py-3 rounded-lg font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-105 border"
              style={{ background: "#ffffff", color: "#1B5E5E", borderColor: "#1B5E5E" }}
            >
              Or Connect on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
