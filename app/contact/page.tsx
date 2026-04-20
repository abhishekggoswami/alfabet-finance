"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import StickyNav from "@/components/sticky-nav"
import CompactCTA from "@/components/compact-cta"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

// Scroll-triggered reveal hook
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// Animated section header
function AnimatedHeader({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Animated card wrapper
function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses within hours",
    value: "+91 98765 43210",
    link: "https://wa.me/919876543210?text=Hi%20there%2C%20I%27m%20interested%20in%20your%20finance%20coaching",
    cta: "Message Now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries",
    value: "contact@alfabetfinance.com",
    link: "mailto:contact@alfabetfinance.com",
    cta: "Send Email",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Sat, 10AM - 6PM IST",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    cta: "Call Now",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    
    // Open mailto link
    window.location.href = `mailto:contact@alfabetfinance.com?subject=${subject}&body=${body}`
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <main style={{ background: "#f5f5f0", minHeight: "100vh" }}>
      <StickyNav activeHref="/contact" />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "#1B5E5E" }}
      >
        {/* Animated marquee watermark */}
        <div
          className="marquee-depth-container absolute inset-0 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {([
            { dir: "Fwd", speed: 32, depthClass: "marquee-row-back", opacity: 0.028, stroke: "1.5px" },
            { dir: "Rev", speed: 24, depthClass: "marquee-row-front", opacity: 0.065, stroke: "2.5px" },
            { dir: "Fwd", speed: 40, depthClass: "marquee-row-mid", opacity: 0.040, stroke: "2px" },
          ] as const).map((row, i) => (
            <div
              key={i}
              className={`flex whitespace-nowrap ${row.depthClass}`}
              style={{
                animation: `marquee${row.dir} ${row.speed}s linear infinite`,
                willChange: "transform",
                opacity: row.opacity,
              }}
            >
              {Array.from({ length: 14 }).map((_, j) => (
                <span
                  key={j}
                  className="font-sans font-extrabold uppercase leading-none"
                  style={{
                    fontSize: "clamp(72px, 14vw, 160px)",
                    WebkitTextStroke: `${row.stroke} #ffffff`,
                    color: "transparent",
                    paddingRight: "clamp(32px, 5vw, 80px)",
                    letterSpacing: "0.1em",
                  }}
                >
                  CONNECT
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10,40,40,0.4) 100%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#D4AF37" }}>
              {"Let's talk"}
            </span>
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight"
            style={{ color: "#ffffff" }}
          >
            Contact Us
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Have questions about our courses? Want personalized guidance on your financial journey? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedHeader>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, #1B5E5E, transparent)" }}
              />
              <p
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#1B5E5E" }}
              >
                Get in Touch
              </p>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(270deg, #1B5E5E, transparent)" }}
              />
            </div>
          </AnimatedHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <AnimatedCard key={method.title} delay={idx * 100}>
                <a
                  href={method.link}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group block p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  style={{
                    background: "#ffffff",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(27,94,94,0.1)" }}
                  >
                    <method.icon size={26} style={{ color: "#1B5E5E" }} />
                  </div>
                  <h3
                    className="font-sans font-bold text-lg mb-1"
                    style={{ color: "#1a1a1a" }}
                  >
                    {method.title}
                  </h3>
                  <p
                    className="font-sans text-sm mb-3"
                    style={{ color: "#888888" }}
                  >
                    {method.description}
                  </p>
                  <p
                    className="font-sans font-semibold text-base mb-4"
                    style={{ color: "#1B5E5E" }}
                  >
                    {method.value}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                    style={{ color: "#D4AF37" }}
                  >
                    {method.cta}
                    <Send size={14} />
                  </span>
                </a>
              </AnimatedCard>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard delay={100}>
              <div
                className="p-8 md:p-10 rounded-2xl"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  className="font-sans font-bold text-2xl mb-2"
                  style={{ color: "#1a1a1a" }}
                >
                  Send us a Message
                </h2>
                <p
                  className="font-sans text-sm mb-8"
                  style={{ color: "#666666" }}
                >
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(27,94,94,0.1)" }}
                    >
                      <Send size={28} style={{ color: "#1B5E5E" }} />
                    </div>
                    <h3
                      className="font-sans font-bold text-xl mb-2"
                      style={{ color: "#1B5E5E" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="font-sans text-sm"
                      style={{ color: "#666666" }}
                    >
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "#888888" }}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "#f8f8f6",
                            border: "1px solid #e8e8e4",
                            color: "#1a1a1a",
                          }}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          className="block font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "#888888" }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "#f8f8f6",
                            border: "1px solid #e8e8e4",
                            color: "#1a1a1a",
                          }}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "#888888" }}
                        >
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "#f8f8f6",
                            border: "1px solid #e8e8e4",
                            color: "#1a1a1a",
                          }}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label
                          className="block font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "#888888" }}
                        >
                          Subject
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "#f8f8f6",
                            border: "1px solid #e8e8e4",
                            color: formData.subject ? "#1a1a1a" : "#999999",
                          }}
                        >
                          <option value="">Select a topic</option>
                          <option value="courses">Course Inquiry</option>
                          <option value="workshops">Workshop Inquiry</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block font-sans text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "#888888" }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 outline-none resize-none"
                        style={{
                          background: "#f8f8f6",
                          border: "1px solid #e8e8e4",
                          color: "#1a1a1a",
                        }}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-sans font-bold text-sm px-8 py-4 rounded-lg transition-all duration-200 uppercase tracking-[0.15em] hover:brightness-110 disabled:opacity-60"
                      style={{ background: "#1B5E5E", color: "#ffffff" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedCard>

            {/* Info Card */}
            <AnimatedCard delay={200}>
              <div className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #1B5E5E 0%, #0F3F3F 100%)",
                  }}
                >
                  <h3
                    className="font-serif text-2xl mb-4"
                    style={{ color: "#D4AF37" }}
                  >
                    Why Connect With Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Get personalized course recommendations",
                      "Learn about upcoming workshops",
                      "Explore partnership opportunities",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(212,175,55,0.2)" }}
                        >
                          <div className="w-2 h-2 rounded-full" style={{ background: "#D4AF37" }} />
                        </div>
                        <span
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: "#ffffff",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} style={{ color: "#1B5E5E" }} />
                    <h4
                      className="font-sans font-bold text-base"
                      style={{ color: "#1a1a1a" }}
                    >
                      Response Time
                    </h4>
                  </div>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    We typically respond within <strong style={{ color: "#1B5E5E" }}>24 hours</strong> on business days. 
                    For urgent queries, WhatsApp is the fastest way to reach us.
                  </p>
                </div>

                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: "#ffffff",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} style={{ color: "#1B5E5E" }} />
                    <h4
                      className="font-sans font-bold text-base"
                      style={{ color: "#1a1a1a" }}
                    >
                      Location
                    </h4>
                  </div>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    Based in India, serving students globally through online courses and workshops.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div style={{ background: "#0A2E2E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }}
          />
        </div>
      </div>

      {/* Compact CTA before footer */}
      <CompactCTA
        title="Still Have"
        subtitle="Questions?"
        description="Whether you need guidance on course selection, have technical inquiries, or want to explore our SEBI RA consultancy services, our team is here to help you every step of the way."
        buttonText="Explore Courses"
        buttonHref="/courses"
        whatsappText="Chat Now"
      />

      <Footer />
    </main>
  )
}
