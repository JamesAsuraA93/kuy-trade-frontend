"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IndicatorsShowcase } from "@/components/indicators-showcase"
import { TradingChart } from "@/components/trading-chart"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { BrokerSection } from "@/components/broker-section"
import { Footer } from "@/components/footer"
import { WelcomePopup } from "@/components/welcome-popup"

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem("kuytrade-visited")
    if (!hasVisited) {
      setTimeout(() => setShowPopup(true), 1000)
    }
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
    localStorage.setItem("kuytrade-visited", "true")
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection />
      <TradingChart />
      <IndicatorsShowcase />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <BrokerSection />
      <Footer />
      <WelcomePopup open={showPopup} onClose={handleClosePopup} />
    </main>
  )
}
