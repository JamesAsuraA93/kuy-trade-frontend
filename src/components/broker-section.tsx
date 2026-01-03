"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const brokers = [
  {
    name: "iMel",
    logo: "/imel-logo.jpg",
    link: "https://www.imel.com",
  },
  {
    name: "Binance",
    logo: "/binance-logo.jpg",
    link: "https://www.binance.com",
  },
  {
    name: "VT Markets",
    logo: "/vt-markets-logo.jpg",
    link: "https://www.vtmarkets.com",
  },
  {
    name: "Polarlyst",
    logo: "/polarlyst-logo.jpg",
    link: "https://www.polarlyst.com",
  },
  {
    name: "FBS",
    logo: "/fbs-logo.jpg",
    link: "https://www.fbs.com",
  },
  {
    name: "FXGT",
    logo: "/fxgt-logo.jpg",
    link: "https://www.fxgt.com",
  },
  {
    name: "Exness",
    logo: "/exness-logo.png",
    link: "https://www.exness.com",
  },
  {
    name: "AvaTrade",
    logo: "/avatrade-logo.jpg",
    link: "https://www.avatrade.com",
  },
  {
    name: "Pocket Option",
    logo: "/pocket-option-logo.jpg",
    link: "https://www.pocketoption.com",
  },
  {
    name: "Finnomena",
    logo: "/finnomena-logo.jpg",
    link: "https://www.finnomena.com",
  },
]

export function BrokerSection() {
  // ทำซ้ำ array 2 รอบเพื่อให้ animation ต่อเนื่อง
  const duplicatedBrokers = [...brokers, ...brokers]

  return (
    <section id="broker" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* หัวข้อตรงกลาง ตัวใหญ่ */}
        <div className="mb-16 text-center">
          <h2 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            มาตรฐานที่ได้รับความเชื่อถือ
            <br />
            จาก<span className="text-blue-600">โบรกเกอร์ชั้นนำ</span>
            <br />
            กว่า <span className="text-green-600">10 ราย</span>
          </h2>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex gap-8 py-8" style={{ animation: "scroll 30s linear infinite" }}>
            {duplicatedBrokers.map((broker, index) => (
              <a
                key={`${broker.name}-${index}`}
                href={broker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-6 shadow-2xl transition-all hover:scale-110 hover:shadow-3xl"
              >
                <Image
                  src={broker.logo || "/placeholder.svg"}
                  alt={broker.name}
                  width={150}
                  height={100}
                  className="h-auto w-full object-contain transition-all group-hover:scale-105"
                />
              </a>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent" />
        </div>

        {/* Call to action */}
        <div className="rounded-xl border-2 border-green-200 bg-green-50 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">มีโบรกเกอร์ที่คุณชอบอยู่แล้ว?</h3>
          <p className="mb-4 text-gray-600">KuyTrade รองรับทุกโบรกเกอร์ เพียงเชื่อมต่อ TradingView แล้วเริ่มเทรดได้เลย</p>
          <Button size="lg" className="bg-blue-600 font-semibold text-white hover:bg-blue-700">
            เริ่มใช้งาน KuyTrade ฟรี
          </Button>
        </div>
      </div>
    </section>
  )
}
