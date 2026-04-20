export interface Module {
  title: string
  purpose?: string
  topics: string[]
  outcome?: string
}

export interface BundleCourse {
  slug: string
  title: string
  shortTitle: string
  image: string
  price: number
  durationHours: string
  rating: number
  reviews: number
  description: string
}

export interface Course {
  id: string
  slug: string
  title: string
  shortTitle: string
  tagline: string
  image: string
  gifImage?: string
  badge?: string
  price: number
  originalBundlePrice?: number
  pdfPrice: number
  duration: string
  durationHours: string
  level: string
  format: string
  objective: string
  modules: Module[]
  outcomes: string[]
  practicalActivities?: string[]
  rating: number
  reviews: number
  members: string
  color: string
  accentColor: string
  isBundle?: boolean
  bundleCourses?: BundleCourse[]
  includesConsultancy?: boolean
  consultancyPrice?: number
  comingSoon?: boolean
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "basics-of-stock-market",
    title: "Basics of Stock Market",
    shortTitle: "Stock Market Basics",
    tagline: "Build a solid foundation and start your investing journey with confidence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Creative%20What%20is%20Hustle%20Culture%20YouTube%20Thumbnail-l26PtppJj62kMc2azBw3RLASdYrtrb.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Creative%20What%20is%20Hustle%20Culture%20YouTube%20Thumbnail-YS7pEne1sEbIj6KM7sw1FYjf3e0TwZ.gif",
    badge: "Beginner",
    price: 5999,
    pdfPrice: 100,
    duration: "15 Hours",
    durationHours: "15 Hrs",
    level: "Beginner",
    format: "Live Classes",
    comingSoon: true,
    objective:
      "To build a strong foundational understanding of the stock market so that beginners can confidently start their investing journey. The course focuses on financial awareness, understanding market mechanics, basic trading operations, and long-term wealth creation through ETFs, without positioning the stock market as a career.",
    modules: [
      {
        title: "Understanding Money and Wealth Creation",
        purpose: "Build the right financial mindset before introducing markets.",
        topics: [
          "The concept of Money, income, savings, and wealth",
          "Impact of inflation on purchasing power",
          "The power of Compound Interest",
        ],
        outcome: "Students understand why investing is necessary for financial growth.",
      },
      {
        title: "Investment Avenues in India",
        purpose: "Help students compare different options so they see why equities are powerful.",
        topics: [
          "Fixed deposits",
          "Real estate",
          "Gold",
          "Government schemes",
          "Mutual funds",
          "Stocks and ETFs",
        ],
        outcome: "Students understand why equity markets historically outperform most traditional assets.",
      },
      {
        title: "Introduction to the Stock Market",
        purpose: "Explain how the stock market works in simple terms.",
        topics: [
          "What is a stock",
          "Ownership in companies",
          "Why companies list on stock exchanges",
          "Role of investors in the economy",
          "Primary market vs secondary market",
          "SEBI, BSE, and NSE",
        ],
        outcome: "Students understand how the stock market ecosystem functions.",
      },
      {
        title: "Market Participants",
        purpose: "Show who operates in the market.",
        topics: [
          "Retail investors",
          "Institutional investors",
          "Mutual funds",
          "Hedge funds",
          "Traders vs investors",
          "Brokers and intermediaries",
        ],
        outcome: "Students understand how different players influence the market.",
      },
      {
        title: "Demat Accounts and Market Infrastructure",
        purpose: "Help beginners start practically.",
        topics: [
          "What is a Demat account",
          "Depositories (CDSL & NSDL)",
          "Steps to open an account",
          "Documents required",
        ],
        outcome: "Students understand how to access the market safely.",
      },
      {
        title: "How Trading Works (Practical)",
        purpose: "Teach real trading mechanics.",
        topics: [
          "Market hours",
          "Order types: Market, Limit, Stop Loss, Stop Limit",
          "Bid and ask price",
          "Market depth",
          "Trade execution",
        ],
        outcome: "Students learn how to place trades confidently.",
      },
      {
        title: "Introduction to ETFs – Smart Wealth Creation",
        purpose: "Introduce low-risk long-term investing strategy.",
        topics: [
          "What are ETFs",
          "Difference between ETF and mutual fund",
          "Index investing concept",
          "Passive investing",
          "Nifty 50 tracking ETFs",
        ],
        outcome: "Students discover how simple ETF investing can build long-term wealth.",
      },
      {
        title: "Why Most People Fail in the Stock Market",
        purpose: "Prevent beginner mistakes.",
        topics: [
          "Lack of knowledge",
          "Overtrading",
          "Emotional decisions",
          "Following tips",
          "Lack of risk management",
          "Unrealistic expectations",
        ],
        outcome: "Students learn how to avoid the biggest mistakes.",
      },
    ],
    outcomes: [
      "Understand how the stock market works",
      "Know how to open and operate a trading account",
      "Understand the basics of trading and investing",
      "Recognize common mistakes investors make",
      "Learn how to build wealth through ETFs safely over time",
    ],
    rating: 4.8,
    reviews: 312,
    members: "300+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
    id: "2",
    slug: "pro-mutual-fund-investor",
    title: "Pro Mutual Fund Investor",
    shortTitle: "Mutual Fund Mastery",
    tagline: "Master mutual funds and invest like a pro with data-driven decisions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Yellow%20Modern%20Make%20Money%20YouTube%20Thumbnail-p6ObIWKhHJt6lv4ft1P84kRAd3tZ4V.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Yellow%20Modern%20Make%20Money%20YouTube%20Thumbnail%20%281%29-aCUZNsmHZzN6Pyeb0bXsQQ97hf00GT.gif",
    badge: "Beginner",
    price: 999,
    pdfPrice: 100,
    duration: "12 Hours",
    durationHours: "12 Hrs",
    level: "Beginner",
    format: "Live Classes",
    comingSoon: true,
    objective:
      "A comprehensive program that takes complete beginners from understanding money and investing through the stock market, Demat accounts, order placement, and finally to long-term ETF wealth building. The flow is designed to build conviction first, then knowledge, then practical action.",
    modules: [
      {
        title: "Foundation of Investment",
        topics: [
          "Compound Interest",
          "Inflation",
          "Time Value of Money",
        ],
        outcome: "Why long-term investment beats short-term speculation.",
      },
      {
        title: "Understanding Mutual Funds",
        topics: [
          "Concept of Mutual Fund",
          "NAV (Net Asset Value)",
          "Expense Ratio",
          "Fund manager role",
          "AUM (Assets Under Management)",
          "Regular vs Direct Fund",
        ],
        outcome: "Students understand how mutual funds are structured and managed.",
      },
      {
        title: "Types of Funds",
        topics: [
          "Equity funds",
          "Debt funds",
          "Hybrid funds",
          "Index funds",
          "Sector funds",
        ],
        outcome: "Students can identify the right fund type for their goals.",
      },
      {
        title: "Mutual Fund Selection Skills",
        topics: [
          "Rolling Return",
          "Risk Adjusted Returns",
          "Sharpe Ratio",
          "Sortino Ratio",
          "Standard Deviation",
          "Fund manager track record",
        ],
        outcome: "Students can evaluate and select high-quality mutual funds.",
      },
      {
        title: "SIP vs Lump Sum Strategy",
        topics: [
          "Future Value of SIP",
          "Rupee Cost Averaging",
          "Disciplined and automatic investing",
          "Reducing market timing mistakes",
        ],
        outcome: "Students understand the best investment strategy for their situation.",
      },
      {
        title: "Taxation",
        topics: [
          "LTCG (Long Term Capital Gains)",
          "STCG (Short Term Capital Gains)",
          "Debt fund taxation",
          "Indexation benefits",
          "Tax saving funds (ELSS)",
        ],
        outcome: "Students can plan their investments tax-efficiently.",
      },
    ],
    outcomes: [
      "Understand how mutual funds work in depth",
      "Select high-quality funds using data-driven metrics",
      "Build a disciplined SIP-based investment plan",
      "Understand tax implications of mutual fund investments",
      "Differentiate between Regular and Direct plans to save costs",
    ],
    rating: 4.7,
    reviews: 189,
    members: "180+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
  id: "3",
  slug: "technical-analysis",
  title: "Technical Analysis for Traders and Investors",
  shortTitle: "Technical Analysis",
  tagline: "Read price charts, identify trends, and build high-probability trade setups.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-fpSle6BxRJycx6dBI8n3w2q2avSG4s.jpg",
  gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-UrTYuIVSS88p05s3F83bd92x2qiifu.gif",
    badge: "Intermediate",
    price: 5999,
    pdfPrice: 100,
    duration: "30–40 Hours",
    durationHours: "30-40 Hrs",
    level: "Intermediate",
    format: "Live Classes",
    objective:
      "To equip students with the ability to read price charts, identify market trends, and create high-probability trade setups for intraday, swing trading, and long-term investing using technical analysis. The course emphasizes practical chart reading and disciplined money management rather than speculative trading.",
    modules: [
      {
        title: "Foundations of Technical Analysis",
        purpose: "Introduce the philosophy behind technical analysis.",
        topics: [
          "What is technical analysis",
          "Why price reflects market psychology",
          "Core assumptions of technical analysis",
        ],
        outcome: "Students understand why price patterns repeat and how traders analyze them.",
      },
      {
        title: "Understanding Price Charts",
        topics: [
          "Types of charts: Line, Bar, Candlestick",
          "Timeframes: Intraday, Swing, Positional",
          "Importance of multi-timeframe analysis",
        ],
        outcome: "Students develop chart reading ability across different timeframes.",
      },
      {
        title: "Market Structure",
        purpose: "Build the foundation of price movement.",
        topics: [
          "Market trends: Uptrend, Downtrend, Sideways",
          "Understanding swings",
          "Identifying pivots",
          "Higher highs and lower lows",
        ],
        outcome: "Students learn to identify the real direction of the market.",
      },
      {
        title: "Support and Resistance Mastery",
        purpose: "Teach one of the most powerful concepts in trading.",
        topics: [
          "What is support and resistance",
          "Role reversal concept",
          "Psychological price levels",
          "Support resistance zones",
          "Breakout vs false breakout",
        ],
        outcome: "Students develop strong command over key price levels.",
      },
      {
        title: "Trend Lines and Price Channels",
        topics: [
          "Drawing correct trendlines",
          "Valid vs invalid trendlines",
          "Trendline breakouts",
          "Price channels",
          "Trading inside channels",
        ],
        outcome: "Students learn how to visualize market direction clearly.",
      },
      {
        title: "Classical Price Patterns",
        purpose: "Recognize high-probability chart formations.",
        topics: [
          "Double top and double bottom",
          "Head and shoulders",
          "Rounding bottom",
          "Triangles and wedges",
          "Flags",
        ],
        outcome: "Students learn how patterns signal trend continuation or reversal.",
      },
      {
        title: "Candlestick Patterns",
        purpose: "Identify short-term market turning points.",
        topics: [
          "Structure of a candlestick",
          "Market psychology behind candles",
          "Hammer, Shooting Star",
          "Engulfing patterns",
          "Morning Star, Evening Star, Doji",
        ],
        outcome: "Students learn to detect early signs of trend reversal.",
      },
      {
        title: "Fibonacci Analysis",
        topics: [
          "Concept of Fibonacci ratios",
          "Fibonacci retracement",
          "Identifying retracement zones",
          "Combining Fibonacci with support/resistance",
        ],
        outcome: "Students learn how markets retrace before continuing trends.",
      },
      {
        title: "Technical Indicators",
        purpose: "Use indicators to confirm price action.",
        topics: [
          "Moving Averages: Dynamic support and resistance",
          "Multiple moving average strategies",
          "RSI: Momentum, overbought/oversold, divergence",
        ],
        outcome: "Students understand how indicators complement price action.",
      },
      {
        title: "Creating Trade Setups",
        purpose: "Combine all tools into structured trading strategies.",
        topics: [
          "High probability trade setups",
          "Confluence concept",
          "Entry strategies",
          "Stop loss placement",
          "Target calculation",
          "Intraday and swing trading setups",
        ],
        outcome: "Students learn how to build repeatable trading strategies.",
      },
      {
        title: "Technical Analysis for Investing",
        topics: [
          "Identifying long-term trends",
          "Buying during pullbacks",
          "Accumulation zones",
          "Timing entries in long-term investments",
        ],
        outcome: "Students learn how to improve investment timing using technical analysis.",
      },
      {
        title: "The Single Rule of Money Management",
        purpose: "Introduce the most important survival principle.",
        topics: [
          "Risk per trade",
          "Capital protection",
          "Position sizing",
          "Risk-reward ratio",
          "Importance of discipline",
        ],
        outcome: "Students understand that money management determines long-term success.",
      },
    ],
    practicalActivities: [
      "Chart marking exercises",
      "Pattern identification practice",
      "Indicator analysis exercises",
      "Trade setup building",
      "Back testing simple strategies",
    ],
    outcomes: [
      "Read and interpret market charts confidently",
      "Identify trends, support, resistance, and price patterns",
      "Use indicators like moving averages and RSI effectively",
      "Develop structured trade setups for intraday and swing trading",
      "Use technical analysis to improve investment timing",
      "Apply disciplined money management in trading",
    ],
    rating: 4.8,
    reviews: 427,
    members: "420+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
  id: "4",
  slug: "options-pro",
  title: "Options Pro – Mastering Options Trading",
  shortTitle: "Options Trading",
  tagline: "From options basics to advanced strategies — become a skilled options trader.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DvYIG4L277VFgRrtUwW8wHZnhEtbos.jpg",
  gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DmJP9v8oX3FxOAAbaDWPUlbS2a0c3r.gif",
    badge: "Advanced",
    price: 5999,
    pdfPrice: 100,
    duration: "30–40 Hours",
    durationHours: "30-40 Hrs",
    level: "Advanced",
    format: "Live Classes",
    objective:
      "To develop a deep understanding of options trading so that traders can confidently structure, analyze, and execute options strategies for income generation, hedging, and directional trading. The course focuses on practical options mastery and disciplined risk management, enabling traders to become skilled options traders for personal wealth creation.",
    modules: [
      {
        title: "Introduction to Derivatives",
        purpose: "Build a conceptual foundation.",
        topics: [
          "What are derivatives",
          "Purpose of derivatives in financial markets",
          "Hedging vs speculation",
          "Futures vs options",
        ],
        outcome: "Students understand why options exist and how they are used in markets.",
      },
      {
        title: "Fundamentals of Options",
        topics: [
          "What is an option contract",
          "Call option concept",
          "Put option concept",
          "Option buyer vs option seller",
          "Rights vs obligations",
        ],
        outcome: "Students understand the mechanics of options contracts.",
      },
      {
        title: "Option Payoff Structures",
        topics: [
          "Payoff of call buyer and seller",
          "Payoff of put buyer and seller",
          "Risk vs reward structure",
        ],
        outcome: "Students clearly understand how profit and loss behave in options.",
      },
      {
        title: "Option Contract Specifications",
        topics: [
          "Strike price",
          "Expiry date",
          "Lot size",
          "Option premium",
          "Settlement mechanism",
          "Margins",
        ],
        outcome: "Students understand the structure of real market option contracts.",
      },
      {
        title: "Option Pricing Concepts",
        topics: [
          "Intrinsic value and extrinsic value",
          "Time value of options",
          "Moneyness: ITM, ATM, OTM",
        ],
        outcome: "Students learn how options are valued.",
      },
      {
        title: "Open Interest, Volume Analysis and Option Chain",
        topics: [
          "What is open interest",
          "Open interest vs volume",
          "Long buildup, Short buildup",
          "Short covering, Long unwinding",
        ],
        outcome: "Students learn how to read market participation through derivatives data.",
      },
      {
        title: "Implied Volatility",
        topics: [
          "What is volatility",
          "Historical vs implied volatility",
          "Impact of volatility on option premium",
          "Volatility expansion and contraction",
        ],
        outcome: "Students learn how volatility affects option prices.",
      },
      {
        title: "Option Greeks – Core of Options Trading",
        purpose: "Understand sensitivity of options pricing.",
        topics: [
          "Delta",
          "Gamma",
          "Theta",
          "Vega",
        ],
        outcome: "Students understand how options react to price, time, and volatility changes.",
      },
      {
        title: "Option Settlement and Margin System",
        topics: [
          "Options expiry",
          "Physical vs cash settlement",
          "Margin requirements",
          "Span margin and exposure margin",
          "Risk of option selling",
        ],
        outcome: "Students understand capital requirements and settlement processes.",
      },
      {
        title: "Basic Options Strategies",
        purpose: "Teach simple strategies for different market views.",
        topics: [
          "Long call",
          "Long put",
          "Covered call",
          "Cash secured put",
        ],
        outcome: "Students learn income generation techniques using options.",
      },
      {
        title: "Advanced Options Strategies",
        purpose: "Build professional options trading structures.",
        topics: [
          "Bull call spread",
          "Bear put spread",
          "Straddle and Strangle",
          "Iron condor",
          "Butterfly spreads",
        ],
        outcome: "Students understand how to design strategies based on market expectations.",
      },
      {
        title: "Delta Neutral Trading",
        purpose: "Introduce professional trading techniques.",
        topics: [
          "Concept of delta neutrality",
          "Adjusting positions to maintain neutrality",
          "Volatility trading",
          "Hedging option exposure",
        ],
        outcome: "Students learn how professional traders manage risk using delta neutrality.",
      },
      {
        title: "Building Options Trade Setups",
        topics: [
          "Selecting the right strike price",
          "Choosing the right expiry",
          "Entry timing",
          "Position adjustments",
          "Exit strategies",
        ],
        outcome: "Students learn how to structure high-probability option trades.",
      },
      {
        title: "Risk Management in Options Trading",
        topics: [
          "Position sizing",
          "Maximum risk per trade",
          "Avoiding over-leverage",
          "Managing margin requirements",
          "Avoiding emotional trading",
        ],
        outcome: "Students learn how to survive long-term in options trading.",
      },
    ],
    practicalActivities: [
      "Payoff diagram exercises",
      "Options chain analysis",
      "Strategy building exercises",
      "Greeks interpretation practice",
    ],
    outcomes: [
      "Understand options contracts in depth",
      "Interpret option pricing and volatility",
      "Analyze Greeks and option sensitivity",
      "Design professional options strategies",
      "Use options for income generation and hedging",
      "Trade options with structured risk management",
    ],
    rating: 4.8,
    reviews: 356,
    members: "350+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
    id: "5",
    slug: "fundamental-analysis",
    title: "Fundamental Analysis for Investors",
    shortTitle: "Fundamental Analysis",
    tagline: "Identify great companies, evaluate business quality, and invest for the long term.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-pJhTdfPeCKh7TXmoxWIHg32lb7o5GE.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-yt2FEMY0TBDpbTmG6zD0VXOEkRcFkF.gif",
    badge: "Intermediate",
    price: 8999,
    pdfPrice: 100,
    duration: "90–100 Hours",
    durationHours: "90-100 Hrs",
    level: "Intermediate",
    format: "Live Classes",
    objective:
      "To train investors to identify fundamentally strong companies, evaluate business quality, and make informed long-term investment decisions using financial statements, valuation techniques, and practical research tools. The course focuses on wealth creation through disciplined long-term investing, not career-oriented equity research.",
    modules: [
      {
        title: "Why Invest in the Stock Market",
        purpose: "Build conviction about equity investing.",
        topics: [
          "Why businesses create wealth",
          "Equity as ownership in companies",
          "How economic growth benefits investors",
          "Historical returns of equities vs other assets",
          "Power of long-term investing",
          "Nifty 50 and BSE Sensex as benchmarks",
        ],
        outcome: "Students understand why long-term equity investing rewards disciplined investors.",
      },
      {
        title: "Investment Philosophy",
        purpose: "Introduce the mindset of successful investors.",
        topics: [
          "Difference between trading and investing",
          "Concept of buying businesses, not stocks",
          "Margin of safety",
          "Compounding mindset",
          "Long-term investment discipline",
          "Warren Buffett's investment philosophy",
        ],
        outcome: "Students understand how successful investors think about businesses.",
      },
      {
        title: "Understanding Businesses",
        purpose: "Teach students how to evaluate companies beyond stock prices.",
        topics: [
          "Business models",
          "Competitive advantage (economic moats)",
          "Industry structure",
          "Management quality",
          "Corporate governance",
        ],
        outcome: "Students learn how to identify quality businesses.",
      },
      {
        title: "Financial Statements Analysis",
        purpose: "Teach investors how to read company financials.",
        topics: [
          "Income Statement",
          "Balance Sheet",
          "Cash Flow Statement",
        ],
        outcome: "Students learn how companies generate profits and manage finances.",
      },
      {
        title: "Ratio Analysis",
        purpose: "Convert financial data into meaningful insights.",
        topics: [
          "Profitability ratios",
          "Valuation ratios",
          "Financial health ratios",
          "Efficiency ratios",
        ],
        outcome: "Students learn how to evaluate financial performance quickly.",
      },
      {
        title: "Valuation Techniques",
        purpose: "Teach investors how to determine fair value.",
        topics: [
          "Intrinsic value and margin of safety",
          "Growth vs value investing",
          "Discounted Cash Flow (DCF)",
          "Earnings multiple valuation",
          "Asset-based valuation",
        ],
        outcome: "Students learn how to identify undervalued stocks.",
      },
      {
        title: "Practical Stock Screening",
        purpose: "Help investors quickly find potential opportunities.",
        topics: [
          "Stock screeners",
          "Filtering companies based on financial ratios",
          "Identifying growth and value stocks",
          "High ROCE, Low debt, Consistent revenue growth",
        ],
        outcome: "Students learn how to narrow down thousands of stocks into quality candidates.",
      },
      {
        title: "Using AI for Investment Research",
        purpose: "Teach modern research techniques.",
        topics: [
          "Analyzing annual reports faster using AI",
          "Extracting insights from earnings transcripts",
          "Summarizing management commentary",
          "Identifying risks and opportunities",
          "Annual reports, investor presentations, earnings concalls",
        ],
        outcome: "Students learn how technology can accelerate research.",
      },
      {
        title: "Case Studies of Genius Investors",
        purpose: "Learn from the greatest investors in history.",
        topics: [
          "Warren Buffett – Value investing principles, long-term compounding",
          "Peter Lynch – Growth investing philosophy",
        ],
        outcome: "Students learn how great investors think and invest.",
      },
    ],
    practicalActivities: [
      "Financial statement analysis exercises",
      "Ratio analysis practice",
      "Stock screening workshop",
      "Annual report reading exercise",
      "Case study discussions",
    ],
    outcomes: [
      "Understand why long-term stock investing builds wealth",
      "Evaluate businesses using financial statements",
      "Estimate fair value using valuation techniques",
      "Screen stocks efficiently using research tools",
      "Interpret annual reports and management commentary",
    ],
    rating: 4.7,
    reviews: 241,
    members: "230+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
    id: "6",
    slug: "sebi-research-analyst",
    title: "Be a SEBI Registered Research Analyst (BSRRA Program)",
    shortTitle: "SEBI Research Analyst",
    tagline: "Everything you need to become a SEBI Registered Research Analyst — four comprehensive courses (Technical Analysis, Options Pro, Fundamental Analysis, NISM Series XV) combined with end-to-end SEBI registration consultancy. One programme, one price.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Green%20and%20White%20Modern%20Savings%20YouTube%20Thumbnail-0OMvGK58bHNPn33scGUn5Ms74Ye7Yu.jpg",
    gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Green%20and%20White%20Modern%20Savings%20YouTube%20Thumbnail%20%281%29-f8vdGHJC1dq4oYmNhSN0PVxVCT7qUZ.gif",
    badge: "Professional",
    price: 43996,
    originalBundlePrice: 47996,
    pdfPrice: 100,
    duration: "5 Months",
    durationHours: "5 Months",
    level: "Professional",
    format: "Live Classes",
    isBundle: true,
    includesConsultancy: true,
    consultancyPrice: 17000,
    bundleCourses: [
      {
        slug: "technical-analysis",
        title: "Technical Analysis for Traders and Investors",
        shortTitle: "Technical Analysis",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-fpSle6BxRJycx6dBI8n3w2q2avSG4s.jpg",
        gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green%20Modern%20Finance%20Facebook%20Ad-UrTYuIVSS88p05s3F83bd92x2qiifu.gif",
        price: 5999,
        durationHours: "30-40 Hrs",
        rating: 4.8,
        reviews: 427,
        description: "Read price charts, identify high-probability trade setups, and master market structure, patterns, and indicators.",
      },
      {
        slug: "options-pro",
        title: "Options Pro – Mastering Options Trading",
        shortTitle: "Options Pro",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DvYIG4L277VFgRrtUwW8wHZnhEtbos.jpg",
        gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20White%20and%20Black%20Modern%20Social%20Media%20Tips%20YouTube%20Thumbnail-DmJP9v8oX3FxOAAbaDWPUlbS2a0c3r.gif",
        price: 5999,
        durationHours: "30-40 Hrs",
        rating: 4.8,
        reviews: 356,
        description: "From options basics to advanced strategies — Greeks, volatility, delta-neutral trading, and structured risk management.",
      },
      {
        slug: "fundamental-analysis",
        title: "Fundamental Analysis for Investors",
        shortTitle: "Fundamental Analysis",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-pJhTdfPeCKh7TXmoxWIHg32lb7o5GE.jpg",
        gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Navy%20and%20Yellow%20Modern%20Professional%20YouTube%20Thumbnail-yt2FEMY0TBDpbTmG6zD0VXOEkRcFkF.gif",
        price: 8999,
        durationHours: "90-100 Hrs",
        rating: 4.7,
        reviews: 241,
        description: "Evaluate businesses, read financial statements, apply valuation techniques, and invest in fundamentally strong companies.",
      },
      {
        slug: "nism-research-analyst",
        title: "NISM Series XV – Research Analyst Certification",
        shortTitle: "NISM Series XV",
        image: "/nism-how-to-crack.jpg",
        price: 5999,
        durationHours: "60 Hrs",
        rating: 4.8,
        reviews: 74,
        description: "Complete preparation for the NISM Series XV certification exam — the mandatory certification requirement for SEBI RA registration.",
      },
    ],
    objective:
      "To develop highly skilled market professionals capable of analyzing financial markets, evaluating companies, and generating research insights, while also preparing participants for the Research Analyst certification and registration process under the guidelines of SEBI. The program integrates investment knowledge, trading expertise, fundamental research, technical analysis, and derivatives understanding into one comprehensive training pathway.",
    modules: [
      {
        title: "Foundations of Financial Markets",
        topics: [
          "Core understanding of money and investing principles",
          "Stock market ecosystem",
          "Financial instruments overview",
        ],
        outcome: "Students build comprehensive understanding of financial markets.",
      },
      {
        title: "Equity Investing and Wealth Creation",
        topics: [
          "Long-term investing philosophy",
          "ETFs and index investing",
          "Compounding and portfolio building",
        ],
        outcome: "Students understand equity investing and wealth creation strategies.",
      },
      {
        title: "Technical Analysis and Market Behavior",
        topics: [
          "Chart reading and price action",
          "Trends, patterns and indicators",
          "Trade setup construction",
        ],
        outcome: "Students master technical analysis tools for market analysis.",
      },
      {
        title: "Options and Derivatives Mastery",
        topics: [
          "Options concepts and Greeks",
          "Volatility analysis",
          "Strategies and risk management",
        ],
        outcome: "Students develop professional-grade options trading knowledge.",
      },
      {
        title: "Fundamental Analysis and Business Evaluation",
        topics: [
          "Financial statement analysis",
          "Valuation techniques",
          "Economic moats and stock selection",
        ],
        outcome: "Students can conduct comprehensive fundamental analysis.",
      },
      {
        title: "Professional Market Research Techniques",
        topics: [
          "Company research and industry analysis",
          "Annual report interpretation",
          "Concall analysis",
          "AI-assisted research",
        ],
        outcome: "Students develop professional research capabilities.",
      },
      {
        title: "NISM Research Analyst Certification Preparation",
        topics: [
          "NISM Series XV Research Analyst Certification Examination preparation",
          "Mock tests and practice papers",
        ],
        outcome: "Students are prepared for the NISM certification exam.",
      },
      {
        title: "Regulatory Framework and Compliance",
        topics: [
          "Regulations governing research analysts under SEBI",
          "Compliance requirements",
          "Professional ethics",
        ],
        outcome: "Students understand the regulatory landscape for research analysts.",
      },
      {
        title: "Guidance for Research Analyst Registration",
        topics: [
          "Eligibility requirements",
          "Documentation process",
          "Application submission",
          "Compliance requirements for SEBI registration",
        ],
        outcome: "Students receive step-by-step guidance toward RA registration.",
      },
    ],
    outcomes: [
      "Develop comprehensive expertise in financial markets",
      "Master both trading and investing frameworks",
      "Gain strong analytical and research capabilities",
      "Be prepared for the NISM Research Analyst certification",
      "Receive guidance toward applying for SEBI Research Analyst registration",
    ],
    rating: 4.9,
    reviews: 98,
    members: "90+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
  {
  id: "7",
  slug: "nism-research-analyst",
  title: "NISM Series XV – Research Analyst Certification",
  shortTitle: "NISM Series XV",
  tagline: "Master the NISM Series XV exam and fulfil the mandatory requirement to register as a SEBI Research Analyst.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Yellow%20and%20Red%20Bold%20Success%20YouTube%20Thumbnail-K2dIc89DY3kndZ2UILdr5XUZo4q4lh.jpg",
  gifImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Yellow%20and%20Red%20Bold%20Success%20YouTube%20Thumbnail-0jOKxe5cU5lj5z4WoKyL7l2fEzoyK8.gif",
    badge: "Professional",
    price: 5999,
    pdfPrice: 199,
    duration: "60 Hours",
    durationHours: "60 Hrs",
    level: "Intermediate",
    format: "Live Classes",
    objective:
      "This examination aims to build a basic understanding of the Indian securities market, including equity and debt segments, key market terms, and the foundations of fundamental research. It covers macroeconomic, industry, and company analysis, along with core concepts such as risk and return, valuation, corporate actions, and the essential features of a well-structured research report. It is also a primary requirement to get yourself registered as a Research Analyst with SEBI.",
    modules: [
      {
        title: "Introduction to Research Analyst Profession",
        topics: [
          "Primary role of a Research Analyst",
          "Primary responsibilities of a Research Analyst",
          "Basic principles of interaction with companies and/or clients",
          "Important qualities desired in a Research Analyst",
        ],
        outcome: "Understand the professional standards and ethical responsibilities of a Research Analyst.",
      },
      {
        title: "Introduction to Securities Market",
        topics: [
          "Definition of Securities and basics of securities markets",
          "Equity shares, debentures, bonds, warrants, indices, mutual fund units, ETFs, hybrids",
          "Primary market: IPO, FPO, Private Placement, QIPs, Rights and Bonus issue",
          "Secondary market: OTC and exchange traded markets, trading, clearing and settlement",
          "Market participants: intermediaries, institutional, retail, and corporate",
          "Securities market transactions: futures, options, swaps, arbitrage",
          "Dematerialisation and rematerialisation of securities",
        ],
        outcome: "Students understand how the securities market ecosystem functions end-to-end.",
      },
      {
        title: "Terminology in Equity and Debt Markets",
        topics: [
          "Equity market terms: face value, book value, market capitalisation, EPS, P/E, P/B",
          "Debt market terms: coupon rate, maturity, YTM, duration, current yield",
          "Types of bonds: zero coupon, floating rate, convertible, perpetual, inflation protection",
          "Commodity market terms: spot price, basis, contango, backwardation, cost of carry",
        ],
        outcome: "Students build a strong vocabulary for both equity and debt market analysis.",
      },
      {
        title: "Fundamentals of Research",
        topics: [
          "Active vs passive investing",
          "Role of research in investment activity",
          "Insider information vs mosaic analysis",
          "Technical analysis, fundamental analysis, quantitative analysis",
          "Behavioural finance approach to equity investing",
          "Commodity research: supply, demand, seasonality, geopolitical developments",
          "Impact of commodity markets on equity markets",
        ],
        outcome: "Students understand the different research frameworks used by professionals.",
      },
      {
        title: "Economic Analysis",
        topics: [
          "Microeconomics and macroeconomics basics",
          "National income, savings, investments, inflation, interest rates",
          "Fiscal and monetary policies and their impact",
          "International trade, exchange rate, trade deficit, globalisation",
          "Secular, cyclical and seasonal economic trends",
        ],
        outcome: "Students learn how macro forces influence markets and investment decisions.",
      },
      {
        title: "Industry Analysis",
        topics: [
          "Role of industry analysis in fundamental analysis",
          "Industry cyclicality, market sizing, trend analysis",
          "Michael Porter's five force model, PESTLE analysis, BCG analysis",
          "Key industry specific KPIs and unit economics",
          "Regulatory and taxation aspects of businesses",
        ],
        outcome: "Students can evaluate any industry's attractiveness and competitive dynamics.",
      },
      {
        title: "Company Analysis – Business and Governance",
        topics: [
          "Business models and pricing power",
          "Competitive advantages and SWOT analysis",
          "Quality of management, corporate governance, promoters' holding",
          "ESG analysis and business risk assessment",
          "Credit rating history and its significance",
        ],
        outcome: "Students can assess the quality of a business and its management.",
      },
      {
        title: "Company Analysis – Financial Analysis",
        topics: [
          "Balance sheet, profit & loss, and cash flow statement analysis",
          "Key profitability, return, leverage, liquidity, and efficiency ratios",
          "DuPont analysis and peer comparison",
          "Equity dilution history, corporate actions history, insider transactions",
          "Reading audit reports for accounting quality assessment",
        ],
        outcome: "Students can perform a full financial deep-dive on any listed company.",
      },
      {
        title: "Corporate Actions",
        topics: [
          "Dividend, rights issue, bonus issue, stock split, share consolidation",
          "Mergers, acquisitions, demergers, scheme of arrangement",
          "Loan restructuring, buyback of shares, delisting and relisting, share swap",
        ],
        outcome: "Students understand the impact of corporate actions on stock prices and shareholder value.",
      },
      {
        title: "Valuation Principles",
        topics: [
          "Price vs value distinction",
          "Discounted Cash Flow (DCF) model",
          "Relative valuations: P/E, P/B, EV/EBITDA, EV/Sales, PEG ratio",
          "Sum-of-the-parts (SOTP) valuation",
          "New age economy valuation parameters",
          "Capital Asset Pricing Model (CAPM)",
        ],
        outcome: "Students can estimate the intrinsic value of a business using multiple frameworks.",
      },
      {
        title: "Fundamental Analysis of Commodities",
        topics: [
          "Supply-demand dynamics of commodities",
          "Currency and dollar index impact on commodities",
          "Crop reports, weather reports for agri commodities",
          "Inventory data, production and consumption trends",
          "Government policies and geopolitical factors",
          "Hedging in commodities: hedge ratio, advantages and disadvantages",
        ],
        outcome: "Students understand how to analyse commodity markets and their link to equities.",
      },
      {
        title: "Fundamentals of Risk and Return",
        topics: [
          "Simple, annualised and compounded return calculations",
          "Types of investment risk: inflation, interest rate, business, market, credit, liquidity",
          "Market risk (Beta), sensitivity analysis, margin of safety",
          "Risk-adjusted returns: Jensen's Alpha, Sharpe ratio, Treynor's ratio",
          "Behavioural biases: loss-aversion, confirmation bias, anchoring, herd mentality",
        ],
        outcome: "Students master risk-return frameworks for professional investment decisions.",
      },
      {
        title: "Qualities of a Good Research Report",
        topics: [
          "Qualities of a good research report and rating conventions",
          "Checklist-based approach to research reports",
          "Constituents of the research report checklist",
        ],
        outcome: "Students learn the professional standards for producing equity research reports.",
      },
      {
        title: "Legal and Regulatory Environment",
        topics: [
          "Regulatory bodies: SEBI, RBI, MoF, MCA, IRDA, PFRDA, IBBI, WDRA",
          "SEBI Act 1992, Securities Contract Act 1956",
          "SEBI (Research Analyst) Regulations 2014",
          "SEBI Prohibition of Insider Trading Regulations 2015",
          "Code of conduct for Research Analysts, conflict of interest management",
          "ASM and GSM surveillance mechanisms",
        ],
        outcome: "Students understand the complete legal and compliance landscape for Research Analysts.",
      },
      {
        title: "Technical Analysis",
        topics: [
          "Concept of technical analysis and Dow Theory",
          "Types of charts and chart patterns",
          "Market trends, reversal patterns, consolidation patterns",
          "Support and resistance, trendlines and channels",
          "Technical indicators",
        ],
        outcome: "Students gain foundational technical analysis skills required for the NISM XV exam.",
      },
    ],
    outcomes: [
      "Clear the NISM Series XV Research Analyst certification examination",
      "Build a thorough understanding of Indian securities markets",
      "Perform industry, company, and financial analysis professionally",
      "Understand valuation principles and risk-return frameworks",
      "Meet the mandatory certification requirement for SEBI RA registration",
    ],
    rating: 4.8,
    reviews: 74,
    members: "70+",
    color: "#1B5E5E",
    accentColor: "#D4AF37",
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export const consultancyService = {
  slug: "sebi-ra-consultancy",
  title: "SEBI Research Analyst Registration Consultancy",
  shortTitle: "RA Registration Consultancy",
  tagline: "From Eligibility to Approval — We Handle Everything.",
  badge: "Professional Service",
  price: 17000,
  bsrraPrice: 0, // Included free in BSRRA bundle
  duration: "Till Approval",
  level: "Professional Service",
  stats: {
    successRate: "100%",
    stages: 4,
    clients: "90+",
    standalonePrice: 17000,
  },
  steps: [
    {
      number: "01",
      title: "Eligibility Check & Strategy Call",
      description: "We evaluate your profile — education, certifications, and experience — against SEBI eligibility norms. We identify any gaps, determine the correct applicant type, and define your registration strategy before a single document is prepared.",
      points: [
        "Profile evaluation against current SEBI norms",
        "Certification gap analysis and recommendations",
        "Correct applicant type determination",
        "Strategic road map before any paperwork begins",
      ],
    },
    {
      number: "02",
      title: "Documentation Planning & Setup",
      description: "We provide a complete tailored document checklist and guide you on the correct format for every paper. Our team drafts the declarations and undertakings and thoroughly reviews every document before submission.",
      points: [
        "Complete personalised document checklist",
        "Correct format guidance for each document",
        "Drafting of declarations and undertakings",
        "Full document review and correction before submission",
      ],
    },
    {
      number: "03",
      title: "SEBI Application Filing",
      description: "We handle the complete SEBI portal registration and application filing — from correct document uploads and writing the business description to ensuring zero technical errors on every submission.",
      points: [
        "Complete SEBI RA application filing",
        "Portal registration and login handling",
        "Professional business description writing",
        "Zero technical error guarantee on submission",
      ],
    },
    {
      number: "04",
      title: "Query Handling & Follow-Ups",
      description: "SEBI queries are handled professionally by our team. We draft replies on your behalf, modify documents as required, and follow up continuously with your registration officer until approval is granted.",
      points: [
        "Professional handling of all SEBI queries",
        "Reply drafting and document modification as needed",
        "Continuous follow-up at every stage",
        "Document modification as required",
      ],
    },
  ],
  differentiators: [
    {
      title: "Zero Errors on Submission",
      description: "Every document is reviewed, corrected, and verified by our team before it reaches SEBI. We have a zero-error submission policy.",
    },
    {
      title: "Full Query Management",
      description: "All queries are handled entirely by us. You will not need to draft a single reply or make a SEBI portal entry on your own.",
    },
    {
      title: "Tailored for Your Profile",
      description: "No generic templates. Every document checklist, draft, and strategy is customised to your specific educational background and experience.",
    },
    {
      title: "Continuous Follow-Up",
      description: "We follow up with SEBI at every stage and keep you informed of progress until your registration certificate is in your hands.",
    },
    {
      title: "Exam Guidance Included",
      description: "NISM Series XV guides you through the preparation, registration process, and scheduling so you clear it on the first attempt.",
    },
    {
      title: "Post-Registration Support",
      description: "Our relationship does not end at approval. We assist with compliance obligations, renewal timelines, and ongoing SEBI requirements.",
    },
  ],
  faqs: [
    {
      question: "Who is eligible to apply for SEBI Research Analyst registration?",
      answer: "Any individual or entity meeting SEBI's educational requirements (minimum a graduate degree with relevant certification) can apply. We conduct a detailed eligibility check on our strategy call to assess your specific profile and advise on any certifications you may need.",
    },
    {
      question: "How long does the SEBI RA registration process take?",
      answer: "The timeline depends on SEBI's processing and the completeness of your application. A well-prepared submission typically receives a decision within 30–90 days. Our team ensures your application is complete and error-free to minimise delays.",
    },
    {
      question: "Do I need to appear for any exam?",
      answer: "Yes. SEBI requires the NISM Series XV Research Analyst certification. The BSRRA programme includes complete NISM Series XV preparation. If you are enrolling for standalone consultancy, you should ideally have cleared or be preparing for NISM Series XV.",
    },
    {
      question: "Is this consultancy only for first-time applicants?",
      answer: "No. We assist both first-time applicants and individuals whose applications were previously rejected or who received SEBI queries they were unsure how to respond to.",
    },
    {
      question: "What happens if SEBI raises queries after filing?",
      answer: "We handle all SEBI queries end-to-end on your behalf — drafting professional replies, modifying documents, and resubmitting as required. There are no additional charges for query handling.",
    },
  ],
}
