'use client'

import { useState } from 'react'
import { ChevronDown, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'
import Footer from '@/components/footer'
import StickyNav from '@/components/sticky-nav'

// Format large numbers for Y-axis display
const formatYAxisValue = (value) => {
  if (value >= 10000000) return `${(value / 10000000).toFixed(1)}Cr`
  if (value >= 100000) return `${(value / 100000).toFixed(1)}L`
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
  return value
}

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState(0)

  const calculators = [
    {
      name: 'Future Value Calculator',
      description: 'Calculate future value with compound interest',
    },
    {
      name: 'Rate of Return Calculator',
      description: 'Find your rate of return on investment',
    },
    {
      name: 'SIP Calculator',
      description: 'Calculate future value of monthly/quarterly SIP',
    },
    {
      name: 'Goal SIP Calculator',
      description: 'Determine monthly SIP to reach your goal',
    },
    {
      name: 'Power of Compounding',
      description: 'See the power of long-term investing',
    },
  ]

  return (
    <main style={{ background: '#f5f5f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <StickyNav activeHref="/calculators" />

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
                  CALCULATE
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
              Plan your future
            </span>
            <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.5)" }} />
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance leading-tight"
            style={{ color: "#ffffff" }}
          >
            Calculators
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Powerful financial tools to help you make informed decisions. 
            Plan your investments, calculate returns, and visualize your wealth growth.
          </p>
        </div>
      </section>

      {/* Calculators Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 flex-grow">
        {/* Calculator Selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {calculators.map((calc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCalculator(idx)}
              className="px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: activeCalculator === idx ? '#1B5E5E' : '#f0f0f0',
                color: activeCalculator === idx ? '#ffffff' : '#333333',
                border: activeCalculator === idx ? '2px solid #D4AF37' : '2px solid #e0e0e0',
                boxShadow: activeCalculator === idx ? '0 4px 16px rgba(27,94,94,0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (activeCalculator !== idx) {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(27,94,94,0.08)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,94,94,0.3)'
                  ;(e.currentTarget as HTMLElement).style.color = '#1B5E5E'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCalculator !== idx) {
                  (e.currentTarget as HTMLElement).style.background = '#f0f0f0'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0'
                  ;(e.currentTarget as HTMLElement).style.color = '#333333'
                }
              }}
            >
              {calc.name}
            </button>
          ))}
        </div>

        {/* Active Calculator */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg" style={{ border: '2px solid #1B5E5E' }}>
          {activeCalculator === 0 && <FutureValueCalculator />}
          {activeCalculator === 1 && <RateOfReturnCalculator />}
          {activeCalculator === 2 && <SIPCalculator />}
          {activeCalculator === 3 && <GoalSIPCalculator />}
          {activeCalculator === 4 && <PowerOfCompoundingCalculator />}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: '#1B5E5E' }}>Disclaimer</h3>
          <p className="text-sm text-gray-700">
            Please note that these calculators are for illustrations only and do not represent actual returns. Stock Market does not have a fixed rate of return and it is not possible to predict the rate of return.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* ===== WhatsApp Contact Button ===== */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Hridyesh%2C%20I%27m%20interested%20in%20your%20finance%20coaching"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[50] flex items-center gap-2.5 rounded-full px-5 py-3 transition-all duration-300 hover:scale-105 group"
        style={{
          background: "linear-gradient(135deg, #1B5E5E 0%, #0F3F3F 100%)",
          boxShadow: "0 8px 32px rgba(27,94,94,0.35), 0 2px 8px rgba(0,0,0,0.1)",
        }}
        aria-label="Chat on WhatsApp for financial guidance"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="#ffffff"
          />
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.175-3.01.79.8-2.94-.19-.3A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"
            fill="#ffffff"
          />
        </svg>
        <span className="hidden group-hover:inline text-sm font-semibold text-white">Chat on WhatsApp</span>
      </a>
    </main>
  )
}

