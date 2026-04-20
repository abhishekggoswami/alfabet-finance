"use client"

import { useRef, useEffect, useState } from "react"
import { ArrowRight, BookOpen } from "lucide-react"
import VariableProximity from "./variable-proximity"
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal"
import { CandlestickBackground } from "./candlestick-background"

/* Stock ticker data */
const stockData = [
  { name: "NIFTY 50", price: "22,147.90", change: "+0.82%", up: true },
  { name: "SENSEX", price: "73,088.33", change: "+0.74%", up: true },
  { name: "NIFTY BANK", price: "47,650.10", change: "-0.31%", up: false },
  { name: "GOLD", price: "₹62,450", change: "+1.12%", up: true },
  { name: "HDFC BANK", price: "₹1,642.55", change: "-0.84%", up: false },
  { name: "RELIANCE", price: "₹2,891.40", change: "+0.63%", up: true },
  { name: "INFOSYS", price: "₹1,487.25", change: "+0.29%", up: true },
  { name: "TCS", price: "₹3,904.80", change: "+0.45%", up: true },
]

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: "#0A2E2E" }}
    >
      {/* Glowing candlestick charts background - with pulsing glow animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large animated candlestick overlays */}
        <CandlestickBackground position="top-left" opacity={0.18} scale={1.4} />
        <CandlestickBackground position="bottom-right" opacity={0.15} scale={1.3} />
        
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 300"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Glow filters */}
          <defs>
            <filter id="glowG" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glowR" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Far left cluster - staggered heights */}
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="30" y="90" width="10" height="70" fill="#22c55e" rx="1" />
            <line x1="35" y1="55" x2="35" y2="90" stroke="#22c55e" strokeWidth="2" />
            <line x1="35" y1="160" x2="35" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-2">
            <rect x="55" y="120" width="10" height="55" fill="#ef4444" rx="1" />
            <line x1="60" y1="90" x2="60" y2="120" stroke="#ef4444" strokeWidth="2" />
            <line x1="60" y1="175" x2="60" y2="210" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-3">
            <rect x="80" y="70" width="10" height="85" fill="#22c55e" rx="1" />
            <line x1="85" y1="35" x2="85" y2="70" stroke="#22c55e" strokeWidth="2" />
            <line x1="85" y1="155" x2="85" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-1">
            <rect x="105" y="105" width="10" height="60" fill="#ef4444" rx="1" />
            <line x1="110" y1="75" x2="110" y2="105" stroke="#ef4444" strokeWidth="2" />
            <line x1="110" y1="165" x2="110" y2="200" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="130" y="55" width="10" height="100" fill="#22c55e" rx="1" />
            <line x1="135" y1="20" x2="135" y2="55" stroke="#22c55e" strokeWidth="2" />
            <line x1="135" y1="155" x2="135" y2="210" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-3">
            <rect x="155" y="95" width="10" height="55" fill="#22c55e" rx="1" />
            <line x1="160" y1="65" x2="160" y2="95" stroke="#22c55e" strokeWidth="2" />
            <line x1="160" y1="150" x2="160" y2="185" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-1">
            <rect x="180" y="130" width="10" height="45" fill="#ef4444" rx="1" />
            <line x1="185" y1="100" x2="185" y2="130" stroke="#ef4444" strokeWidth="2" />
            <line x1="185" y1="175" x2="185" y2="205" stroke="#ef4444" strokeWidth="2" />
          </g>
          
          {/* Left-center cluster */}
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="230" y="115" width="10" height="55" fill="#ef4444" rx="1" />
            <line x1="235" y1="85" x2="235" y2="115" stroke="#ef4444" strokeWidth="2" />
            <line x1="235" y1="170" x2="235" y2="205" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="255" y="65" width="10" height="90" fill="#22c55e" rx="1" />
            <line x1="260" y1="30" x2="260" y2="65" stroke="#22c55e" strokeWidth="2" />
            <line x1="260" y1="155" x2="260" y2="200" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="280" y="100" width="10" height="55" fill="#22c55e" rx="1" />
            <line x1="285" y1="70" x2="285" y2="100" stroke="#22c55e" strokeWidth="2" />
            <line x1="285" y1="155" x2="285" y2="185" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="305" y="75" width="10" height="80" fill="#ef4444" rx="1" />
            <line x1="310" y1="40" x2="310" y2="75" stroke="#ef4444" strokeWidth="2" />
            <line x1="310" y1="155" x2="310" y2="200" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="330" y="110" width="10" height="50" fill="#22c55e" rx="1" />
            <line x1="335" y1="80" x2="335" y2="110" stroke="#22c55e" strokeWidth="2" />
            <line x1="335" y1="160" x2="335" y2="190" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-2">
            <rect x="355" y="85" width="10" height="65" fill="#ef4444" rx="1" />
            <line x1="360" y1="55" x2="360" y2="85" stroke="#ef4444" strokeWidth="2" />
            <line x1="360" y1="150" x2="360" y2="185" stroke="#ef4444" strokeWidth="2" />
          </g>
          
          {/* Center cluster */}
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="430" y="85" width="10" height="75" fill="#22c55e" rx="1" />
            <line x1="435" y1="50" x2="435" y2="85" stroke="#22c55e" strokeWidth="2" />
            <line x1="435" y1="160" x2="435" y2="200" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="455" y="125" width="10" height="50" fill="#ef4444" rx="1" />
            <line x1="460" y1="95" x2="460" y2="125" stroke="#ef4444" strokeWidth="2" />
            <line x1="460" y1="175" x2="460" y2="210" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="480" y="70" width="10" height="85" fill="#22c55e" rx="1" />
            <line x1="485" y1="35" x2="485" y2="70" stroke="#22c55e" strokeWidth="2" />
            <line x1="485" y1="155" x2="485" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="505" y="100" width="10" height="55" fill="#22c55e" rx="1" />
            <line x1="510" y1="70" x2="510" y2="100" stroke="#22c55e" strokeWidth="2" />
            <line x1="510" y1="155" x2="510" y2="185" stroke="#22c55e" strokeWidth="2" />
          </g>
          
          {/* Right-center cluster */}
          <g filter="url(#glowR)" className="candle-pulse-1">
            <rect x="920" y="95" width="10" height="65" fill="#ef4444" rx="1" />
            <line x1="925" y1="60" x2="925" y2="95" stroke="#ef4444" strokeWidth="2" />
            <line x1="925" y1="160" x2="925" y2="200" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="945" y="65" width="10" height="90" fill="#22c55e" rx="1" />
            <line x1="950" y1="30" x2="950" y2="65" stroke="#22c55e" strokeWidth="2" />
            <line x1="950" y1="155" x2="950" y2="200" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-3">
            <rect x="970" y="110" width="10" height="50" fill="#22c55e" rx="1" />
            <line x1="975" y1="80" x2="975" y2="110" stroke="#22c55e" strokeWidth="2" />
            <line x1="975" y1="160" x2="975" y2="190" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-1">
            <rect x="995" y="80" width="10" height="70" fill="#ef4444" rx="1" />
            <line x1="1000" y1="45" x2="1000" y2="80" stroke="#ef4444" strokeWidth="2" />
            <line x1="1000" y1="150" x2="1000" y2="195" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="1020" y="120" width="10" height="45" fill="#22c55e" rx="1" />
            <line x1="1025" y1="90" x2="1025" y2="120" stroke="#22c55e" strokeWidth="2" />
            <line x1="1025" y1="165" x2="1025" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="1045" y="90" width="10" height="60" fill="#ef4444" rx="1" />
            <line x1="1050" y1="60" x2="1050" y2="90" stroke="#ef4444" strokeWidth="2" />
            <line x1="1050" y1="150" x2="1050" y2="185" stroke="#ef4444" strokeWidth="2" />
          </g>
          
          {/* Far right cluster */}
          <g filter="url(#glowG)" className="candle-pulse-3">
            <rect x="1150" y="70" width="10" height="85" fill="#22c55e" rx="1" />
            <line x1="1155" y1="35" x2="1155" y2="70" stroke="#22c55e" strokeWidth="2" />
            <line x1="1155" y1="155" x2="1155" y2="200" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-1">
            <rect x="1175" y="115" width="10" height="50" fill="#ef4444" rx="1" />
            <line x1="1180" y1="85" x2="1180" y2="115" stroke="#ef4444" strokeWidth="2" />
            <line x1="1180" y1="165" x2="1180" y2="200" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="1200" y="85" width="10" height="70" fill="#22c55e" rx="1" />
            <line x1="1205" y1="50" x2="1205" y2="85" stroke="#22c55e" strokeWidth="2" />
            <line x1="1205" y1="155" x2="1205" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="1225" y="100" width="10" height="55" fill="#ef4444" rx="1" />
            <line x1="1230" y1="70" x2="1230" y2="100" stroke="#ef4444" strokeWidth="2" />
            <line x1="1230" y1="155" x2="1230" y2="190" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="1250" y="60" width="10" height="95" fill="#22c55e" rx="1" />
            <line x1="1255" y1="25" x2="1255" y2="60" stroke="#22c55e" strokeWidth="2" />
            <line x1="1255" y1="155" x2="1255" y2="205" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-2">
            <rect x="1275" y="105" width="10" height="50" fill="#22c55e" rx="1" />
            <line x1="1280" y1="75" x2="1280" y2="105" stroke="#22c55e" strokeWidth="2" />
            <line x1="1280" y1="155" x2="1280" y2="185" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-3">
            <rect x="1300" y="125" width="10" height="40" fill="#ef4444" rx="1" />
            <line x1="1305" y1="95" x2="1305" y2="125" stroke="#ef4444" strokeWidth="2" />
            <line x1="1305" y1="165" x2="1305" y2="195" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-1">
            <rect x="1325" y="80" width="10" height="70" fill="#22c55e" rx="1" />
            <line x1="1330" y1="45" x2="1330" y2="80" stroke="#22c55e" strokeWidth="2" />
            <line x1="1330" y1="150" x2="1330" y2="195" stroke="#22c55e" strokeWidth="2" />
          </g>
          <g filter="url(#glowR)" className="candle-pulse-2">
            <rect x="1350" y="110" width="10" height="50" fill="#ef4444" rx="1" />
            <line x1="1355" y1="80" x2="1355" y2="110" stroke="#ef4444" strokeWidth="2" />
            <line x1="1355" y1="160" x2="1355" y2="190" stroke="#ef4444" strokeWidth="2" />
          </g>
          <g filter="url(#glowG)" className="candle-pulse-3">
            <rect x="1375" y="90" width="10" height="60" fill="#22c55e" rx="1" />
            <line x1="1380" y1="60" x2="1380" y2="90" stroke="#22c55e" strokeWidth="2" />
            <line x1="1380" y1="150" x2="1380" y2="185" stroke="#22c55e" strokeWidth="2" />
          </g>
        </svg>
        
        {/* CSS for pulsing glow animation */}
        <style jsx>{`
          @keyframes candlePulse1 {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.55; }
          }
          @keyframes candlePulse2 {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          @keyframes candlePulse3 {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.5; }
          }
          .candle-pulse-1 {
            animation: candlePulse1 2.5s ease-in-out infinite;
          }
          .candle-pulse-2 {
            animation: candlePulse2 3s ease-in-out infinite 0.8s;
          }
          .candle-pulse-3 {
            animation: candlePulse3 3.5s ease-in-out infinite 1.5s;
          }
          @keyframes gridMove {
            0%   { transform: translate(0, 0); }
            100% { transform: translate(40px, 40px); }
          }
          .cta-grid-bg {
            background-image:
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: gridMove 6s linear infinite;
            /* Extend beyond bounds so scroll looks seamless */
            width: calc(100% + 80px);
            height: calc(100% + 80px);
            top: -40px;
            left: -40px;
          }
        `}</style>
      </div>

      {/* Main content area - reduced padding */}
      <div className="relative py-10 md:py-14">
        {/* Animated square grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ overflow: "hidden" }}
          aria-hidden="true"
        >
          <div className="cta-grid-bg absolute inset-0" />
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Label */}
          <div
            className="inline-flex items-center gap-3 mb-6 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.6)" }} />
            <span
              className="font-sans text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#D4AF37" }}
            >
              Begin Today
            </span>
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.6)" }} />
          </div>

          {/* Heading */}
          <h2
            className="font-sans font-bold leading-tight text-balance mb-5 transition-all duration-700"
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "150ms",
            }}
          >
            Your Financial Journey{" "}
            <VariableProximity
              label="Starts Here"
              fromFontVariationSettings="'wght' 400, 'opsz' 16"
              toFontVariationSettings="'wght' 900, 'opsz' 28"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
              className="italic"
              style={{
                color: "#D4AF37",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            />
          </h2>

          {/* Subtext */}
          <p
            className="font-sans max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "280ms",
            }}
          >
            Whether you are just starting out or looking to sharpen your edge in the markets,
            our courses and workshops are built to take you further — with clarity, structure,
            and expert guidance at every step.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "420ms",
            }}
          >
            {/* Gold button */}
            <a
              href="/courses"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "#D4AF37",
                color: "#0A2E2E",
                boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
              }}
            >
              <BookOpen size={17} strokeWidth={1.5} />
              <span>Explore Courses</span>
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp glassmorphism button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.18)"
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.55)"
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 28px rgba(37,211,102,0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.2)"
              }}
            >
              {/* WhatsApp SVG icon */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: "600ms",
            }}
          >
            {[
              "SEBI Registered Advisor",
              "13+ Years Experience",
              "2000+ Students Trained",
              "Live Interactive Sessions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#D4AF37" }}
                />
                <span
                  className="font-sans text-[10px] sm:text-xs font-medium uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stock ticker marquee at bottom */}
      <div
        className="relative overflow-hidden py-3"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Animated chart lines behind */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg
            viewBox="0 0 1200 60"
            className="absolute bottom-0 left-0 w-[200%] h-full"
            preserveAspectRatio="none"
            style={{ animation: "tickerSlide 20s linear infinite" }}
          >
            {/* Green uptrend line */}
            <path
              d="M0,45 Q50,40 100,35 T200,30 T300,38 T400,25 T500,32 T600,20 T700,28 T800,22 T900,30 T1000,18 T1100,25 T1200,20"
              fill="none"
              stroke="rgba(34,197,94,0.5)"
              strokeWidth="1.5"
            />
            {/* Red downtrend line */}
            <path
              d="M0,25 Q50,30 100,35 T200,28 T300,40 T400,35 T500,42 T600,38 T700,45 T800,40 T900,48 T1000,42 T1100,50 T1200,45"
              fill="none"
              stroke="rgba(239,68,68,0.4)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Ticker content */}
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "tickerScroll 30s linear infinite" }}
        >
          {[...stockData, ...stockData].map((stock, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-6"
            >
              <span
                className="font-sans text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {stock.name}
              </span>
              <span
                className="font-sans text-xs font-bold"
                style={{ color: "#ffffff" }}
              >
                {stock.price}
              </span>
              <span
                className="font-sans text-xs font-medium"
                style={{ color: stock.up ? "#22c55e" : "#ef4444" }}
              >
                {stock.change}
              </span>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes tickerScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes tickerSlide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Separator */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }}
          />
        </div>
      </div>
    </section>
  )
}
