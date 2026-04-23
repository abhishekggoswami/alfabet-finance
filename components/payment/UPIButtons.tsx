"use client"

import Image from "next/image"

interface UPIButtonsProps {
  upiLink: string
}

const UPI_APPS = [
  {
    name: "PhonePe",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone_pay-removebg-preview-qgzODbuyrErzbNndriyjS7y50DB4vT.png",
    bg: "#f3eeff",
    scheme: "phonepe",
  },
  {
    name: "GPay",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google_pay_logo-removebg-preview-2mAM7MP8GkVBITrDJF0EgfllTyhw8H.png",
    bg: "#f0f4ff",
    scheme: "tez",
  },
  {
    name: "Paytm",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-removebg-preview-pNkpXajTdQOFfBw79ivxqqsT1u8e8a.png",
    bg: "#f0f4ff",
    scheme: "paytmqr",
  },
  {
    name: "BHIM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhim_logo-removebg-preview-TWywT2ZBZaWneR5hco50AzZ1K2cm3h.png",
    bg: "#f5f5f5",
    scheme: "upi",
  },
]

export default function UPIButtons({ upiLink }: UPIButtonsProps) {
  const getAppSpecificLink = (app: typeof UPI_APPS[0]) => {
    // Extract the base UPI parameters from the standard upiLink
    const upiParams = new URL(upiLink).searchParams
    const pa = upiParams.get("pa")
    const pn = upiParams.get("pn")
    const am = upiParams.get("am")
    const cu = upiParams.get("cu")
    const tn = upiParams.get("tn")

    // Build app-specific URL with the appropriate scheme
    // Different apps use different URL structures
    if (app.scheme === "phonepe") {
      return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}&app=phonepe`
    } else if (app.scheme === "paytmqr") {
      return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}&app=paytm`
    } else if (app.scheme === "tez") {
      return `tez://upi/pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`
    } else {
      // BHIM and default UPI
      return `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`
    }
  }

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {UPI_APPS.map((app) => (
        <a
          key={app.name}
          href={getAppSpecificLink(app)}
          className="flex flex-col items-center gap-1.5 group"
          title={`Pay with ${app.name}`}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg overflow-hidden p-2"
            style={{ background: app.bg, border: "1.5px solid rgba(0,0,0,0.07)" }}
          >
            <Image
              src={app.logo}
              alt={app.name}
              width={48}
              height={48}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <span className="font-sans text-[10px] font-medium transition-colors duration-200 group-hover:text-[#1B5E5E]" style={{ color: "#888888" }}>
            {app.name}
          </span>
        </a>
      ))}
    </div>
  )
}

