"use client"

import Image from "next/image"

export function BrokerCarousel() {
  const brokerLogos = [
    { name: "iMel", src: "/imel-logo.jpg" },
    { name: "Binance", src: "/binance-logo.jpg" },
    { name: "VT Markets", src: "/vt-markets-logo.jpg" },
    { name: "Polarlyst", src: "/polarlyst-logo.jpg" },
    { name: "FBS", src: "/fbs-logo.jpg" },
    { name: "FXGT", src: "/fxgt-logo.jpg" },
    { name: "Exness", src: "/exness-logo.png" },
    { name: "AvaTrade", src: "/avatrade-logo.jpg" },
    { name: "Pocket Option", src: "/pocket-option-logo.jpg" },
    { name: "Finnomena", src: "/finnomena-logo.jpg" },
  ]

  // ทำซ้ำ array เพื่อให้ animation ต่อเนื่อง
  const duplicatedLogos = [...brokerLogos, ...brokerLogos]

  return (
    <div className="pt-8" suppressHydrationWarning>
      <p className="mb-6 text-center text-lg font-semibold text-gray-900 md:text-xl">
        มาตรฐานที่ได้รับความเชื่อถือจาก{" "}
        <span className="text-blue-600">โบรกเกอร์ชั้นนำ</span>{" "}
        กว่า <span className="text-green-600">10 ราย</span>
      </p>

      {/* Infinite Scroll Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {duplicatedLogos.map((broker, index) => (
            <div
              key={`${broker.name}-${index}`}
              className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-md transition-transform hover:scale-110"
            >
              <Image
                src={broker.src || "/placeholder.svg"}
                alt={broker.name}
                width={100}
                height={60}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
