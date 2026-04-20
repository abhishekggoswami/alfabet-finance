"use client"

import React from "react"

interface Candlestick {
  id: number
  x: number
  open: number
  close: number
  high: number
  low: number
  isGreen: boolean
}

// Generate random candlesticks with realistic patterns
function generateCandlesticks(): Candlestick[] {
  const candles: Candlestick[] = []
  let basePrice = 150

  for (let i = 0; i < 16; i++) {
    const isGreen = Math.random() > 0.45
    const volatility = 15

    const open = basePrice + (Math.random() - 0.5) * volatility
    const close = open + (isGreen ? 1 : -1) * Math.random() * volatility

    const range = Math.abs(close - open)
    const high = Math.max(open, close) + Math.random() * range * 0.5
    const low = Math.min(open, close) - Math.random() * range * 0.5

    candles.push({
      id: i,
      x: i * 35,
      open,
      close,
      high,
      low,
      isGreen: close > open,
    })

    basePrice = (open + close) / 2 + (Math.random() - 0.5) * 5
  }

  return candles
}

interface CandlestickBackgroundProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "full"
  opacity?: number
  scale?: number
}

export function CandlestickBackground({
  position = "top-right",
  opacity = 0.15,
  scale = 1,
}: CandlestickBackgroundProps) {
  const [candles, setCandles] = React.useState<Candlestick[]>([])

  React.useEffect(() => {
    setCandles(generateCandlesticks())
  }, [])

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "full": "inset-0"
  }

  const minPrice = candles.length > 0 ? Math.min(...candles.map((c) => c.low)) : 100
  const maxPrice = candles.length > 0 ? Math.max(...candles.map((c) => c.high)) : 200
  const priceRange = maxPrice - minPrice || 1
  const svgHeight = 300 * scale
  const svgWidth = 900 * scale

  const scaleY = (price: number) => {
    return svgHeight - ((price - minPrice) / priceRange) * svgHeight
  }

  const candleWidth = 24
  const candleSpacing = 8

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} z-[1] ${position === "full" ? "w-full h-full" : ""}`}
      style={{ opacity }}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className={`overflow-visible ${position === "full" ? "w-full h-full" : ""}`}
        preserveAspectRatio={position === "full" ? "xMidYMid slice" : "xMinYMin meet"}
      >
        {/* Grid lines */}
        <defs>
          <linearGradient
            id="candleGradient1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
          </linearGradient>
          <linearGradient
            id="candleGradient2"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((fraction, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={svgHeight * fraction}
            x2={svgWidth}
            y2={svgHeight * fraction}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
            strokeDasharray="4,4"
          />
        ))}

        {/* Candlesticks */}
        {candles.map((candle) => {
          const x = candle.x
          const yHigh = scaleY(candle.high)
          const yLow = scaleY(candle.low)
          const yOpen = scaleY(candle.open)
          const yClose = scaleY(candle.close)
          const bodyY = Math.min(yOpen, yClose)
          const bodyHeight = Math.abs(yClose - yOpen) || 2

          const color = candle.isGreen ? "#22c55e" : "#ef4444"
          const candleGradient = candle.isGreen ? "url(#candleGradient1)" : "url(#candleGradient2)"

          return (
            <g key={candle.id}>
              {/* High-Low wick */}
              <line
                x1={x + candleWidth / 2}
                y1={yHigh}
                x2={x + candleWidth / 2}
                y2={yLow}
                stroke={color}
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Body */}
              <rect
                x={x}
                y={bodyY}
                width={candleWidth}
                height={Math.max(bodyHeight, 3)}
                fill={candleGradient}
                stroke={color}
                strokeWidth="1.5"
                rx="1"
              />
            </g>
          )
        })}

        {/* Accent line across bottom */}
        <line
          x1="0"
          y1={svgHeight - 1}
          x2={svgWidth}
          y2={svgHeight - 1}
          stroke="rgba(212, 175, 55, 0.3)"
          strokeWidth="1"
        />
      </svg>

      {/* Label */}
      <div className="absolute -bottom-8 left-0 text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
        Market Trend
      </div>
    </div>
  )
}
