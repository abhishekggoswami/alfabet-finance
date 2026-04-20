"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/rqq7i1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E5E] focus-visible:ring-offset-2 group"
      style={{
        width: 56,
        height: 56,
        background: "linear-gradient(135deg, #1B5E5E 0%, #0F3F3F 100%)",
        boxShadow: "0 4px 20px rgba(27,94,94,0.35), 0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* WhatsApp icon */}
      <MessageCircle
        size={26}
        strokeWidth={2}
        className="text-white transition-transform duration-300 group-hover:scale-110"
      />

      {/* Subtle ring animation */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ 
          background: "transparent",
          border: "2px solid #D4AF37",
          animationDuration: "3s" 
        }}
        aria-hidden="true"
      />
      
      {/* Gold accent border on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          border: "2px solid rgba(212,175,55,0.5)",
        }}
        aria-hidden="true"
      />
    </a>
  )
}
