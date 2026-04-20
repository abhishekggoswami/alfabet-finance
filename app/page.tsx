import { HeroSection } from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import QuoteBanner from "@/components/quote-banner"
import BsrraBundleSection from "@/components/bsrra-bundle-section"
import CoursesSection from "@/components/courses-section"
import TestimonialsSection from "@/components/testimonials-section"
import SuccessStoriesSection from "@/components/success-stories-section"
import WorkshopsSection from "@/components/workshops-section"
import CompactCTA from "@/components/compact-cta"
import AppDownloadSection from "@/components/app-download-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuoteBanner />
      <AboutSection />
      <BsrraBundleSection />
      <CoursesSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <WorkshopsSection />
      <CompactCTA
        title="Your Financial Journey"
        subtitle="Starts Here"
        description="Join thousands of students who have transformed their financial knowledge with expert-led courses, live workshops, and personalised guidance from an Ex SEBI Registered Investment Advisor."
        buttonText="Explore Courses"
        buttonHref="/courses"
        whatsappText="Talk to Us"
      />
      <AppDownloadSection />
      <Footer />
    </main>
  )
}
