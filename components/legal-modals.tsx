"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Shield, FileText, ChevronRight } from "lucide-react"

type ModalType = "privacy" | "terms" | null

interface LegalModalProps {
  type: ModalType
  onClose: () => void
}

const privacyContent = {
  lastUpdated: "March 2026",
  sections: [
    {
      title: "Information We Collect",
      body: `When you enroll in a course, register for a workshop, or contact us, we may collect your name, email address, phone number, and payment-related information (processed securely through our payment partners — we never store card or UPI details on our servers). We also collect non-personally identifiable data such as browser type, pages visited, and session duration to improve our platform.`,
    },
    {
      title: "How We Use Your Information",
      body: `Your information is used to process course enrollments and payments, send you course access credentials and updates, provide customer support, share relevant educational content and announcements about new courses or workshops, and comply with legal obligations. We do not sell or rent your personal information to third parties.`,
    },
    {
      title: "Payment & Financial Data",
      body: `All payments are processed through secure, PCI-DSS-compliant third-party gateways. Alfabet Finance does not store any payment card details, UPI IDs, or net banking credentials. Transactional records may be retained for accounting and legal compliance purposes as required under Indian law.`,
    },
    {
      title: "Data Security",
      body: `We implement industry-standard security measures including encrypted data transmission (HTTPS/TLS), restricted access to personal data, and regular security assessments. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: "Cookies & Tracking",
      body: `Our website uses cookies to maintain your session, remember your preferences, and analyze website traffic. You may disable cookies in your browser settings; however, some features of the platform may not function correctly without them.`,
    },
    {
      title: "Third-Party Services",
      body: `We use trusted third-party services such as payment gateways, email delivery providers, and analytics tools. These providers have their own privacy policies and are contractually obligated to protect your data. We are not responsible for the privacy practices of external links on our site.`,
    },
    {
      title: "Your Rights",
      body: `You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at contact@alfabetfinance.com. Requests will be processed within 30 days. Some data may be retained if required by law or for legitimate business purposes such as fraud prevention.`,
    },
    {
      title: "Changes to This Policy",
      body: `We may update this Privacy Policy from time to time. Significant changes will be communicated via email or a prominent notice on our website. Continued use of our services after any changes constitutes your acceptance of the updated policy.`,
    },
    {
      title: "Contact Us",
      body: `For any privacy-related questions or concerns, please contact us at: contact@alfabetfinance.com. We are committed to resolving your concerns promptly and transparently.`,
    },
  ],
}

const termsContent = {
  lastUpdated: "March 2026",
  sections: [
    {
      title: "Acceptance of Terms",
      body: `By accessing or using the Alfabet Finance website (alfabetfinance.com), enrolling in any course or workshop, or engaging with our services in any way, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services immediately.`,
    },
    {
      title: "Course Enrollment & Access",
      body: `Upon successful payment, you will receive access credentials for your enrolled course(s). Access is granted to the individual purchaser only and is non-transferable. Sharing login credentials or course content with others is strictly prohibited and may result in immediate termination of your access without refund.`,
    },
    {
      title: "Payment Terms",
      body: `All course fees are displayed in Indian Rupees (INR) and are inclusive of applicable taxes where stated. Payments must be made in full before access is granted. Alfabet Finance reserves the right to modify pricing at any time; changes will not affect existing enrollments.`,
    },
    {
      title: "Refund Policy",
      body: `We do not have a refund policy. All sales are final. Once a course enrollment or workshop registration is completed and payment is received, no refunds will be issued under any circumstances. We encourage you to review all course details and reach out to us at contact@alfabetfinance.com with any questions before making a purchase.`,
    },
    {
      title: "Intellectual Property",
      body: `All course content including videos, PDFs, presentations, illustrations, and written materials are the exclusive intellectual property of Alfabet Finance and Hridyesh Mishra. You may not reproduce, distribute, publicly perform, record, or create derivative works from any course material without prior written permission. Violation may result in legal action.`,
    },
    {
      title: "Disclaimer of Financial Advice",
      body: `The content provided in all Alfabet Finance courses, workshops, and communications is for educational purposes only. Nothing on this platform constitutes personalized financial advice, investment recommendations, or solicitation to buy or sell any security. All investment decisions carry risk, and past performance is not indicative of future results. Consult a SEBI-registered investment advisor for personalized guidance.`,
    },
    {
      title: "User Conduct",
      body: `You agree to use Alfabet Finance services in accordance with applicable Indian laws and these Terms. Prohibited conduct includes: engaging in fraudulent activity, reverse engineering course material, posting spam or abusive content in any community forums, impersonating other users or staff, and attempting unauthorized access to our systems.`,
    },
    {
      title: "Limitation of Liability",
      body: `To the fullest extent permitted by law, Alfabet Finance and its founders, employees, and affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, including but not limited to financial losses resulting from investment decisions made based on course content.`,
    },
    {
      title: "Governing Law & Jurisdiction",
      body: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in India. Before initiating legal proceedings, parties agree to attempt resolution through good-faith negotiation.`,
    },
    {
      title: "Modifications to Terms",
      body: `Alfabet Finance reserves the right to modify these Terms at any time. Continued use of our services after modifications constitutes acceptance of the revised Terms. We recommend reviewing this page periodically. For material changes, we will provide notice via email.`,
    },
  ],
}

