"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, BarChart3, Zap } from "lucide-react"

interface Candle {
  time: number
  open: number
  high: number
  low: number
  close: number
}

const forexPairs = [
  { symbol: "XAU/USD", name: "Gold", basePrice: 2650 },
  { symbol: "EUR/USD", name: "Euro", basePrice: 1.05 },
  { symbol: "GBP/USD", name: "Pound", basePrice: 1.27 },
  { symbol: "USD/JPY", name: "Yen", basePrice: 149.5 },
]

function generateCandles(basePrice: number, count: number): Candle[] {
  const candles: Candle[] = []
  const variance = basePrice > 100 ? 5 : 0.005

  for (let i = 0; i < count; i++) {
    const price = basePrice + (Math.random() - 0.5) * variance * 2
    candles.push({
      time: Date.now() - (count - i) * 60000,
      open: price + (Math.random() - 0.5) * variance,
      high: price + Math.random() * variance,
      low: price - Math.random() * variance,
      close: price + (Math.random() - 0.5) * variance,
    })
  }

  return candles
}

export default function TradeNowPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [candles, setCandles] = useState<Candle[]>([])
  const [currentPrice, setCurrentPrice] = useState<number>(2650.5)
  const [priceChange, setPriceChange] = useState<number>(0)
  const [volume24h] = useState<number>(125.8)
  const [selectedPair, setSelectedPair] = useState<string>("XAU/USD")

  const firstPriceRef = useRef<number>(2650.5)
  const isInitializedRef = useRef<boolean>(false)

  // Initialize data when pair changes
  useEffect(() => {
    const selectedData = forexPairs.find((p) => p.symbol === selectedPair)
    const basePrice = selectedData?.basePrice || 2650

    const initialCandles = generateCandles(basePrice, 100)
    const lastPrice = initialCandles[initialCandles.length - 1]?.close || basePrice

    firstPriceRef.current = initialCandles[0]?.close || basePrice
    setCandles(initialCandles)
    setCurrentPrice(lastPrice)
    setPriceChange(0)
    isInitializedRef.current = true
  }, [selectedPair])

  // Set up interval for updates
  useEffect(() => {
    if (!isInitializedRef.current) return

    const selectedData = forexPairs.find((p) => p.symbol === selectedPair)
    const basePrice = selectedData?.basePrice || 2650
    const variance = basePrice > 100 ? 5 : 0.005

    const interval = setInterval(() => {
      const price = basePrice + (Math.random() - 0.5) * variance * 2

      const newCandle: Candle = {
        time: Date.now(),
        open: price + (Math.random() - 0.5) * variance,
        high: price + Math.random() * variance,
        low: price - Math.random() * variance,
        close: price + (Math.random() - 0.5) * variance,
      }

      setCandles((prev) => [...prev.slice(-99), newCandle])
      setCurrentPrice(newCandle.close)

      const change = ((newCandle.close - firstPriceRef.current) / firstPriceRef.current) * 100
      setPriceChange(change)
    }, 3000)

    return () => clearInterval(interval)
  }, [selectedPair])

  // Draw chart
  useEffect(() => {
    if (!canvasRef.current || candles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const width = canvas.width
    const height = canvas.height
    const padding = 60

    const prices = candles.flatMap((c) => [c.high, c.low])
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    const priceRange = maxPrice - minPrice || 1

    // Draw grid
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    for (let i = 0; i <= 5; i++) {
      const y = padding + ((height - 2 * padding) * i) / 5
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()

      const price = maxPrice - (priceRange * i) / 5
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px Arial"
      ctx.textAlign = "right"
      const decimals = currentPrice > 100 ? 2 : 4
      ctx.fillText(`$${price.toFixed(decimals)}`, padding - 10, y + 4)
    }

    // Draw candlesticks
    const candleWidth = Math.max(2, (width - 2 * padding) / candles.length - 2)

    candles.forEach((candle, i) => {
      const x = padding + (i * (width - 2 * padding)) / candles.length
      const yHigh = padding + (height - 2 * padding) * (1 - (candle.high - minPrice) / priceRange)
      const yLow = padding + (height - 2 * padding) * (1 - (candle.low - minPrice) / priceRange)
      const yOpen = padding + (height - 2 * padding) * (1 - (candle.open - minPrice) / priceRange)
      const yClose = padding + (height - 2 * padding) * (1 - (candle.close - minPrice) / priceRange)

      const isGreen = candle.close >= candle.open
      ctx.strokeStyle = isGreen ? "#10b981" : "#ef4444"
      ctx.fillStyle = isGreen ? "#10b981" : "#ef4444"

      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x + candleWidth / 2, yHigh)
      ctx.lineTo(x + candleWidth / 2, yLow)
      ctx.stroke()

      const bodyHeight = Math.abs(yClose - yOpen)
      ctx.fillRect(x, Math.min(yOpen, yClose), candleWidth, Math.max(bodyHeight, 1))
    })
  }, [candles, currentPrice])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold text-gray-900 md:text-5xl">
                เริ่มเทรด <span className="text-blue-600">วันนี้</span> กับคุยเทรด
              </h1>
              <p className="mb-8 text-lg text-gray-600">ระบบอัตโนมัติด้วย AI ที่ช่วยให้คุณเทรดได้ง่ายและมีประสิทธิภาพมากขึ้น</p>
            </div>
          </div>
        </section>

        {/* Trading Dashboard */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Price Stats */}
            <div className="mb-6 grid gap-4 md:grid-cols-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ราคาปัจจุบัน</p>
                    <p className="text-xl font-bold">
                      $
                      {currentPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: currentPrice > 100 ? 2 : 4,
                      })}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-3 ${priceChange >= 0 ? "bg-green-100" : "bg-red-100"}`}>
                    {priceChange >= 0 ? (
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    ) : (
                      <TrendingDown className="h-6 w-6 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">การเปลี่ยนแปลง</p>
                    <p className={`text-xl font-bold ${priceChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {priceChange >= 0 ? "+" : ""}
                      {priceChange.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-100 p-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ปริมาณ 24h</p>
                    <p className="text-xl font-bold">{volume24h.toFixed(2)}M</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">สถานะ</p>
                    <p className="text-xl font-bold text-green-600">Active</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chart */}
            <Card className="overflow-hidden">
              <div className="border-b bg-gray-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{selectedPair}</h3>
                    <p className="text-sm text-gray-600">
                      {forexPairs.find((p) => p.symbol === selectedPair)?.name || "Gold"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {forexPairs.map((pair) => (
                      <Button
                        key={pair.symbol}
                        size="sm"
                        variant={selectedPair === pair.symbol ? "default" : "outline"}
                        onClick={() => setSelectedPair(pair.symbol)}
                      >
                        {pair.symbol}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <canvas ref={canvasRef} width={1200} height={500} className="w-full" />
              </div>
            </Card>

            {/* Trading Actions */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold text-green-600">ซื้อ {selectedPair}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">จำนวน (Lots)</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3"
                      placeholder="0.01"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">ราคา</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3"
                      value={currentPrice.toFixed(currentPrice > 100 ? 2 : 4)}
                      readOnly
                    />
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">ซื้อ {selectedPair}</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold text-red-600">ขาย {selectedPair}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">จำนวน (Lots)</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3"
                      placeholder="0.01"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">ราคา</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3"
                      value={currentPrice.toFixed(currentPrice > 100 ? 2 : 4)}
                      readOnly
                    />
                  </div>
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700">ขาย {selectedPair}</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
