"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}

/** Returns a style object for a staggered fade-up reveal */
export function revealStyle(
  isVisible: boolean,
  delayMs: number = 0,
  durationMs: number = 620
): CSSProperties {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(28px)",
    transition: `opacity ${durationMs}ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
  }
}

/** Returns a style object for a scale-up reveal (for cards) */
export function revealCardStyle(
  isVisible: boolean,
  delayMs: number = 0
): CSSProperties {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px) scale(1)" : "translateY(20px) scale(0.97)",
    transition: `opacity 580ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 580ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
  }
}
