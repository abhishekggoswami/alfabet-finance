"use client"

import { useEffect, useRef, useState } from "react"

// Re-triggers every time element enters viewport
export function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
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
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

// Animated counter that increments every time it enters viewport
export function useCounterAnimation(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const startAnimation = () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      setCount(0)
      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) {
          animRef.current = requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      animRef.current = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startAnimation()
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [target, duration])

  return { count, ref }
}

// Fade-up reveal wrapper — re-triggers every time it enters viewport
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.98)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Fade-in from left
export function FadeLeft({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-32px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Fade-in from right
export function FadeRight({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(32px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Stagger children — each child fades up with increasing delay
export function StaggerChildren({
  children,
  staggerMs = 80,
  className,
}: {
  children: React.ReactNode[]
  staggerMs?: number
  className?: string
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ease ${i * staggerMs}ms, transform 0.5s ease ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// Animated counter display component
export function AnimatedCounter({
  value,
  suffix = "",
  className,
  style,
}: {
  value: number
  suffix?: string
  className?: string
  style?: React.CSSProperties
}) {
  const { count, ref } = useCounterAnimation(value, 1400)
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className} style={style}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}
