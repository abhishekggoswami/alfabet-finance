"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Menu } from "lucide-react"

interface StickyNavProps {
  activeHref?: string
}

const navLinks = [
  { label: "Home",        href: "/"            },
  { label: "About",       href: "/#about"      },
  { label: "Courses",     href: "/courses"     },
  { label: "Workshops",   href: "/workshops"   },
  { label: "Calculators", href: "/calculators" },
  { label: "Contact",     href: "/contact"     },
]

const LOGO_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_han9fchan9fchan9-removebg-preview-71kB6OclyiBJT8zV9cZCHouKsvunhs.png"

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className="logo-sparkle pointer-events-none absolute rounded-full"
      style={{ width: "5px", height: "5px", background: "#D4AF37", ...style }}
    />
  )
}

export default function StickyNav({ activeHref = "/courses" }: StickyNavProps) {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [drawerOpen])

  return (
    <>
      {/* ── Sticky bar ──────────────────────────────────────── */}
      <header
        className="sticky top-0 z-30 border-b transition-all duration-300"
        style={{
          background:   "#ffffff",
          borderColor:  scrolled ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.06)",
          boxShadow:    scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between transition-all duration-300"
          style={{ paddingTop: scrolled ? "8px" : "14px", paddingBottom: scrolled ? "8px" : "14px" }}
        >
          {/* Logo + sparkles */}
          <Link href="/" onClick={() => setDrawerOpen(false)} className="relative inline-block">
            <Sparkle style={{ top: "2px",    left:  "18px", animationDelay: "0s",    animationDuration: "2.2s" }} />
            <Sparkle style={{ top: "-2px",   right: "24px", animationDelay: "0.55s", animationDuration: "2.8s", width: "4px", height: "4px" }} />
            <Sparkle style={{ top: "6px",    right: "8px",  animationDelay: "1.1s",  animationDuration: "2.4s", width: "3px", height: "3px", background: "#1B5E5E" }} />
            <Sparkle style={{ bottom: "3px", left:  "30px", animationDelay: "0.8s",  animationDuration: "3.0s", width: "3px", height: "3px" }} />
            <Sparkle style={{ top: "0px",    left:  "50%",  animationDelay: "1.6s",  animationDuration: "2.6s", width: "4px", height: "4px", background: "#1B5E5E" }} />
            <Image
              src={LOGO_SRC}
              alt="Alfabet Finance"
              width={160}
              height={80}
              className="transition-all duration-300 relative z-10"
              style={{ width: scrolled ? "100px" : "130px", height: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = item.href === activeHref
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link relative flex flex-col items-center gap-[5px] font-sans font-bold uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ color: "#1B5E5E", fontSize: scrolled ? "11px" : "13px" }}
                >
                  {item.label}
                  <span
                    className={`block rounded-full nav-underline${isActive ? " nav-underline--active" : ""}`}
                    style={{ height: "2.5px", background: "#D4AF37" }}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block font-sans font-bold uppercase tracking-[0.15em] rounded transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            style={{
              background: "#1B5E5E",
              color:      "#ffffff",
              fontSize:   scrolled ? "10px" : "12px",
              padding:    scrolled ? "8px 18px" : "10px 24px",
            }}
          >
            Get in Touch
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 -mr-1 rounded"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            style={{ color: "#1B5E5E" }}
          >
            <Menu size={26} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ───────────────────────────────────── */}
      <div
        className="fixed inset-0 z-50 md:hidden transition-opacity duration-300"
        style={{ pointerEvents: drawerOpen ? "auto" : "none", opacity: drawerOpen ? 1 : 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Panel */}
        <div
          className="absolute inset-y-0 left-0 flex flex-col transition-transform duration-300"
          style={{
            width:      "min(85vw, 360px)",
            background: "linear-gradient(165deg, #1B5E5E 0%, #0F4040 55%, #0A2E2E 100%)",
            transform:  drawerOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 pt-6 pb-5 border-b"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <Link href="/" onClick={() => setDrawerOpen(false)}>
              <Image
                src={LOGO_SRC}
                alt="Alfabet Finance"
                width={130}
                height={65}
                style={{ width: "110px", height: "auto", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              className="flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/20 hover:scale-105"
              style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-6 pt-6 flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = item.href === activeHref
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className="font-sans font-bold uppercase tracking-[0.18em] py-4 border-b transition-all duration-200"
                  style={{ color: isActive ? "#D4AF37" : "#ffffff", fontSize: "14px", borderColor: "rgba(255,255,255,0.10)" }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(212,175,55,0.85)" }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#ffffff" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-8 pt-4">
            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="block w-full text-center font-sans font-bold uppercase tracking-[0.18em] rounded-xl transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "#1B5E5E", color: "#ffffff", fontSize: "13px", padding: "16px 24px", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
