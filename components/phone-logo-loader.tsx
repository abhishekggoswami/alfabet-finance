'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function PhoneLogoLoader({ onPopupChange }: { onPopupChange?: (count: number) => void }) {
  const [stage, setStage] = useState<'white' | 'logo' | 'fade' | 'content'>('white')
  const [visiblePopups, setVisiblePopups] = useState<number>(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const timeline = [
      { duration: 1000, nextStage: 'logo' as const, popups: 0 },
      { duration: 3000, nextStage: 'fade' as const, popups: 0 },
      { duration: 500, nextStage: 'content' as const, popups: 0 },
      { duration: 3500, nextStage: 'content' as const, popups: 0 },
      { duration: 500, nextStage: 'white' as const, popups: 0 },
    ]

    let timeout: NodeJS.Timeout
    let currentStageIndex = 0

    const scheduleNextStage = () => {
      if (currentStageIndex < timeline.length) {
        const { duration, nextStage, popups } = timeline[currentStageIndex]
        timeout = setTimeout(() => {
          setStage(nextStage)
          setVisiblePopups(popups)
          onPopupChange?.(popups)
          currentStageIndex++
          scheduleNextStage()
        }, duration)
      } else {
        currentStageIndex = 0
        setKey((prev) => prev + 1)
        scheduleNextStage()
      }
    }

    scheduleNextStage()

    return () => clearTimeout(timeout)
  }, [key])

  const courses = [
    { title: "Technical Analysis", subtitle: "Candlesticks & Chart Patterns", progress: 78, color: "#4ade80" },
    { title: "Options Pro", subtitle: "Greeks, Strategies & Hedging", progress: 45, color: "#D4AF37" },
    { title: "NISM Series XV", subtitle: "Research Analyst Certification", progress: 30, color: "#3b82f6" },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Phone screen content */}

      {/* White Screen */}
      <div
        className={`absolute inset-0 rounded-[2.4rem] bg-white transition-opacity duration-500 ${
          stage === 'white' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Logo with Colorful Dots - Loader Screen */}
      <div
        className={`absolute inset-0 rounded-[2.4rem] flex items-center justify-center bg-white transition-opacity duration-500 ${
          stage === 'logo' || stage === 'fade' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`transition-all duration-500 ${stage === 'fade' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="relative">
            {/* Black Logo */}
            <div className="relative z-10 brightness-0 saturate-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-DCuPTSLKBmUhcTabfcwzENG35GwMVs.png"
                alt="Alfabet Finance"
                width={120}
                height={120}
              />
            </div>

            {/* Colorful dots around logo */}
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
              aria-hidden="true"
            >
              <circle cx="80" cy="80" r="4" fill="#D4AF37" />
              <circle cx="80" cy="20" r="3" fill="#D4AF37" opacity="0.9" />
              <circle cx="140" cy="80" r="3" fill="#10b981" opacity="0.9" />
              <circle cx="80" cy="140" r="3" fill="#f59e0b" opacity="0.9" />
              <circle cx="20" cy="80" r="3" fill="#3b82f6" opacity="0.9" />
              <circle cx="113" cy="47" r="2" fill="#8b5cf6" opacity="0.7" />
              <circle cx="113" cy="113" r="2" fill="#ec4899" opacity="0.7" />
              <circle cx="47" cy="113" r="2" fill="#06b6d4" opacity="0.7" />
              <circle cx="47" cy="47" r="2" fill="#14b8a6" opacity="0.7" />
              <circle cx="80" cy="10" r="1.5" fill="#D4AF37" opacity="0.5" />
              <circle cx="127" cy="33" r="1.5" fill="#10b981" opacity="0.5" />
              <circle cx="150" cy="80" r="1.5" fill="#f59e0b" opacity="0.5" />
              <circle cx="127" cy="127" r="1.5" fill="#3b82f6" opacity="0.5" />
              <circle cx="80" cy="150" r="1.5" fill="#8b5cf6" opacity="0.5" />
              <circle cx="33" cy="127" r="1.5" fill="#ec4899" opacity="0.5" />
              <circle cx="10" cy="80" r="1.5" fill="#06b6d4" opacity="0.5" />
              <circle cx="33" cy="33" r="1.5" fill="#14b8a6" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content - shown when in content stage with animated popups */}
      <div className={`absolute inset-0 rounded-[2.4rem] overflow-hidden transition-opacity duration-500 ${
        stage === 'content' ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} style={{ background: "linear-gradient(135deg, #1B5E5E 0%, #0D3B3B 100%)" }}>
        <div className="absolute inset-0 flex flex-col">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 relative z-10">
            <span className="text-white/70 text-[10px] font-semibold tracking-wide">9:41</span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl" />
            <div className="flex items-center gap-1">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="white" opacity="0.6">
                <rect x="0" y="4" width="2" height="5" rx="0.5" />
                <rect x="3" y="2.5" width="2" height="6.5" rx="0.5" />
                <rect x="6" y="1" width="2" height="8" rx="0.5" />
                <rect x="9" y="0" width="2" height="9" rx="0.5" />
              </svg>
              <div className="w-4 h-2.5 border border-white/50 rounded-[2px] flex items-center px-0.5">
                <div className="w-2.5 h-1.5 bg-white/60 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-2 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-DCuPTSLKBmUhcTabfcwzENG35GwMVs.png"
                alt="Alfabet Finance"
                width={28}
                height={28}
                className="brightness-0 invert opacity-90"
              />
              <div>
                <p className="text-white text-[11px] font-semibold leading-none">Alfabet Finance</p>
                <p className="text-white/40 text-[9px] mt-0.5">by Hridyesh Mishra</p>
              </div>
            </div>
            <div className="relative">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#D4AF37] rounded-full" />
            </div>
          </div>

          {/* Welcome banner */}
          <div className="mx-4 mb-3 rounded-2xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #1B5E5E 0%, #0D3B3B 100%)" }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-16 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "10px 10px"
              }}
            />
            <div className="px-3 py-2.5">
              <p className="text-white/60 text-[9px] uppercase tracking-widest mb-0.5">Good morning</p>
              <p className="text-white text-[12px] font-bold leading-tight">Continue Learning</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="h-1 flex-1 rounded-full bg-white/10">
                  <div className="h-full w-[62%] rounded-full" style={{ background: "linear-gradient(90deg, #D4AF37, #e8c84a)" }} />
                </div>
                <span className="text-[#D4AF37] text-[9px] font-bold">62%</span>
              </div>
              <p className="text-white/40 text-[8px] mt-0.5">Overall progress</p>
            </div>
          </div>

          {/* Section label */}
          <div className="px-4 mb-2">
            <p className="text-[#D4AF37] text-[9px] font-semibold uppercase tracking-[0.15em]">My Courses</p>
          </div>

          {/* Course cards - animated popup effect */}
          <div className="flex-1 px-4 space-y-2 overflow-hidden">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-500 ${
                  idx < visiblePopups 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: `${course.color}18`, border: `1px solid ${course.color}30` }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={course.color} strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">{course.title}</p>
                  <p className="text-white/40 text-[8px] truncate mt-0.5">{course.subtitle}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex-1 h-[3px] rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${course.progress}%`, background: course.color }}
                      />
                    </div>
                    <span className="text-[8px] font-medium" style={{ color: course.color }}>{course.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            className="flex items-center justify-around pt-3 pb-4 mt-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { name: "Home", active: false, path: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
              { name: "Courses", active: true, path: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
              { name: "Account", active: false, path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="flex-1 flex flex-col items-center gap-1 py-2 px-1 transition-opacity hover:opacity-75"
                style={{ opacity: item.active ? 1 : 0.5 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={item.active ? "text-[#D4AF37]" : "text-white/40"}>
                  <path d={item.path} />
                </svg>
                <span className={`text-[8px] font-semibold ${item.active ? "text-[#D4AF37]" : "text-white/40"}`}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