function FutureValueCalculator() {
  const [principal, setPrincipal] = useState('')
  const [annualAddition, setAnnualAddition] = useState('')
  const [years, setYears] = useState('')
  const [rate, setRate] = useState('')
  const [chartType, setChartType] = useState('line')
  const [currency, setCurrency] = useState('INR')

  const calculateGrowthData = () => {
    const p = principal === '' ? 0 : Number(principal)
    const aa = annualAddition === '' ? 0 : Number(annualAddition)
    const y = years === '' ? 0 : Number(years)
    const r = rate === '' ? 0 : Number(rate)
    
    let fv = p
    const data = []
    data.push({ year: 0, value: p, invested: p })
    
    for (let i = 1; i <= y; i++) {
      fv = (fv + aa) * (1 + r / 100)
      data.push({ year: i, value: Math.round(fv), invested: p + aa * i })
    }
    return data
  }

  const growthData = calculateGrowthData()
  const futureValue = growthData.length > 0 ? growthData[growthData.length - 1].value : 0
  const p = principal === '' ? 0 : Number(principal)
  const aa = annualAddition === '' ? 0 : Number(annualAddition)
  const y = years === '' ? 0 : Number(years)
  const totalInvestment = p + aa * y
  const gains = futureValue - totalInvestment

  const currencySymbol = currency === 'INR' ? '₹' : '$'

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: '#1B5E5E' }}>Future Value (Compound Interest) Calculator</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-4 py-2 rounded-lg font-semibold border-2"
          style={{
            borderColor: '#1B5E5E',
            backgroundColor: '#ffffff',
            color: '#1B5E5E',
          }}
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#1B5E5E' }}>Growth Over Time</p>
            <div className="flex gap-2">
              {['line', 'area', 'bar'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className="px-3 py-1 rounded text-xs font-semibold transition-all"
                  style={{
                    background: chartType === type ? '#1B5E5E' : '#f0f0f0',
                    color: chartType === type ? '#ffffff' : '#333333',
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
            {chartType === 'line' && (
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#1B5E5E" strokeWidth={3} dot={{ fill: '#D4AF37' }} name="Portfolio Value" />
              </LineChart>
            )}
            {chartType === 'area' && (
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Area type="monotone" dataKey="value" stroke="#1B5E5E" fill="#1B5E5E" fillOpacity={0.2} name="Portfolio Value" />
              </AreaChart>
            )}
            {chartType === 'bar' && (
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="value" fill="#1B5E5E" name="Portfolio Value" />
              </BarChart>
            )}
          </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
            <p className="text-sm text-gray-600 mb-1">Future Value</p>
            <p className="text-2xl font-bold" style={{ color: '#1B5E5E' }}>{currencySymbol}{futureValue.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
            <p className="text-sm text-gray-600 mb-1">Total Gains</p>
            <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>{currencySymbol}{gains.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField label={`Current Principal (${currencySymbol})`} value={principal} onChange={(e) => setPrincipal(e.target.value)} />
          <InputField label={`Annual Addition (${currencySymbol})`} value={annualAddition} onChange={(e) => setAnnualAddition(e.target.value)} />
          <InputField label="Years to Grow" value={years} onChange={(e) => setYears(e.target.value)} />
          <InputField label="Growth Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>

        <div className="bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <p className="text-sm font-semibold mb-4" style={{ color: '#1B5E5E' }}>Investment Breakdown</p>
          <div>
            <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Total Investment', value: totalInvestment },
                  { name: 'Gains', value: gains },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#1B5E5E" />
                <Cell fill="#D4AF37" />
              </Pie>
              <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
            </PieChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

function RateOfReturnCalculator() {
  const [presentValue, setPresentValue] = useState('')
  const [futureValue, setFutureValue] = useState('')
  const [years, setYears] = useState('')
  const [chartType, setChartType] = useState('line')
  const [currency, setCurrency] = useState('INR')

  const currencySymbol = currency === 'INR' ? '₹' : '$'

  const calculateROI = () => {
    const pv = presentValue === '' ? 0 : Number(presentValue)
    const fv = futureValue === '' ? 0 : Number(futureValue)
    const y = years === '' ? 0 : Number(years)
    
    if (pv <= 0 || fv <= pv || y <= 0) return 0
    return (Math.pow(fv / pv, 1 / y) - 1) * 100
  }

  const roi = calculateROI()

  const generateROIData = () => {
    const pv = presentValue === '' ? 0 : Number(presentValue)
    const y = years === '' ? 0 : Number(years)
    let value = pv
    const data = []
    data.push({ year: 0, value: pv })
    
    for (let i = 1; i <= y; i++) {
      value = value * (1 + roi / 100)
      data.push({ year: i, value: Math.round(value) })
    }
    return data
  }

  const roiData = generateROIData()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: '#1B5E5E' }}>Rate of Return Calculator</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-4 py-2 rounded-lg font-semibold border-2"
          style={{
            borderColor: '#1B5E5E',
            backgroundColor: '#ffffff',
            color: '#1B5E5E',
          }}
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#1B5E5E' }}>Investment Growth</p>
            <div className="flex gap-2">
              {['line', 'area', 'bar'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className="px-3 py-1 rounded text-xs font-semibold transition-all"
                  style={{
                    background: chartType === type ? '#1B5E5E' : '#f0f0f0',
                    color: chartType === type ? '#ffffff' : '#333333',
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {chartType === 'line' && (
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#1B5E5E" strokeWidth={3} dot={{ fill: '#D4AF37' }} name="Portfolio Value" />
              </LineChart>
            )}
            {chartType === 'area' && (
              <AreaChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Area type="monotone" dataKey="value" stroke="#1B5E5E" fill="#1B5E5E" fillOpacity={0.2} name="Portfolio Value" />
              </AreaChart>
            )}
            {chartType === 'bar' && (
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="value" fill="#1B5E5E" name="Portfolio Value" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #1B5E5E 0%, #2B7A7A 100%)' }}>
            <p className="text-white opacity-80 mb-2">Rate of Return</p>
            <p className="text-4xl font-bold text-white">{roi.toFixed(2)}<span style={{ color: '#D4AF37' }}>%</span></p>
            <p className="text-sm text-white opacity-60 mt-2">Annualized return</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField label={`Present Value (${currencySymbol})`} value={presentValue} onChange={(e) => setPresentValue(e.target.value)} />
          <InputField label={`Future Value (${currencySymbol})`} value={futureValue} onChange={(e) => setFutureValue(e.target.value)} />
          <InputField label="Years to Grow" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

function SIPCalculator() {
  const [sipAmount, setSipAmount] = useState('')
  const [frequency, setFrequency] = useState('monthly')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [chartType, setChartType] = useState('line')
  const [currency, setCurrency] = useState('INR')

  const currencySymbol = currency === 'INR' ? '₹' : '$'

  const calculateSIP = () => {
    const sa = sipAmount === '' ? 0 : Number(sipAmount)
    const r = rate === '' ? 0 : Number(rate)
    const y = years === '' ? 0 : Number(years)
    
    const monthlyRate = r / 12 / 100
    const n = frequency === 'monthly' ? y * 12 : y * 4
    const fv = sa * (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate))
    const totalInvestment = sa * n
    return { fv, totalInvestment, n }
  }

  const { fv, totalInvestment, n } = calculateSIP()

  const generateSIPData = () => {
    const sa = sipAmount === '' ? 0 : Number(sipAmount)
    const r = rate === '' ? 0 : Number(rate)
    const y = years === '' ? 0 : Number(years)
    
    const monthlyRate = r / 12 / 100
    const months = frequency === 'monthly' ? y * 12 : y * 4
    let value = 0
    const data = []
    
    for (let month = 0; month <= months; month += Math.ceil(months / 15)) {
      value = sa * (((Math.pow(1 + monthlyRate, month) - 1) / monthlyRate) * (1 + monthlyRate))
      data.push({ 
        month: Math.round(month), 
        value: Math.round(value),
        invested: sa * month
      })
    }
    return data
  }

  const sipData = generateSIPData()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: '#1B5E5E' }}>SIP Calculator</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-4 py-2 rounded-lg font-semibold border-2"
          style={{
            borderColor: '#1B5E5E',
            backgroundColor: '#ffffff',
            color: '#1B5E5E',
          }}
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#1B5E5E' }}>SIP Growth Over Time</p>
            <div className="flex gap-2">
              {['line', 'area', 'bar'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className="px-3 py-1 rounded text-xs font-semibold transition-all"
                  style={{
                    background: chartType === type ? '#1B5E5E' : '#f0f0f0',
                    color: chartType === type ? '#ffffff' : '#333333',
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {chartType === 'line' && (
              <LineChart data={sipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#1B5E5E" strokeWidth={3} name="Portfolio Value" />
                <Line type="monotone" dataKey="invested" stroke="#D4AF37" strokeWidth={2} strokeDasharray="5 5" name="Total Invested" />
              </LineChart>
            )}
            {chartType === 'area' && (
              <AreaChart data={sipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Area type="monotone" dataKey="value" stroke="#1B5E5E" fill="#1B5E5E" fillOpacity={0.2} name="Portfolio Value" />
              </AreaChart>
            )}
            {chartType === 'bar' && (
              <BarChart data={sipData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="value" fill="#1B5E5E" name="Portfolio Value" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
            <p className="text-sm text-gray-600 mb-1">Total Investment</p>
            <p className="text-2xl font-bold" style={{ color: '#1B5E5E' }}>{currencySymbol}{totalInvestment.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #1B5E5E 0%, #2B7A7A 100%)' }}>
            <p className="text-sm text-white opacity-80 mb-1">Future Value</p>
            <p className="text-2xl font-bold text-white">{currencySymbol}{fv.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField label={`SIP Amount (${currencySymbol})`} value={sipAmount} onChange={(e) => setSipAmount(e.target.value)} />
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#1B5E5E' }}>Investment Frequency</label>
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full px-4 py-3 border-2 rounded-lg" style={{ borderColor: '#1B5E5E', backgroundColor: '#fafafa', color: '#000000' }}>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>
          <InputField label="Expected Rate of Return (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
          <InputField label="Investment Duration (Years)" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>

        <div className="bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <p className="text-sm font-semibold mb-4" style={{ color: '#1B5E5E' }}>Returns Breakdown</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Total Investment', value: totalInvestment },
                  { name: 'Returns', value: fv - totalInvestment },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#1B5E5E" />
                <Cell fill="#D4AF37" />
              </Pie>
              <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function GoalSIPCalculator() {
  const [goalAmount, setGoalAmount] = useState('')
  const [years, setYears] = useState('')
  const [rate, setRate] = useState('')
  const [chartType, setChartType] = useState('line')
  const [currency, setCurrency] = useState('INR')

  const currencySymbol = currency === 'INR' ? '₹' : '$'

  const calculateMonthlySIP = () => {
    const ga = goalAmount === '' ? 0 : Number(goalAmount)
    const y = years === '' ? 0 : Number(years)
    const r = rate === '' ? 0 : Number(rate)
    
    const monthlyRate = r / 12 / 100
    const n = y * 12
    const monthlyPayment = ga / (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate))
    const totalInvestment = monthlyPayment * n
    return { monthlyPayment, totalInvestment }
  }

  const { monthlyPayment, totalInvestment } = calculateMonthlySIP()

  const generateGoalData = () => {
    const ga = goalAmount === '' ? 0 : Number(goalAmount)
    const y = years === '' ? 0 : Number(years)
    const r = rate === '' ? 0 : Number(rate)
    
    const monthlyRate = r / 12 / 100
    const n = y * 12
    let value = 0
    const data = []
    
    for (let month = 0; month <= n; month += Math.ceil(n / 15)) {
      value = monthlyPayment * (((Math.pow(1 + monthlyRate, month) - 1) / monthlyRate) * (1 + monthlyRate))
      data.push({ 
        month: Math.round(month), 
        value: Math.round(value),
        goal: ga
      })
    }
    return data
  }

  const goalData = generateGoalData()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: '#1B5E5E' }}>Goal SIP Calculator</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-4 py-2 rounded-lg font-semibold border-2"
          style={{
            borderColor: '#1B5E5E',
            backgroundColor: '#ffffff',
            color: '#1B5E5E',
          }}
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#1B5E5E' }}>Goal Achievement Progress</p>
            <div className="flex gap-2">
              {['line', 'area', 'bar'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className="px-3 py-1 rounded text-xs font-semibold transition-all"
                  style={{
                    background: chartType === type ? '#1B5E5E' : '#f0f0f0',
                    color: chartType === type ? '#ffffff' : '#333333',
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {chartType === 'line' && (
              <LineChart data={goalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#1B5E5E" strokeWidth={3} name="SIP Value" />
                <Line type="monotone" dataKey="goal" stroke="#D4AF37" strokeWidth={2} strokeDasharray="5 5" name="Goal Amount" />
              </LineChart>
            )}
            {chartType === 'area' && (
              <AreaChart data={goalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Area type="monotone" dataKey="value" stroke="#1B5E5E" fill="#1B5E5E" fillOpacity={0.2} name="SIP Value" />
              </AreaChart>
            )}
            {chartType === 'bar' && (
              <BarChart data={goalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="value" fill="#1B5E5E" name="SIP Value" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
            <p className="text-sm text-gray-600 mb-1">Total Investment</p>
            <p className="text-2xl font-bold" style={{ color: '#1B5E5E' }}>{currencySymbol}{totalInvestment.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C49B1F 100%)' }}>
            <p className="text-sm text-gray-800 mb-1">Monthly SIP Amount</p>
            <p className="text-2xl font-bold text-gray-900">{currencySymbol}{monthlyPayment.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField label={`Goal Amount (${currencySymbol})`} value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} />
          <InputField label="Investment Duration (Years)" value={years} onChange={(e) => setYears(e.target.value)} />
          <InputField label="Expected Rate of Return (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

function PowerOfCompoundingCalculator() {
  const [salary, setSalary] = useState('')
  const [investmentPercent, setInvestmentPercent] = useState('')
  const [salaryGrowth, setSalaryGrowth] = useState('')
  const [investmentYears, setInvestmentYears] = useState('')
  const [returnRate, setReturnRate] = useState('')
  const [chartType, setChartType] = useState('line')
  const [currency, setCurrency] = useState('INR')

  const currencySymbol = currency === 'INR' ? '₹' : '$'

  const calculateCompounding = () => {
    const s = salary === '' ? 0 : Number(salary)
    const ip = investmentPercent === '' ? 0 : Number(investmentPercent)
    const sg = salaryGrowth === '' ? 0 : Number(salaryGrowth)
    const iy = investmentYears === '' ? 0 : Number(investmentYears)
    const rr = returnRate === '' ? 0 : Number(returnRate)
    
    let corpus = 0
    let totalInvested = 0
    let annualInvestment = (s * ip) / 100

    for (let year = 0; year < iy; year++) {
      annualInvestment = annualInvestment * (1 + sg / 100)
      corpus = (corpus + annualInvestment) * (1 + rr / 100)
      totalInvested += annualInvestment
    }

    return { corpus, totalInvested, gains: corpus - totalInvested }
  }

  const { corpus, totalInvested, gains } = calculateCompounding()

  const generateCompoundingData = () => {
    let corpusValue = 0
    let totalInvestedValue = 0
    let annualInvest = (salary * investmentPercent) / 100
    const data = []

    for (let year = 0; year <= investmentYears; year += Math.ceil(investmentYears / 15)) {
      let corp = 0
      let totalInv = 0
      let annInv = (salary * investmentPercent) / 100
      
      for (let y = 0; y < year; y++) {
        annInv = annInv * (1 + salaryGrowth / 100)
        corp = (corp + annInv) * (1 + returnRate / 100)
        totalInv += annInv
      }
      
      data.push({
        year: year,
        corpus: Math.round(corp),
        invested: Math.round(totalInv)
      })
    }
    return data
  }

  const compoundingData = generateCompoundingData()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ color: '#1B5E5E' }}>Power of Compounding Calculator</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-4 py-2 rounded-lg font-semibold border-2"
          style={{
            borderColor: '#1B5E5E',
            backgroundColor: '#ffffff',
            color: '#1B5E5E',
          }}
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl" style={{ border: '1px solid #e0e0e0' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: '#1B5E5E' }}>Wealth Accumulation</p>
            <div className="flex gap-2">
              {['line', 'area', 'bar'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className="px-3 py-1 rounded text-xs font-semibold transition-all"
                  style={{
                    background: chartType === type ? '#1B5E5E' : '#f0f0f0',
                    color: chartType === type ? '#ffffff' : '#333333',
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {chartType === 'line' && (
              <LineChart data={compoundingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Legend />
                <Line type="monotone" dataKey="corpus" stroke="#1B5E5E" strokeWidth={3} name="Total Corpus" />
                <Line type="monotone" dataKey="invested" stroke="#D4AF37" strokeWidth={2} strokeDasharray="5 5" name="Total Invested" />
              </LineChart>
            )}
            {chartType === 'area' && (
              <AreaChart data={compoundingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Area type="monotone" dataKey="corpus" stroke="#1B5E5E" fill="#1B5E5E" fillOpacity={0.2} name="Total Corpus" />
              </AreaChart>
            )}
            {chartType === 'bar' && (
              <BarChart data={compoundingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" tickFormatter={formatYAxisValue} width={80} />
                <Tooltip formatter={(value) => `${currencySymbol}${value.toLocaleString('en-IN')}`} />
                <Bar dataKey="corpus" fill="#1B5E5E" name="Total Corpus" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-lg" style={{ background: '#f5f3f0' }}>
            <p className="text-sm text-gray-600 mb-1">Total Invested</p>
            <p className="text-2xl font-bold" style={{ color: '#1B5E5E' }}>{currencySymbol}{totalInvested.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C49B1F 100%)' }}>
            <p className="text-sm text-gray-800 mb-1">Gains</p>
            <p className="text-2xl font-bold text-gray-900">{currencySymbol}{gains.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #1B5E5E 0%, #2B7A7A 100%)' }}>
            <p className="text-sm text-white opacity-80 mb-1">Final Corpus</p>
            <p className="text-2xl font-bold text-white">{currencySymbol}{corpus.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField label={`Annual Salary (${currencySymbol})`} value={salary} onChange={(e) => setSalary(e.target.value)} />
          <InputField label="Investment % of Salary" value={investmentPercent} onChange={(e) => setInvestmentPercent(e.target.value)} />
          <InputField label="Salary Growth Rate (%) p.a." value={salaryGrowth} onChange={(e) => setSalaryGrowth(e.target.value)} />
          <InputField label="Investment Duration (Years)" value={investmentYears} onChange={(e) => setInvestmentYears(e.target.value)} />
          <InputField label="Average Return Rate (%) p.a." value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: '#1B5E5E' }}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-200"
        style={{ borderColor: '#1B5E5E', backgroundColor: '#fafafa', color: '#000000', fontSize: '16px' }}
      />
    </div>
  )
}
