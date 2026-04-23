"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [stage, setStage] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(3), 1600),
      setTimeout(() => setStage(4), 2100),
      setTimeout(() => setStage(5), 2700),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Teal gradient - top portion */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #2B7A7A 0%, #1B5E5E 18%, #1B5E5E 32%, #1B5E5E 40%, transparent 55%)",
        }}
      />

      {/* White bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[75%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.4) 22%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.88) 50%, #ffffff 65%)",
        }}
      />


      {/* LAYER 1: FINANCE MASTERY watermark — desktop only */}
      <div
        className="absolute inset-0 hidden md:flex flex-col items-center select-none pointer-events-none"
        style={{ top: "28%" }}
        aria-hidden="true"
      >
        <span
          className="font-sans font-black uppercase leading-[0.85] tracking-[0.04em] transition-all duration-[1800ms] ease-out"
          style={{
            fontSize: "clamp(10rem, 16vw, 15rem)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          FINANCE
        </span>
        <span
          className="font-sans font-black uppercase leading-[0.85] tracking-[0.04em] transition-all duration-[1800ms] ease-out"
          style={{
            fontSize: "clamp(8rem, 13vw, 12rem)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(30px)",
            transitionDelay: stage >= 2 ? "600ms" : "0ms",
          }}
        >
          MASTERY
        </span>
      </div>

      {/* LAYER 2: City skyline */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-[5] w-full flex justify-center hidden sm:flex"
        style={{ top: "18%" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-pearl-modern-finance-center-removebg-preview-AXjvhd6NEcRLCg3xTaTL174M0fKRQD.png"
          alt=""
          width={1920}
          height={400}
          sizes="260vw"
          className="w-[260%] sm:w-[200%] md:w-[170%] max-w-none h-auto object-cover"
          style={{
            opacity: 0.3,
            filter: "sepia(0.5) saturate(1.8) hue-rotate(-10deg) brightness(1.1)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.55) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.55) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* LAYER 3: Person image — desktop only */}
      <div
        className="absolute z-[15] hidden md:flex items-start justify-center transition-all duration-[2000ms] ease-out"
        style={{
          top: "8%",
          left: "50%",
          opacity: stage >= 4 ? 1 : 0,
          transform: stage >= 4
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(100px)",
        }}
      >
        <div className="relative">
          <div
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.15) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-03-28_at_5.35.11_PM-removebg-preview-hBAUVr7DxcDkMPB4PaYVcClXXr2zAe.png"
            alt="Hridyesh Mishra - Finance Coach"
            width={600}
            height={720}
            sizes="(max-width: 768px) 0px, 40vw"
            className="relative z-10 w-auto object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
            style={{
              height: "clamp(340px, 54vh, 68vh)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 72%, transparent 96%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 72%, transparent 96%)",
            }}
            priority
          />
        </div>
      </div>

      {/* LAYER 4: Clouds — desktop */}
      <div
        className="absolute z-[12] pointer-events-none animate-[floatLeft_12s_ease-in-out_infinite] hidden sm:block"
        style={{ top: "42%", left: "-4%", transform: "translateY(-50%)" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4670737a-5b52-4769-9abc-91767e193b61-removebg-preview%20%281%29-kPrxILPiBxLA87kmLSzJcPNKBFH9eY.png"
          alt=""
          width={400}
          height={230}
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 320px, 380px"
          className="w-[200px] md:w-[320px] lg:w-[380px] brightness-[1.15]"
          style={{ opacity: 0.3 }}
        />
      </div>
      <div
        className="absolute z-[12] pointer-events-none animate-[floatRight_14s_ease-in-out_infinite] hidden sm:block"
        style={{ top: "44%", right: "-4%", transform: "translateY(-50%)" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e57979a4-c792-4f95-a26a-7b105719bc3e-removebg-preview-aRxsYZwYXYS8rD7BCT9hMDUrh502lU.png"
          alt=""
          width={400}
          height={200}
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 320px, 380px"
          className="w-[200px] md:w-[320px] lg:w-[380px] brightness-[1.15] -scale-x-100"
          style={{ opacity: 0.25 }}
        />
      </div>
      <div
        className="absolute z-[20] pointer-events-none transition-all duration-[1600ms] ease-out hidden md:block"
        style={{
          top: "48%",
          left: "50%",
          transform: stage >= 3 ? "translateX(-80%) scale(1)" : "translateX(-80%) scale(0.8)",
          opacity: stage >= 3 ? 0.6 : 0,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4670737a-5b52-4769-9abc-91767e193b61-removebg-preview%20%281%29-kPrxILPiBxLA87kmLSzJcPNKBFH9eY.png"
          alt=""
          width={500}
          height={280}
          className="w-[350px] lg:w-[430px]"
          style={{
            filter: "brightness(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 0 40px rgba(255,255,255,0.3))",
          }}
        />
      </div>
      <div
        className="absolute z-[20] pointer-events-none transition-all duration-[1600ms] ease-out hidden md:block"
        style={{
          top: "51%",
          left: "50%",
          transform: stage >= 3 ? "translateX(-20%) scale(1)" : "translateX(-20%) scale(0.8)",
          opacity: stage >= 3 ? 0.55 : 0,
          transitionDelay: "300ms",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4670737a-5b52-4769-9abc-91767e193b61-removebg-preview%20%281%29-kPrxILPiBxLA87kmLSzJcPNKBFH9eY.png"
          alt=""
          width={500}
          height={260}
          className="w-[350px] lg:w-[430px] -scale-x-100"
          style={{
            filter: "brightness(1.35) drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 0 40px rgba(255,255,255,0.3))",
          }}
        />
      </div>

      {/* LAYER 4B: Winged money — desktop */}
      <div
        className="absolute z-[18] pointer-events-none animate-[floatNote1_6s_ease-in-out_infinite] hidden sm:block"
        style={{ top: "35%", left: "5%", transform: "rotate(-15deg) scaleX(-1)" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/little-removebg-preview-CH8PrOhbVo9nVelmWV3Zp5TVgT0bSf.png"
          alt=""
          width={280}
          height={220}
          sizes="(max-width: 768px) 70px, (max-width: 1024px) 110px, 140px"
          className="w-[70px] md:w-[110px] lg:w-[140px]"
          style={{ opacity: 0.65, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.12))" }}
        />
      </div>
      <div
        className="absolute z-[18] pointer-events-none animate-[floatNote2_8s_ease-in-out_infinite] hidden sm:block"
        style={{ top: "18%", right: "6%", transform: "rotate(6deg)" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_631jl8631jl8631j-removebg-preview-oRpt1JISoTJIIJkkdlscU7RamsjI0R.png"
          alt=""
          width={280}
          height={220}
          sizes="(max-width: 768px) 90px, (max-width: 1024px) 170px, 210px"
          className="w-[90px] md:w-[170px] lg:w-[210px]"
          style={{ opacity: 0.75, filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.18))" }}
        />
      </div>

      {/* LAYER 5: Logo + Nav */}
      <div className="absolute top-4 left-4 md:top-7 md:left-8 z-[40]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-DCuPTSLKBmUhcTabfcwzENG35GwMVs.png"
          alt="Alfabet Finance Logo"
          width={130}
          height={65}
          sizes="(max-width: 640px) 58px, (max-width: 768px) 75px, 100px"
          className="brightness-0 invert opacity-90 w-[58px] sm:w-[75px] md:w-[100px]"
          priority
        />
      </div>

      {/* Desktop nav */}
      <nav className="absolute top-7 right-8 md:top-8 md:right-10 z-[40] hidden md:flex items-center gap-8">
        {["About", "Courses", "Workshops", "Calculators", "Contact"].map((item) => (
          <a
            key={item}
            href={
              item === "Calculators"
                ? "/calculators"
                : item === "Courses"
                ? "/courses"
                : item === "Workshops"
                ? "/workshops"
                : item === "Contact"
                ? "/contact"
                : `#${item.toLowerCase()}`
            }
            className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.88)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="absolute top-4 right-4 z-[60] md:hidden flex flex-col gap-[5px] p-2"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
          style={{
            background: "rgba(255,255,255,0.9)",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block w-6 h-[2px] rounded-full transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.9)",
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
          }}
        />
        <span
          className="block w-6 h-[2px] rounded-full transition-all duration-300 origin-center"
          style={{
            background: "rgba(255,255,255,0.9)",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[55] flex flex-col md:hidden"
          style={{ background: "#0A2E2E" }}
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-02-06_at_7.26.14_PM-removebg-preview-DCuPTSLKBmUhcTabfcwzENG35GwMVs.png"
              alt="Alfabet Finance"
              width={100}
              height={50}
              className="brightness-0 invert opacity-90 w-[58px]"
            />
            <div className="w-10" />
          </div>
          <nav className="flex-1 flex flex-col px-5 mt-4">
            {["About", "Courses", "Workshops", "Calculators", "Contact"].map((item, idx) => (
              <div key={item}>
                {idx > 0 && (
                  <hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: 0 }} />
                )}
                <a
                  href={
                    item === "Calculators"
                      ? "/calculators"
                      : item === "Courses"
                      ? "/courses"
                      : item === "Workshops"
                      ? "/workshops"
                      : item === "Contact"
                      ? "/contact"
                      : `#${item.toLowerCase()}`
                  }
                  className="block font-sans font-bold uppercase tracking-[0.15em] py-5 transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "clamp(1.1rem, 5vw, 1.4rem)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <div className="px-5 pb-10 pt-4">
            <a
              href="/courses"
              className="block w-full text-center font-sans font-bold uppercase tracking-[0.18em] py-4 rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1B5E5E 0%, #0F4040 100%)",
                color: "#ffffff",
                fontSize: "12px",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Explore Courses
            </a>
          </div>
        </div>
      )}

      {/* LAYER 6: Name block — desktop only */}
      <div
        className="absolute z-[35] transition-all duration-[1400ms] ease-out w-full hidden md:block"
        style={{
          top: "clamp(56px, 8%, 9%)",
          opacity: stage >= 5 ? 1 : 0,
          transform: stage >= 5 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div
          className="flex flex-col items-start text-left"
          style={{ marginLeft: "clamp(160px, 24vw, 340px)", maxWidth: "36%" }}
        >
          <span
            className="block text-2xl lg:text-[2rem] leading-[1]"
            style={{
              fontFamily: "var(--font-signature), 'Pinyon Script', cursive",
              color: "#D4AF37",
              textShadow: "0 2px 18px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.15)",
              marginBottom: "-0.15em",
            }}
          >
            Finance Coach
          </span>
          <h1
            className="font-sans font-black text-4xl lg:text-5xl uppercase leading-[0.85] tracking-tight text-left"
            style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
          >
            HRIDYESH
            <br />
            MISHRA
          </h1>
        </div>
      </div>

      {/* LAYER 7: Bottom content — desktop only */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[30] hidden md:block"
        style={{ paddingBottom: "clamp(1.5rem, 5vw, 3rem)" }}
      >
        <div className="flex flex-col items-center text-center px-5 sm:px-6">
          <p
            className="leading-tight transition-all duration-[1200ms] ease-out"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#0F4040",
              fontSize: "clamp(1.1rem, 4.5vw, 3.5rem)",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(20px)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              marginBottom: 0,
            }}
          >
            Your path to
          </p>
          <h2
            className="font-sans font-black uppercase leading-none tracking-tight transition-all duration-[1400ms] ease-out"
            style={{
              fontSize: "clamp(2.2rem, 10vw, 5rem)",
              backgroundImage: "linear-gradient(135deg, #1B5E5E 0%, #0F4040 50%, #0A2E2E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(25px) scale(0.95)",
              transitionDelay: "400ms",
            }}
          >
            FINANCIAL
          </h2>
          <h2
            className="font-sans font-black uppercase leading-none tracking-tight transition-all duration-[1400ms] ease-out"
            style={{
              fontSize: "clamp(2.6rem, 12vw, 6rem)",
              color: "#1a1a1a",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transitionDelay: "700ms",
            }}
          >
            FREEDOM
          </h2>
          <p
            className="font-sans font-normal mt-2 sm:mt-3 leading-relaxed transition-all duration-[1200ms] ease-out text-balance"
            style={{
              fontSize: "clamp(0.72rem, 2.8vw, 0.875rem)",
              color: "#5a3e2b",
              maxWidth: "min(300px, 88vw)",
              opacity: stage >= 1 ? 1 : 0,
              transitionDelay: "1000ms",
            }}
          >
            Learn the strategies behind personal finance, investing, and wealth
            creation — courses and workshops by Hridyesh Mishra.
          </p>
          <div
            className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full transition-all duration-[1200ms] ease-out"
            style={{
              maxWidth: "min(300px, 88vw)",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(15px)",
              transitionDelay: "1300ms",
            }}
          >
            <a
              href="/courses"
              className="flex-1 sm:flex-none inline-block font-sans font-bold text-[11px] sm:text-xs md:text-sm px-7 md:px-9 py-3.5 sm:py-3 rounded transition-all duration-200 uppercase tracking-[0.15em] text-center hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1B5E5E 0%, #0F4040 100%)",
                color: "#ffffff",
                boxShadow: "0 6px 28px rgba(10,46,46,0.3)",
              }}
            >
              Explore Courses
            </a>
            <a
              href="#workshops"
              className="flex-1 sm:flex-none inline-block font-sans font-semibold text-[11px] sm:text-xs md:text-sm px-7 md:px-9 py-3.5 sm:py-3 rounded transition-all duration-200 uppercase tracking-[0.15em] text-center hover:-translate-y-0.5 hover:bg-[#0F4040] hover:text-white"
              style={{
                background: "transparent",
                color: "#0F4040",
                border: "2px solid #0F4040",
              }}
            >
              Workshops
            </a>
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT — clean two-zone flex column ===== */}
      <div className="md:hidden relative z-[40] flex flex-col min-h-[100svh]">

        {/* Nav spacer */}
        <div className="h-14 flex-shrink-0" />

        {/* Zone 1: Name block */}
        <div
          className="flex flex-col items-center text-center px-5 flex-shrink-0 transition-all duration-[1200ms] ease-out"
          style={{
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-signature), 'Pinyon Script', cursive",
              color: "#D4AF37",
              fontSize: "clamp(1.3rem, 5.5vw, 1.7rem)",
              textShadow: "0 2px 14px rgba(0,0,0,0.3)",
              display: "block",
              lineHeight: 1.1,
            }}
          >
            Finance Coach
          </span>
          <h1
            className="font-sans font-black uppercase tracking-tight"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 11.5vw, 3.2rem)",
              lineHeight: 0.88,
              textShadow: "0 4px 24px rgba(0,0,0,0.35)",
              marginTop: "4px",
            }}
          >
            HRIDYESH
            <br />
            MISHRA
          </h1>
        </div>

        {/* Zone 2: Person image fills middle */}
        <div
          className="relative flex-1 flex items-end justify-center transition-all duration-[1800ms] ease-out"
          style={{
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "translateY(0)" : "translateY(50px)",
            minHeight: "200px",
          }}
        >
          {/* Soft gold glow behind person */}
          <div
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-03-28_at_5.35.11_PM-removebg-preview-hBAUVr7DxcDkMPB4PaYVcClXXr2zAe.png"
            alt="Hridyesh Mishra - Finance Coach"
            width={500}
            height={600}
            sizes="(max-width: 768px) 60vw, 0px"
            className="relative z-10 w-auto object-contain"
            style={{
              height: "clamp(210px, 40svh, 320px)",
              maskImage: "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.2) 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.2) 88%, transparent 100%)",
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.2))",
            }}
            priority
          />
          {/* Clouds at feet */}
          <div
            className="absolute bottom-0 left-[-20%] z-[20] pointer-events-none transition-all duration-[1400ms]"
            style={{ opacity: stage >= 3 ? 0.6 : 0, transform: stage >= 3 ? "scale(1)" : "scale(0.85)" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4670737a-5b52-4769-9abc-91767e193b61-removebg-preview%20%281%29-kPrxILPiBxLA87kmLSzJcPNKBFH9eY.png"
              alt="" width={500} height={280}
              className="w-[220px]"
              style={{ filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
            />
          </div>
          <div
            className="absolute bottom-0 right-[-20%] z-[20] pointer-events-none transition-all duration-[1400ms]"
            style={{ opacity: stage >= 3 ? 0.55 : 0, transform: stage >= 3 ? "scale(1)" : "scale(0.85)", transitionDelay: "200ms" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4670737a-5b52-4769-9abc-91767e193b61-removebg-preview%20%281%29-kPrxILPiBxLA87kmLSzJcPNKBFH9eY.png"
              alt="" width={500} height={260}
              className="w-[220px] -scale-x-100"
              style={{ filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
            />
          </div>
        </div>

        {/* Zone 3: White bottom — tagline + CTAs */}
        <div
          className="flex-shrink-0 flex flex-col items-center text-center px-5 pb-8 pt-2 relative z-[25]"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 18%, #ffffff 40%)" }}
        >
          <p
            className="leading-tight transition-all duration-[1000ms] ease-out"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#0F4040",
              fontSize: "clamp(1.1rem, 4.5vw, 1.5rem)",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(12px)",
              fontWeight: 500,
              letterSpacing: "0.1em",
            }}
          >
            Your path to
          </p>
          <h2
            className="font-sans font-black uppercase leading-none tracking-tight transition-all duration-[1200ms] ease-out"
            style={{
              fontSize: "clamp(2rem, 9.5vw, 3rem)",
              backgroundImage: "linear-gradient(135deg, #1B5E5E 0%, #0F4040 60%, #0A2E2E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(18px)",
              transitionDelay: "300ms",
            }}
          >
            FINANCIAL
          </h2>
          <h2
            className="font-sans font-black uppercase leading-none tracking-tight transition-all duration-[1200ms] ease-out"
            style={{
              fontSize: "clamp(2.4rem, 11vw, 3.8rem)",
              color: "#1a1a1a",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(22px)",
              transitionDelay: "550ms",
            }}
          >
            FREEDOM
          </h2>
          <p
            className="font-sans font-normal mt-2 leading-relaxed text-balance transition-all duration-[1000ms] ease-out"
            style={{
              fontSize: "clamp(0.72rem, 3vw, 0.82rem)",
              color: "#4a6060",
              maxWidth: "min(290px, 88vw)",
              opacity: stage >= 1 ? 1 : 0,
              transitionDelay: "800ms",
            }}
          >
            Learn the strategies behind personal finance, investing, and wealth
            creation — courses and workshops by Hridyesh Mishra.
          </p>
          <div
            className="mt-4 flex flex-col items-stretch gap-3 w-full transition-all duration-[1000ms] ease-out"
            style={{
              maxWidth: "min(290px, 88vw)",
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(12px)",
              transitionDelay: "1050ms",
            }}
          >
            <a
              href="/courses"
              className="font-sans font-bold text-[11px] px-7 py-3.5 rounded uppercase tracking-[0.15em] text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1B5E5E 0%, #0F4040 100%)",
                color: "#ffffff",
                boxShadow: "0 6px 22px rgba(10,46,46,0.28)",
              }}
            >
              Explore Courses
            </a>
            <a
              href="#workshops"
              className="font-sans font-semibold text-[11px] px-7 py-3.5 rounded uppercase tracking-[0.15em] text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0F4040] hover:text-white active:scale-95"
              style={{
                background: "transparent",
                color: "#0F4040",
                border: "2px solid #0F4040",
              }}
            >
              Workshops
            </a>
          </div>
        </div>

      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none overflow-hidden hidden md:block">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ fill: "#ffffff" }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  )
}
