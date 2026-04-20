"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import VariableProximity from "./variable-proximity"
import { PhoneLogoLoader } from "./phone-logo-loader"

const appFeatures = [
  "Access all courses on the go",
  "Live workshop notifications",
  "Track your learning progress",
  "Exclusive mobile-only content",
]

export default function AppDownloadSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [visiblePopups, setVisiblePopups] = useState(0)
  return (
    <section
      className="relative py-10 md:py-16 overflow-hidden"
      style={{
        background: "#f0f7f7",
      }}
    >
      {/* Hollow-T grid — full section coverage, T-shaped visibility mask with soft blurry transitions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Full-section grid base */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(27,94,94,0.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,94,94,0.11) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
            animation: "tGridDrift 18s linear infinite",
            /* T-shape mask:
               - top horizontal band: full width, top ~35% of height
               - vertical stem: center ~34% width, full height
               Both fade in/out with very long gradients for blurry soft transitions */
            maskImage: `
              linear-gradient(
                to bottom,
                transparent        0%,
                rgba(0,0,0,0.2)    4%,
                rgba(0,0,0,0.85)   12%,
                rgba(0,0,0,0.85)   32%,
                transparent        52%
              ),
              linear-gradient(
                to right,
                transparent        0%,
                transparent        31%,
                rgba(0,0,0,0.9)    38%,
                rgba(0,0,0,0.9)    62%,
                transparent        69%,
                transparent        100%
              )
            `,
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent        0%,
                rgba(0,0,0,0.2)    4%,
                rgba(0,0,0,0.85)   12%,
                rgba(0,0,0,0.85)   32%,
                transparent        52%
              ),
              linear-gradient(
                to right,
                transparent        0%,
                transparent        31%,
                rgba(0,0,0,0.9)    38%,
                rgba(0,0,0,0.9)    62%,
                transparent        69%,
                transparent        100%
              )
            `,
            maskComposite: "add",
            WebkitMaskComposite: "source-over",
            filter: "blur(0.4px)",
          }}
        />

        <style jsx>{`
          @keyframes tGridDrift {
            from { background-position: 0 0; }
            to   { background-position: 36px 36px; }
          }
        `}</style>
      </div>
      {/* Subtle decorative radial glows */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,94,94,0.05) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={containerRef} className="text-center mb-12 md:mb-16">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#D4AF37]/50" />
            <span
              className="font-sans text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#D4AF37" }}
            >
              Learn Anywhere
            </span>
            <div className="h-px w-8 bg-[#D4AF37]/50" />
          </div>

          {/* Title - matching other section headings */}
          <h2
            className="font-sans font-bold leading-tight mb-4"
            style={{
              color: "#0D3535",
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
            }}
          >
            Get the{" "}
            <VariableProximity
              label="Alfabet Finance"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 22"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="italic"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "#D4AF37",
              }}
            />{" "}
            App
          </h2>

          <p
            className="font-sans text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "#4a6b6b" }}
          >
            Take your financial education with you. Download our app and learn anytime, anywhere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Outer wrapper is relative and NOT overflow-hidden so popups escape */}
            <div
              className="relative"
              style={{ width: "240px", height: "480px" }}
            >
              {/* Phone frame */}
              <div
                className="absolute inset-0 rounded-[3rem] overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #111 0%, #2a2a2a 100%)",
                  boxShadow: "0 30px 90px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                  padding: "12px",
                }}
              >
                {/* Screen */}
                <div
                  className="w-full h-full rounded-[2.4rem] overflow-hidden relative"
                  style={{ background: "linear-gradient(135deg, #1B5E5E 0%, #0D3B3B 100%)" }}
                >
                  <PhoneLogoLoader onPopupChange={setVisiblePopups} />
                </div>
              </div>

              {/* Popup 1 - Inside phone at top: 78% Complete */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  top: "20px",
                  left: "12px",
                  right: "12px",
                  zIndex: 40,
                  opacity: visiblePopups >= 1 ? 1 : 0,
                  transform: visiblePopups >= 1 ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
                }}
              >
                <div className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg w-full" style={{ background: "linear-gradient(135deg, #0D3B3B, #1B5E5E)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}>
                    <span className="text-white text-xs font-bold">78%</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">78% Complete</p>
                    <p className="text-white/60 text-[10px]">Technical Analysis</p>
                  </div>
                </div>
              </div>

              {/* Popup 2 - Inside phone at top: Top Learner */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  top: "58px",
                  left: "12px",
                  right: "12px",
                  zIndex: 40,
                  opacity: visiblePopups >= 2 ? 1 : 0,
                  transform: visiblePopups >= 2 ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
                }}
              >
                <div className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg w-full" style={{ background: "linear-gradient(135deg, #0D3B3B, #1B5E5E)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}>
                    ★
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">Top Learner</p>
                    <p className="text-white/60 text-[10px]">This week</p>
                  </div>
                </div>
              </div>

              {/* Popup 3 - Inside phone at top: Live Now */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  top: "96px",
                  left: "12px",
                  right: "12px",
                  zIndex: 40,
                  opacity: visiblePopups >= 3 ? 1 : 0,
                  transform: visiblePopups >= 3 ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
                }}
              >
                <div className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg w-full" style={{ background: "linear-gradient(135deg, #0D3B3B, #1B5E5E)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "rgba(239, 68, 68, 0.8)" }}>
                    📹
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">Live Now</p>
                    <p className="text-white/60 text-[10px]">Options Workshop</p>
                  </div>
                </div>
              </div>

              {/* Popup 4 - Inside phone at top: Course Progress */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  top: "134px",
                  left: "12px",
                  right: "12px",
                  zIndex: 40,
                  opacity: visiblePopups >= 4 ? 1 : 0,
                  transform: visiblePopups >= 4 ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
                }}
              >
                <div className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg w-full" style={{ background: "linear-gradient(135deg, #0D3B3B, #1B5E5E)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">Achievement!</p>
                    <p className="text-white/60 text-[10px]">Course milestone reached</p>
                  </div>
                </div>
              </div>

              {/* Popup 5 - Inside phone at top: New Message */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  top: "172px",
                  left: "12px",
                  right: "12px",
                  zIndex: 40,
                  opacity: visiblePopups >= 5 ? 1 : 0,
                  transform: visiblePopups >= 5 ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
                }}
              >
                <div className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg w-full" style={{ background: "linear-gradient(135deg, #0D3B3B, #1B5E5E)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "rgba(52, 211, 153, 0.8)" }}>
                    💬
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">New Message</p>
                    <p className="text-white/60 text-[10px]">From your mentor</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Features list */}
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(27,94,94,0.1)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-sans text-base" style={{ color: "#444444" }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store */}
              <Link
                href="https://apps.apple.com/in/app/myinstitute/id1472483563"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "#1a1a1a",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-white/70 text-[10px] leading-tight">Download on the</p>
                  <p className="text-white font-semibold text-lg leading-tight">App Store</p>
                </div>
              </Link>

              {/* Play Store */}
              <Link
                href="https://play.google.com/store/apps/details?id=co.loki.mllvh&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "#1a1a1a",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4"/>
                  <path d="M17.556 8.248L14.94 10.06 3.61 1.814l13.946 6.434z" fill="#EA4335"/>
                  <path d="M3.609 22.186L14.94 13.94l2.616 1.812L3.61 22.186z" fill="#34A853"/>
                  <path d="M21.485 12l-3.929 2.248-2.616-2.248 2.616-2.248L21.485 12z" fill="#FBBC05"/>
                </svg>
                <div>
                  <p className="text-white/70 text-[10px] leading-tight">Get it on</p>
                  <p className="text-white font-semibold text-lg leading-tight">Google Play</p>
                </div>
              </Link>
            </div>

            {/* Rating badge */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={star <= 4 ? "#D4AF37" : "none"}
                    stroke="#D4AF37"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#4a6b6b" }}>
                <span className="font-semibold" style={{ color: "#0D3535" }}>4.8</span> rating on app stores
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 mb-6 flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: "rgba(27,94,94,0.15)" }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1B5E5E" }}>Join our Community</p>
              <div className="flex-1 h-px" style={{ background: "rgba(27,94,94,0.15)" }} />
            </div>

            {/* Community buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* WhatsApp */}
              <Link
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group hover:scale-[1.02]"
                style={{
                  background: "rgba(37,211,102,0.08)",
                  border: "1px solid rgba(37,211,102,0.25)",
                }}
              >
                {/* WhatsApp icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(37,211,102,0.15)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs leading-tight" style={{ color: "#25D366", fontWeight: 600 }}>WhatsApp</p>
                  <p className="text-sm font-bold leading-tight" style={{ color: "#0D3535" }}>Join Community</p>
                </div>
                <svg className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>

              {/* Telegram */}
              <Link
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group hover:scale-[1.02]"
                style={{
                  background: "rgba(0,136,204,0.07)",
                  border: "1px solid rgba(0,136,204,0.22)",
                }}
              >
                {/* Telegram icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0,136,204,0.13)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0088CC">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs leading-tight" style={{ color: "#0088CC", fontWeight: 600 }}>Telegram</p>
                  <p className="text-sm font-bold leading-tight" style={{ color: "#0D3535" }}>Join Channel</p>
                </div>
                <svg className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B5E5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
