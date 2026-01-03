import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import type React from "react"
import "./globals.css"

const promptThai = Prompt({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  style: ["normal", "italic"],
  variable: "--font-prompt",
})

export const metadata: Metadata = {
  title: "KuyTrade - เครื่องมือเทรด AI ฟรี สำหรับนักเทรดไทย",
  description:
    "อินดิเคเตอร์และเครื่องมือวิเคราะห์ TradingView ระดับมืออาชีพ ฟรี 100% รองรับ Forex, Crypto, หุ้น พร้อม AI และกราฟเรียลไทม์",
  keywords: "trading indicators, forex, crypto, bitcoin, tradingview, thai trader, เทรด, อินดิเคเตอร์",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`${promptThai.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}