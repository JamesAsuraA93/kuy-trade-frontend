"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Activity, BarChart3, Target, Layers, Cpu } from "lucide-react"

const indicators = [
  {
    icon: TrendingUp,
    title: "Smart Trend Analyzer",
    description: "วิเคราะห์เทรนด์แบบอัจฉริยะด้วย AI พร้อมสัญญาณซื้อขายแม่นยำ",
    color: "from-blue-500 to-blue-600",
    features: ["Real-time signals", "Multi-timeframe", "Auto trend lines"],
  },
  {
    icon: Activity,
    title: "Volume Flow Detector",
    description: "ตรวจจับการไหลของปริมาณการซื้อขายแบบเรียลไทม์",
    color: "from-green-500 to-green-600",
    features: ["Volume analysis", "Money flow", "Smart alerts"],
  },
  {
    icon: BarChart3,
    title: "Support & Resistance AI",
    description: "หาแนวรับ-แนวต้านอัตโนมัติด้วยปัญญาประดิษฐ์",
    color: "from-purple-500 to-purple-600",
    features: ["Auto levels", "Dynamic zones", "Breakout alerts"],
  },
  {
    icon: Target,
    title: "Entry & Exit Pro",
    description: "จุดเข้าและออกที่แม่นยำพร้อมการจัดการความเสี่ยง",
    color: "from-orange-500 to-orange-600",
    features: ["Perfect timing", "Risk management", "Take profit zones"],
  },
  {
    icon: Layers,
    title: "Multi-Timeframe Scanner",
    description: "สแกนหลายไทม์เฟรมพร้อมกันเพื่อหาโอกาสที่ดีที่สุด",
    color: "from-pink-500 to-pink-600",
    features: ["MTF analysis", "Pattern detection", "Correlation finder"],
  },
  {
    icon: Cpu,
    title: "Scalper Bot Premium",
    description: "บอทเทรดระยะสั้นสำหรับนักเทรดมืออาชีพ",
    color: "from-cyan-500 to-cyan-600",
    features: ["High-frequency", "Low risk", "Auto execution"],
  },
]

export function IndicatorsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="indicators" className="bg-gradient-to-b from-white to-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            อินดิเคเตอร์ที่<span className="text-accent">ทรงพลัง</span>ที่สุด
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            เครื่องมือวิเคราะห์ทางเทคนิคแบบครบวงจร ใช้งานง่าย แม่นยำ และฟรี 100%
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-xl"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={`bg-gradient-to-br ${indicator.color} p-6 text-white`}>
                  <Icon className="mb-4 h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold">{indicator.title}</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-muted-foreground">{indicator.description}</p>
                  <ul className="space-y-2">
                    {indicator.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-4 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                    ดูรายละเอียด
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-accent font-semibold text-white hover:bg-accent/90">
            ดูอินดิเคเตอร์ทั้งหมด 20+ ตัว
          </Button>
        </div>
      </div>
    </section>
  )
}