function LegalModal({ type, onClose }: LegalModalProps) {
  const isPrivacy = type === "privacy"
  const content = isPrivacy ? privacyContent : termsContent
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service"
  const icon = isPrivacy ? Shield : FileText

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const Icon = icon

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl"
        style={{
          background: "#ffffff",
          boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-4 px-6 py-5 shrink-0"
          style={{
            background: "#0A2E2E",
            borderBottom: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            <Icon size={18} strokeWidth={2} style={{ color: "#D4AF37" }} />
          </div>
          <div className="flex-1">
            <h2 className="font-sans font-black text-lg uppercase tracking-tight leading-none" style={{ color: "#ffffff" }}>
              {title}
            </h2>
            <p className="font-sans text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Alfabet Finance · Last updated {content.lastUpdated}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10 cursor-pointer shrink-0"
            style={{ color: "rgba(255,255,255,0.6)" }}
            aria-label="Close"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Intro */}
          <div
            className="rounded-xl p-4 mb-6 flex items-start gap-3"
            style={{ background: "rgba(27,94,94,0.06)", border: "1px solid rgba(27,94,94,0.12)" }}
          >
            <ChevronRight size={16} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: "#1B5E5E" }} />
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#444444" }}>
              {isPrivacy
                ? "At Alfabet Finance, your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our platform."
                : "Please read these Terms of Service carefully before enrolling in any course or using our platform. These terms govern your relationship with Alfabet Finance."
              }
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {content.sections.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-sans text-[11px] font-bold"
                    style={{ background: "#1B5E5E", color: "#ffffff" }}
                  >
                    {idx + 1}
                  </span>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wide" style={{ color: "#1a1a1a" }}>
                    {section.title}
                  </h3>
                </div>
                <p
                  className="font-sans text-sm leading-relaxed pl-8"
                  style={{ color: "#666666" }}
                >
                  {section.body}
                </p>
                {idx < content.sections.length - 1 && (
                  <div
                    className="mt-6 h-px"
                    style={{ background: "linear-gradient(90deg, rgba(27,94,94,0.15), transparent)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div
            className="mt-8 rounded-xl p-4"
            style={{ background: "#0A2E2E" }}
          >
            <p className="font-sans text-xs leading-relaxed text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
              For any questions regarding this {isPrivacy ? "Privacy Policy" : "Terms of Service"}, contact us at{" "}
              <a
                href="mailto:contact@alfabetfinance.com"
                className="underline hover:text-white transition-colors duration-200"
                style={{ color: "#D4AF37" }}
              >
                contact@alfabetfinance.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exported trigger component used in Footer
export function LegalLinks() {
  const [open, setOpen] = useState<ModalType>(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <button
        onClick={() => setOpen("privacy")}
        className="font-sans text-xs transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
        style={{ color: "rgba(255,255,255,0.35)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)" }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)" }}
      >
        Privacy Policy
      </button>
      <button
        onClick={() => setOpen("terms")}
        className="font-sans text-xs transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
        style={{ color: "rgba(255,255,255,0.35)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)" }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)" }}
      >
        Terms of Service
      </button>

      {open && <LegalModal type={open} onClose={close} />}
    </>
  )
}
