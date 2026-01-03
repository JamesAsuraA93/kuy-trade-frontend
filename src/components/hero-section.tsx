"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Image from "next/image"
import { BrokerCarousel } from "./broker-carousel"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-green-50 py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Zap className="h-4 w-4" />
              <span>Build your Investment Port now</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              เทรดกับ <span className="text-gray-800">&quot;คุยเทรด&quot;</span>
              <br />
              <span className="text-green-600">รับเครื่องมือเทรด AI ฟรี!</span>
            </h1>

            <p className="text-pretty text-lg text-gray-600 md:text-xl">
              การเทรด Forex, Gold และ CFD มีความเสี่ยงสูงต่อเงินทุนของคุณ ใช้งานอินดิเคเตอร์ระดับมืออาชีพฟรี ไม่มีค่าใช้จ่าย
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 text-lg font-semibold text-white hover:bg-blue-700">
                Trade Now!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 bg-transparent text-lg font-semibold text-blue-600 hover:bg-blue-50"
              >
                ดูตัวอย่าง
              </Button>
            </div>

            {/* Broker Carousel Component */}
            <BrokerCarousel />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/157994.jpg"
                alt="KuyTrade Platform"
                fill
                className="rounded-xl object-contain shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
